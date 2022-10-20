const mysql = require("mysql2");

const mysqlConnection = mysql.createPool({
    host: "sql6.freemysqlhosting.net",
    user: "sql6527893",
    password: "ynkHmjM3xp",
    multipleStatements: true
});

module.exports = mysqlConnection.promise();