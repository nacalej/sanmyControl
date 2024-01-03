const mysql  = require("promise-mysql");
const config = require("../utils/config/index.js");

const connection = mysql.createConnection({
    host: config.dbHost ,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase 
});


const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}