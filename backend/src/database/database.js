const mysql  = require("promise-mysql");
// const config = require("../utils/config/index.js");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sanmycontrol'
});


const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}