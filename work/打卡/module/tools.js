/**
 * 打开APP
 *
 * @param {Package_id} package_id
 *
 */

export function startAPP(package_id) {
    app.launchPackage(package_id)
    if (packageName(package_id).findOne(20e3) === null) return false
    else return true
}

/**
 *重置手机到正常状态，主要是取消设备常亮等相关操作
 *
 * @export
 */
export function resetPhone() {
    device.setBrightness(50)
    device.setBrightnessMode(1) // 自动亮度模式
    device.cancelKeepingAwake() // 取消设备常亮
}

/**
 *唤醒设备
 *
 * @param {string} brightness 亮度,如果小于0 进入调试模式
 */
export function brightScreen(brightness) {
    device.wakeUpIfNeeded() // 唤醒设备
    if (brightness >= 0) {
        device.keepScreenOn() // 保持亮屏
        device.setBrightnessMode(0) // 手动亮度模式
        device.setBrightness(brightness)
    }
    device.cancelVibration() //取消震动

    return device.isScreenOn ? true : false
}
