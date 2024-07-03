require('dotenv').config();
const sql = require('mssql');


const dbConfig= {
    "user": process.env.DB_USER, // Database username
    "password": process.env.DB_PASSWORD , // Database password
    "server": process.env.DB_SERVER, // Server IP address
    "database": process.env.DB_DATABASE, // Database name
    "port": parseInt(process.env.DB_PORT, 10),
    "options": {
        "encrypt": false,
        "trustServerCertificate": true,
    }  // Disable encryption
}
        

module.exports = {
    sql,
    dbConfig
}