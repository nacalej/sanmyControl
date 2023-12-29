require('dotenv').config();

module.exports = {
    dbHost     : process.env.DB_HOST,
    dbUser     : process.env.USER ,
    dbDatabase    : process.env.DATABASE,
    dbPort : process.env.PORT 
}

