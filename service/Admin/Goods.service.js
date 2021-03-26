const { goodsModel } = require('../../model')

module.exports = {
    index(data){
        return goodsModel.index(data)
    }
}