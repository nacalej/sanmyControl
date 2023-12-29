const { getConnection } = require("../database/database.js");



async function getCountRentals(req, res){
    try {
        const connection = await getConnection();
        // const countRentals = `SELECT date_format(dateRental, "%d-%m-%Y") AS dateRental, SUM(amountRental) 
        // as total_day FROM rentals 
        //  GROUP BY dateRental 
        // ORDER BY dateRental`;
        const countRentals = `
        SELECT SUM(IF(MONTH(dateRentalWifi) = 1,  amountRentalWifi, 0)) AS Ene,
        SUM(IF(MONTH(dateRentalWifi) = 2,  amountRentalWifi, 0)) AS Feb,
        SUM(IF(MONTH(dateRentalWifi) = 3,  amountRentalWifi, 0)) AS Mar,
        SUM(IF(MONTH(dateRentalWifi) = 4,  amountRentalWifi, 0)) AS Abr,
        SUM(IF(MONTH(dateRentalWifi) = 5,  amountRentalWifi, 0)) AS May,
        SUM(IF(MONTH(dateRentalWifi) = 6,  amountRentalWifi, 0)) AS Jun,
        SUM(IF(MONTH(dateRentalWifi) = 7,  amountRentalWifi, 0)) AS Jul,
       SUM(IF(MONTH(dateRentalWifi) = 8,  amountRentalWifi, 0)) AS Ago,
        SUM(IF(MONTH(dateRentalWifi) = 9,  amountRentalWifi, 0)) AS Sep,
        SUM(IF(MONTH(dateRentalWifi) = 10, amountRentalWifi, 0)) AS Oct,
        SUM(IF(MONTH(dateRentalWifi) = 11, amountRentalWifi, 0)) AS Nov,
        SUM(IF(MONTH(dateRentalWifi) = 12, amountRentalWifi, 0)) AS Dic
      FROM rentalWifi
        `;
        connection.query(countRentals, (error, results) => {
          if (error !== null) {
            res.send(error);
          } else {
            if (!results.length) {
              res.status(404).send("Not found :(");
            } else {
              // const val = {
              //   monthName: 
              // }
               res.status(200).send(results);
            //  let response = results.map((j) =>({
            //   months: {ene: j.Ene,
            //   feb: j.Feb,
            //   mar: j.Mar,
            //   abr: j.Abr,
            //   may: j.May,
            //   jun: j.Jun,
            //   jul: j.Jul,
            //   ago: j.Ago,
            //   sep: j.Sep,
            //   oct: j.Oct,
            //   nov: j.Nov,
            //   dic: j.Dic}
            // }));
            //  console.log(response);
            //  console.log("TYPE OF: ", typeof(response));
            //  res.status(200).send(response);
             }
          }
        });
      } catch (error) {
        res.status(500).send(error.message);
      }
}


module.exports ={
    getCountRentals
    
};