const { mysql } = require('../../database')

module.exports = {
    async index(data) {
        const { page, name } = data
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_goods WHERE name LIKE '%${name}%'`)
        for (const item of rows) {
            // console.log(item);
            let [info] = await mysql().execute(`SELECT * FROM hiolabs_category WHERE id = ? LIMIT 1`,[item.category_id])
            // info = info[0]
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
            let [product] = await mysql().execute(`SELECT * FROM hiolabs_product WHERE goods_id = ? AND is_delete = ?`,[item.id,0])
            for (const ele of product) {
                let [spec] = await mysql().execute(`SELECT * FROM hiolabs_goods_specification WHERE id = ? AND is_delete = ? LIMIT 1`,[ele.goods_specification_ids,0])
                ele.value = spec.value
                ele.is_on_sale = ele.is_on_sale ? "1":"0"
            }
            item.product = product
        }
        return rows
    }
}