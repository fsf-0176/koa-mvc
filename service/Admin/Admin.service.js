
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
    }
}