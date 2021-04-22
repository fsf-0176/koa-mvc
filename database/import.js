module.exports = function importSql() {
    const Importer = require('mysql-import');
    const { database } = require('../config');
    const importer = new Importer(database);
    const res = importer.import(__dirname + '/db.sql')
    importer.onProgress(progress => {
        var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
        console.log(`${percent}% Completed`);
    });
    const p = res.then(res => {
        console.log(res,'完成');
    })
    console.log(p);
}