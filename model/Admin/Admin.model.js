const {mysql} = require('../../database');
const index = async (id) => {
    const [rows] = await mysql().execute('select * from `user` where `id` = ?',[id]);
    return rows[0];
}
module.exports = {
    index
}