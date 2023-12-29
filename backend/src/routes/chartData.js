const { Router } = require("express");
const {
    getCountRentals     
 } = require("../controllers/chartData.js");

const router = Router();

router.get('/', getCountRentals);



module.exports = router;