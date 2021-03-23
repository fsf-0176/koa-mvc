const { mysql } = require('../../database');
const md5 = require('md5')
const index = async (id) => {
    const [rows] = await mysql().execute('select * from `user` where `id` = ?', [id]);
    return rows[0];
}
const register = async (data) => {
    const { username, password, ip, create_time } = data
    try {
        const [count] = await mysql().execute("select COUNT(`username`) as status FROM `hiolabs_admin` where `username` = ?", [username])
        if (count[0].status) {
            return {
                code: 4,
                msg: '用户已存在'
            }
        }

        const [rows] = await mysql().execute("INSERT INTO `hiolabs_admin` (`username`,`password`,`last_login_ip`,`last_login_time`,`is_delete`) VALUES (?,?,?,?,?)", [username, md5(password), ip, create_time, '0'])
        return rows
    } catch (error) {
        return false
    }

}
module.exports = {
    index,
    register
}