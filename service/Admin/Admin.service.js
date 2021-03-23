
const { adminModel } = require('../../model');
const index = async (id) => {
    return await adminModel.index(id)
}
const register = async (data) => {
    return await adminModel.register(data);
}
module.exports = {
    index,
    register
}