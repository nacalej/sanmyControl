const { Router } = require("express");
const {
    getEarningsByDay,
    getEarningsByActualMonth,
    getTotalRevenueLastMonth,
    getEarningsWifiPerDay
     
 } = require("../controllers/earnings.js");

const router = Router();

router.get('/', getEarningsByDay);
router.get('/wifiPerDay', getEarningsWifiPerDay);
router.get('/month', getEarningsByActualMonth)
router.get('/lastMonth', getTotalRevenueLastMonth);



module.exports = router;