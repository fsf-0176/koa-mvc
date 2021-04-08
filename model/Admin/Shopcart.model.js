const { mysql } = require('../../database')

module.exports = {
    async shopcart(data) {
        let { page, name, size:Size } = data
        page = parseInt(page) || 1
        const size = parseInt(Size) || 10
        const offsetLeft = (page - 1) * size
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_cart WHERE goods_name LIKE '%${name}%' LIMIT ?,?`, [offsetLeft, size])
        const [count] = await mysql().execute(`SELECT count(id) as count FROM hiolabs_cart WHERE goods_name LIKE '%${name}%'`)
        return { data: rows, count: count[0]['count'] }
    }
}