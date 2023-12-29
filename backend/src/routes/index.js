const {Router} = require("express");

const rentalWifi     = require("./rentalWifi.js");
const users          = require('./users.js');
const earnings       = require("./earnings.js");
const chartData      = require("./chartData.js");
const router = Router();


router.use('/rentalWifi', rentalWifi);
router.use('/users', users);
router.use('/earnings', earnings);
router.use('/chartData', chartData);

module.exports = router;