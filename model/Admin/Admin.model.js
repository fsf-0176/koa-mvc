const {mysql} = require('../../database');
const index = async (id) => {
    const [rows] = await mysql().execute('select * from `user` where `id` = ?',[id]);
    return rows[0];
}
const register = async (data) => {
    const {username,password,ip,time} = data
    const [rows] = await mysql().execute("INSERT INTO `hiolabs_admin` (`username`,`password`,`last_login_ip`,`last_login_time`,`is_delete`) VALUES (?,?,?,?,?)",[username,password,ip,time,'0'])
    return rows[0]
}
module.exports = {
    index,
    register
}