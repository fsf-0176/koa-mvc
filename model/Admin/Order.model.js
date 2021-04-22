const { mysql } = require('../../database')

module.exports = {
    async index(data) {
        const { orderSn = '', consignee = '', status = '101,801' } = data
        console.log(data);
        try {
            const [rows] = await mysql().execute(`SELECT * FROM hiolabs_order WHERE order_sn LIKE '%${orderSn}%' AND consignee LIKE '%${consignee}%' AND order_status IN (?) AND order_type < ? AND order_sn LIKE '%${orderSn}%' AND consignee LIKE '%${consignee}%'`, [status, 7])
            for (const item of rows) {
                const [goodsList] = await mysql().execute(`SELECt goods_name,goods_aka,list_pic_url,number,goods_specifition_name_value,retail_price FROM hiolabs_order_goods WHERE order_id = ? AND is_delete = ?`, [item.id, 0])
                item.goodsList = goodsList
                item.goodsCount = 0;
                item.goodsList.forEach(v => {
                    item.goodsCount += v.number
                });
                let [user] = await mysql().execute(`SELECT nickname,name,mobile,avatar FROM hiolabs_user WHERE id = ?`, [item.user_id])
                user = user[0]
                if (user.nickname) {
                    user.nickname = Buffer.from(user.nickname, 'base64').toString()
                } else {
                    user.nickname = '已删除'
                }
                item.userInfo = user
                const [province_name] = await mysql().execute(`SELECT * FROM hiolabs_region WHERE id = ?`, [item.province])
                item.province_name = province_name
                const [city_name] = await mysql().execute(`SELECT * FROM hiolabs_region WHERE id = ?`, [item.city])
                item.city_name = city_name
                const [district_name] = await mysql().execute(`SELECT * FROM hiolabs_region WHERE id = ?`, [item.district])
                item.district_name = district_name
                let [express] = await mysql().execute(`SELECT * FROM hiolabs_order_express WHERE order_id = ?`, [item.id])
                item.expressInfo = express.shipper_name + express.logistic_code
            }
            return rows;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}