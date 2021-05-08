const indexModel = require('../../model/index/index.model')

module.exports = {
    category() {
        return indexModel.category()
    },
    goods(data) {
        return indexModel.goods(data)
    },
    goodsDetail(data) {
        return indexModel.goodsDetail(data)
    }
}