const { getConnection } = require("../database/database.js");

async function getAllRentalsWifi(req, res, next) {
  try {
    const connection = await getConnection();
    const allRentalsWifi = `SELECT rw.id, rw.time, rw.amountRentalWifi, 
    rw.typeOfPay, rw.paymentId, rw.addressUser, users.name as nameUser, users.macAddress as addressUser,
    date_format(rw.dateRentalWifi, "%d-%m-%Y %r")
     AS dateRentalWifi,  date_format(rw.enDateRentalWifi, "%d-%m-%Y %r")
     AS enDateRentalWifi FROM rentalWifi AS rw 
     INNER JOIN users WHERE addressUser = users.macAddress ORDER BY rw.id desc`;
    connection.query(allRentalsWifi, (error, results) => {
      if (error !== null) {
        res.send(error);
      } else {
        if (!results.length) {
          res.status(404).send("Rental not found :(");
        } else {
          let response = results.map((rentalWifi) => ({
            id: rentalWifi.id,
            time: rentalWifi.time,
            amountRentalWifi: rentalWifi.amountRentalWifi,
            typeOfPay: rentalWifi.typeOfPay,
            paymentId: rentalWifi.paymentId,
            dateRentalWifi: rentalWifi.dateRentalWifi,
            enDateRentalWifi: rentalWifi.enDateRentalWifi,
            nameUser: rentalWifi.nameUser,
            addressUser: rentalWifi.addressUser
          }));
          res.status(200).send(response);
        }
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/// END OF getAllConsoles

///BEGIN OF postConsole
async function postRentalWifi(req, res) {
  const { amountRentalWifi, time, typeOfPay, paymentId, addressUser } = req.body;
  let now = new Date();

  try {
    const connection = await getConnection();

    const rentalWifi = {
      amountRentalWifi,
      dateRentalWifi: now,
      time,
      typeOfPay,
      paymentId,
      addressUser
    };
    console.log("RENTAL WIFI: ", rentalWifi);
   

      const newRentalWifi = await connection.query(
        "INSERT INTO rentalWifi SET ? ",
        rentalWifi
      );

      res.status(200).send(newRentalWifi);
      if (!newRentalWifi) {
        res
          .status(500)
          .send("We could not insert values in table rental wifi :(");
      }
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}
///END OF postConsole

///BEGIN OF getConsoleById
async function getRentalWifiById(req, res, next) {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    const rentalWifiById =
      `SELECT id, time, amountRentalWifi, 
      date_format(dateRentalWifi, "%d-%m-%Y")
       AS dateRentalWifi FROM rentalWifi WHERE id= ` + connection.escape(id);
    await connection.query(rentalWifiById, (error, results) => {
      if (error !== null) {
        console.log(error);
        next(error);
      } else {
        if (!results.length) {
          res.status(404).send("RentalWifi not found :(");
        } else {
          let responseReady = results.map((rentalWifi) => ({
            id: rentalWifi.id,
            time: rentalWifi.time,
            amountRentalWifi: rentalWifi.amountRentalWifi,
            dateRentalWifi: rentalWifi.dateRentalWifi,
          }));
          // console.log("RESPONSE FIXED: ", responseReady);
          res.status(200).send(responseReady);
        }
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
///END OF getConsoleById

///BEGIN OF deleteConsole
async function deleteRentalWifi(req, res, next) {
  const { id } = req.params;
  try {
    const {id} = req.params;
    console.log("ID -- back: ", id);
        const connection = await getConnection();
        await connection.query('DELETE FROM rentalWifi WHERE id= ?', [id], (error, result) => {
            if(error!==null) {
               res.send(error.message);
            }
            else{
                res.status(200).send(result);
            }

        });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
///END OF deleteConsole

///BEGIN OF updateConsole
async function updateRentalWifi(req, res, next) {
  const  {id}  = req.params;
  // const { id}  = req.body;
  let data = req.body;
  console.log("BackEnd, update rental wifi: ", data);
  // if(id){
      // 

      console.log("ID: ", id);
      
      const connection = await getConnection();
      await connection.query('UPDATE rentalWifi SET ? WHERE id= ?', [data, id], (error, result) => {
       if(error!==null) {
          res.send(error);
       }
       res.status(200).send(result);
      });
}
///END OF updateConsole

module.exports = {
  getAllRentalsWifi,
  postRentalWifi,
  getRentalWifiById,
  updateRentalWifi,
  deleteRentalWifi,
};
