const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'it114p-webdev'
});

module.exports = pool.promise();