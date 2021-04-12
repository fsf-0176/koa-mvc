const { goodsModel } = require('../../model')

module.exports = {
    index(data) {
        return goodsModel.index(data)
    },
    category() {
        return goodsModel.category()
    },
    specification() {
        return goodsModel.specification()
    },
    drop(data) {
        return goodsModel.drop(data)
    }
}