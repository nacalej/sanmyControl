const { getConnection } = require("../database/database.js");


// SELECT MONTH(dateRental) Mes, SUM(amountRental) total_mes
//      FROM rentals
//      GROUP BY Mes;
///BEGIN OF getAllConsoles


//GANANCIAS POR  MESES:
// SELECT SUM(IF(MONTH(dateRental) = 1,  amountRental, 0)) AS Ene,
//     SUM(IF(MONTH(dateRental) = 2,  amountRental, 0)) AS Feb,
//     SUM(IF(MONTH(dateRental) = 3,  amountRental, 0)) AS Mar,
//     SUM(IF(MONTH(dateRental) = 4,  amountRental, 0)) AS Abr,
//     SUM(IF(MONTH(dateRental) = 5,  amountRental, 0)) AS May,
//     SUM(IF(MONTH(dateRental) = 6,  amountRental, 0)) AS Jun,
//     SUM(IF(MONTH(dateRental) = 7,  amountRental, 0)) AS Jul,
//     SUM(IF(MONTH(dateRental) = 8,  amountRental, 0)) AS Ago,
//     SUM(IF(MONTH(dateRental) = 9,  amountRental, 0)) AS Sep,
//     SUM(IF(MONTH(dateRental) = 10, amountRental, 0)) AS Oct,
//     SUM(IF(MONTH(dateRental) = 11, amountRental, 0)) AS Nov,
//     SUM(IF(MONTH(dateRental) = 12, amountRental, 0)) AS Dic
//   FROM rentals;
async function getEarningsByDay(req, res, next) {
  try {
    const connection = await getConnection();
    // const allMachines = `SELECT date_format(dateRental, "%d-%m-%Y") AS dateRental, 
    // MONTH(dateRental), SUM(amountRental) as total_day 
    // FROM rentals GROUP BY dateRental ORDER BY id desc;
    // `;
    const allMachines = `SELECT date_format(dateRentalWifi, "%d-%m-%Y") AS dateRentalWifi, 
    MONTH(dateRentalWifi), cast(SUM(amountRentalWifi)  as decimal(12,2))  as total_day 
    FROM rentalwifi GROUP BY date_format(dateRentalWifi, "%d-%m-%Y") ORDER BY id desc`;
    connection.query(allMachines, (error, results) => {
      if (error !== null) {
        res.send(error);
      } else {
        if (!results.length) {
          res.status(404).send("Not found :(");
        } else {
          
          res.status(200).send(results);
        }
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/// END OF getAllConsoles

///BEGIN OF postConsole
async function getEarningsByActualMonth(req, res) {
    try {
        const connection = await getConnection();
        const allMachines = `SELECT cast(SUM(amountRentalWifi) 
        as decimal(12,2))  as monthTotal FROM rentalwifi 
        WHERE YEAR(dateRentalWifi) = YEAR(CURRENT_DATE()) 
       AND
         MONTH(dateRentalWifi) = MONTH(CURRENT_DATE());`;
        connection.query(allMachines, (error, results) => {
          if (error !== null) {
            res.send(error);
          } else {
            if (!results.length) {
              res.status(404).send("Not found :(");
            } else {
              let cleaned = results[0].monthTotal?.toFixed(2); 
             // console.log("Earnings by actual month: ---- ", cleaned);
              res.status(200).send(cleaned);
            }
          }
        });
      } catch (error) {
        res.status(500).send(error.message);
      }
}
///END OF postConsole


  async function getTotalRevenueLastMonth(req, res ){
    try {
      const connection = await getConnection();
      const allMachines = `SELECT SUM(amountRentalWifi) AS totaLastMonth FROM rentalwifi 
      WHERE YEAR(dateRentalWifi) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) 
      AND MONTH(dateRentalWifi) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH);`;
      connection.query(allMachines, (error, result) => {
        if (error !== null) {
          res.send(error);
        } else {
          if (!result.length) {
            res.status(404).send("Not found :(");
          } else {
            res.status(200).send(result);
          }
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }

  }
///////////////////////

// SELECT dateRental, amountRental, SUM(amountRental) 
// FROM rentals
// WHERE dateRental BETWEEN DATE_SUB(NOW(),INTERVAL 6 MONTH )  AND NOW()
// GROUP BY dateRental;


async function getEarningsWifiPerDay(req, res, next) {
  try {
    const connection = await getConnection();
    const earningsWifiPerDay = ` SELECT date_format(dateRentalWifi, "%Y-%m-%d") 
    AS dateRentWifi, SUM(amountRentalWifi) as totalWifiPerDay 
    FROM rentalWifi  
    WHERE date_format(dateRentalWifi, "%Y-%m-%d") = CURDATE() GROUP BY dateRentWifi;`;
    connection.query(earningsWifiPerDay, (error, results) => {
      if (error !== null) {
        res.send(error);
      } else {
        if (!results.length) {
          res.status(404).send("Not found :(");
        } else {
          
          res.status(200).send(results);
        }
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
   getEarningsByDay,
   getEarningsByActualMonth,
   getTotalRevenueLastMonth,
   getEarningsWifiPerDay
};