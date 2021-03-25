const { mysql } = require('../../database')

module.exports = {
    async index(data) {
        const { orderSn, consignee, status } = data
        try {
            const [rows] = await mysql().execute(`SELECT * FROM hiolabs_order WHERE order_status IN (?) AND order_type < ? OR order_sn LIKE '%${orderSn}%' OR consignee LIKE '%${consignee}%'`, [status, 7])
            console.log(rows);
            return rows;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}