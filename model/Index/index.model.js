const { mysql } = require('../../database')

module.exports = {
    async category() {
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_category WHERE is_show = 1`)
        return rows
    }
}