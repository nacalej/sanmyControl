require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index.js");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders   = require("./src/utils/middlewares/setHeaders");

const cors = require("cors");

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

app.listen(5000, async () => {
    console.log("Server on port 5000");
});




module.exports = app;