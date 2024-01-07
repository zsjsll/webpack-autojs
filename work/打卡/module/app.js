import * as tools from "tools.js"





export class QQ {
    constructor(package_id) {
        this.package_id = package_id
    }

    run() {
        backHome()
        return startAPP(this.package_id)
    }
}
