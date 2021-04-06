const { mysql } = require('../../database');
const md5 = require('md5');
const { user } = require('../../service/Admin/Admin.service');

module.exports = {
    // 首页数据
    async index(id) {
        try {
            const [goods] = await mysql().execute("SELECT COUNT(`id`) AS `goods` FROM `hiolabs_goods` WHERE `is_on_sale` = ? AND `is_delete` = ?",[1,0])
            const [order] = await mysql().execute("SELECT COUNT(`id`) AS `order` FROM `hiolabs_order` WHERE `order_status` = ? ",[300])
            const [user] = await mysql().execute('SELECT COUNT(`id`) AS `user` FROM `hiolabs_user`')
            const [setting] = await mysql().execute("SELECT `countdown` FROM `hiolabs_settings`")
            return {
                goods:goods[0].goods,
                order:order[0].order,
                user:user[0].user,
                setting:setting[0].countdown
            }
        } catch (error) {
            return error
        }
    },
    // 注册
    async register(data) {
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
    },
    // 登录
    async login(data) {
        const { username, password } = data
        try {
            const [rows] = await mysql().execute("SELECT `username`,`password`,`id`,`last_login_time` FROM   `hiolabs_admin` WHERE `username` = ? AND `password` = ? ",[username,md5(password)])
            return rows[0]
        } catch (error) {
            return false
        }
    },
    async user(data){
        let {name} = data
        name = name ? name : ''
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_user WHERE nickname LIKE '%${name}%'`)
        rows.forEach(item => {
            item.nickname = Buffer.from(item.nickname,'base64').toString()
        });
        return rows
    },
    async showSetting(){
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_show_settings`);
        return rows
    },
    async ad(){
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_ad WHERE is_delete = 0`)
        return rows
    },
    async notice(){
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_notice`)
        return rows
    },
    async super(){
        const [rows] = await mysql().execute(`SELECT * FROM hiolabs_admin WHERE is_delete = 0`)
        return rows
    }
}