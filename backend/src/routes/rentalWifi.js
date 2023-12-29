const { Router } = require("express");
const { getAllRentalsWifi,
    postRentalWifi,
    getRentalWifiById,
    updateRentalWifi,
    deleteRentalWifi
 } = require("../controllers/rentalWifi.js");

const router = Router();

router.get('/',       getAllRentalsWifi);
router.post('/',      postRentalWifi);
router.get('/:id',    getRentalWifiById);
router.put('/:id',    updateRentalWifi);
router.delete('/:id', deleteRentalWifi);



module.exports = router;