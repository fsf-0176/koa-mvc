const { mysql } = require('../../database')

module.exports = {
    async shopcart(data){
        const {page,name} = data
        console.log(name);
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_cart WHERE goods_name LIKE '%${name}%'`)
        return rows
    }
}