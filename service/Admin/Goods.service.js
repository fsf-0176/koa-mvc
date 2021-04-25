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
    },
    out(data) {
        return goodsModel.out(data)
    },
    onsale(data) {
        return goodsModel.onsale(data)
    },
    setGoodsStatus(data) {
        return goodsModel.setGoodsStatus(data)
    },
    delGoods(data) {
        return goodsModel.delGoods(data)
    }
}