const { mysql } = require('../../database')

module.exports = {
    async index(data) {
        let { page, name, size: Size } = data
        page = parseInt(page) || 1
        const size = parseInt(Size) || 10
        const offsetLeft = (page - 1) * size
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_goods WHERE name LIKE '%${name}%' LIMIT ?,?`, [offsetLeft, size])
        const [count] = await mysql().execute(`SELECT count(id) as count FROM hiolabs_goods WHERE name LIKE '%${name}%'`)
        for (const item of rows) {
            let [info] = await mysql().execute(`SELECT * FROM hiolabs_category WHERE id = ? LIMIT 1`, [item.category_id])
            item.category_name = info.name;
            if (item.is_on_sale == 1) {
                item.is_on_sale = true;
            } else {
                item.is_on_sale = false;
            }
            if (item.is_index == 1) {
                item.is_index = true;
            } else {
                item.is_index = false;
            }
            let [product] = await mysql().execute(`SELECT * FROM hiolabs_product WHERE goods_id = ? AND is_delete = ?`, [item.id, 0])
            for (const ele of product) {
                let [spec] = await mysql().execute(`SELECT * FROM hiolabs_goods_specification WHERE id = ? AND is_delete = ? LIMIT 1`, [ele.goods_specification_ids, 0])
                ele.value = spec.value
                ele.is_on_sale = ele.is_on_sale ? "1" : "0"
            }
            item.product = product
        }
        return { data: rows, count: count[0]['count'] }
    },
    async category() {
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_category`)
        return rows
    },
    async specification() {
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_specification WHERE id > 0`)
        return rows
    }
}