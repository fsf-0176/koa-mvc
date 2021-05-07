const { mysql } = require('../../database')

module.exports = {
    async category() {
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_category WHERE is_show = 1`)
        return rows
    },
    async goods(data) {
        const cid = data.cid.split(',')
        const result = {}
        for (const id of cid) {
            const [rows] = await mysql().execute(`SELECT * FROM hiolabs_goods WHERE category_id = ${id} LIMIT 6`)
            result[id] = rows
        }
        return result
    }
}