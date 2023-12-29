require('dotenv').config();

module.exports = {
    dbUser     : process.env.DB_USER,
    dbName     : process.env.DB_NAME,
    dbHost    : process.env.DB_HOST,
    dbPassword : process.env.DB_PASSWORD
}
/*
.env
GOOGLE_CLIENT_ID="854227542796-291u9j8cs644uo00jhukrolv3od6gope.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"
API_KEY="https://s3.amazonaws.com/dolartoday/data.json"
*/