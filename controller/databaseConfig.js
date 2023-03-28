//NAME :NG MING XUAN
// CLASS: DIT/1B/01
// ADMIN NUMBER: P2100043

console.log("--------------------------------");
console.log(" databaseconfig.js");
console.log("--------------------------------");

//-----------------------------------------
// imports
//-----------------------------------------
const mysql = require("mysql");

//-----------------------------------------
// code implementation
//-----------------------------------------
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root1234', //your own password
            database: 'nginvest',
            dateStrings: true
        });


        return conn;
    }
}
//-----------------------------------------
// exports
//-----------------------------------------
module.exports = dbconnect;