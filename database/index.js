const mysql = require('mysql2/promise');
const { database } = require('../config')
let connection;
const initDb = async () => {
    connection = await mysql.createConnection(database);
}

module.exports = {
    initDb,
    mysql() {
        return connection
    }
}