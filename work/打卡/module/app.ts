interface Config_App {
    package_id: string
    qq_num: string
    message: string
}

export class QQ implements Config_App {
    package_id: string
    qq_num: string
    message: string
    private start() {
        app.launchPackage(this.package_id)
        if (packageName(this.package_id).findOne(20e3) === null) return false
        else return true
    }
    private sendMsg() {
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin=" + this.qq_num,
            packageName: this.package_id,
        })
        const input = id("input").untilFindOne()
        input.setText(`${this.message}\n当前电量:${device.getBattery()}%\n是否充电:${device.isCharging()}`)
        const send = text("发送").clickable().untilFindOne()
        send.click()
        console.info("发送成功")
        return true
    }

    public run() {
        this.start()
        this.sendMsg()
    }

    constructor(package_id: string, qq_num: string, message: string) {
        this.package_id = package_id
        this.qq_num = qq_num
        this.message = message
    }
}
