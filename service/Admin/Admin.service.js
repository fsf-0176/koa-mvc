
const { adminModel } = require('../../model');
const index = async (id) => {
    return await adminModel.index(id)
}
module.exports = {
    index
}