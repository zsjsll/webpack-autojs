export default {
    startAPP(package_id) {
        app.launchPackage(package_id)
        if (packageName(package_id).findOne(20e3) === null) return false
        else return true
    },
}
