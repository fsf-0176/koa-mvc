
const { user } = require('../../controller/Admin/Admin.controller');
const { adminModel } = require('../../model');

module.exports = {
    async index() {
        return await adminModel.index()
    },
    async register(data) {
        return await adminModel.register(data);
    },
    async login(data){
        return await adminModel.login(data);
    },
    async user(data){
        return await adminModel.user(data)
    },
    async showSetting(){
        return await adminModel.showSetting()
    },
    async ad(){
        return await adminModel.ad()
    },
    async notice(){
        return await adminModel.notice()
    },
    async super(){
        return await adminModel.super()
    }
}