require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index.js");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders   = require("./src/utils/middlewares/setHeaders");

const cors = require("cors");
const config = require("./src/config/config.js");

const app = express();

//Setear headers:
app.use(express.urlencoded({ extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}));
app.use(morgan('dev'));
app.use(setHeaders);


app.use(
    cors({
      origin: "*",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

//Setear rutas:
app.use('', routes);

//Middlewares de control de errores:
app.use(errorHandler);

//Server.listen

app.listen(config.dbPort, async () => {
    console.log(`Server on port ${config.dbPort}`);
});




module.exports = app;