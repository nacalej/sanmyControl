const mysql  = require("promise-mysql");
const config = require("../utils/config/index.js");

const connection = mysql.createConnection({
    host: config.dbHost || 'localhost',
    user: config.dbUser || 'root',
    password: '',
    database: config.dbDatabase || 'sanmycontrol'
});


const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}