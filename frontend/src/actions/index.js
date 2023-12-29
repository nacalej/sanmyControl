import axios from "axios";
import Swal from "sweetalert2";


import {
  GET_MACHINES,
  GET_MACHINE_BY_ID,
  GET_EARNINGS,
  GET_RENTALS,
  GET_RENTAL_BY_ID,
  UPDATE_RENTAL,
  GET_EARNINGS_BY_MONTH,
  GET_STATUS_EARNINGS,
  GET_MOVEMENTS,
  GET_MOVEMENT_BY_ID,
  GET_COUNT_RENTALS,
  GET_REVENUE_LAST_MONTH,
  MOST_RENTED_MACHINE,
  GET_VALUE_DOLLAR,
  GET_EARNINGS_PER_DAY,
  GET_RENTAL_WIFI,
  GET_RENTALWIFI_BY_ID,
  GET_EARNINGS_WIFI_PER_DAY,
  GET_EARNINGS_PER_SELECTED_MONTH,
  GET_EARNINGS_PER_CASH_PAYMENTS,
  GET_EARNINGS_PER_MOBILE_PAYMENTS,
  GET_ALL_INCOME_MOVEMENTS,
  /*USERS*/
  GET_USERS,
  UPDATE_USER,
  GET_USER_BY_NAME
  /* END USERS*/
} from "./const";

//Actions:

export const getEarnings = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/earnings")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getEarningsPerDay = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/earnings/perDay")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_PER_DAY,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getEarningsWifiPerDay = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/earnings/wifiPerDay")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_WIFI_PER_DAY,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getEarningsPerSelectedMonth = () => {
  console.log("Payload in action getEarningsPerSelectedMonth: ");
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/earningsPerMonth/")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_PER_SELECTED_MONTH,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};

export const getTotalCashPayments = () => {
  console.log("Payload in action getEarningsPerSelectedMonth: ");
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/earningsPerMonth/cashPayments")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_PER_CASH_PAYMENTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};

export const getTotalMobilePayments = () => {
  console.log("Payload in action getEarningsPerSelectedMonth: ");
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/earningsPerMonth/mobilePayments")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_PER_MOBILE_PAYMENTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};

export const getAllIncomeMovements = () => {
  console.log("Payload in action getEarningsPerSelectedMonth: ");
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/movements/income")
      .then((response) => {
        dispatch({
          type: GET_ALL_INCOME_MOVEMENTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};
export const getRevenueLastMonth = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/earnings/lastMonth")
      .then((response) => {
        dispatch({
          type: GET_REVENUE_LAST_MONTH,
          payload: response.data,
        });
        console.log("REVENUE: ", dispatch)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getStatusEarnings = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/status")
      .then((response) => {
        dispatch({
          type: GET_STATUS_EARNINGS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getEarningsByMonth = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/earnings/month")
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_BY_MONTH,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const getCountRentals = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/chartData")
      .then((response) => {
        dispatch({
          type: GET_COUNT_RENTALS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};




//////////// RENTAL WIFI
export const getAllRentalsWifi = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/rentalWifi")
      .then((response) => {
        dispatch({
          type: GET_RENTAL_WIFI,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getRentalWifiById = (id) => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/rentalWifi/" + id)
      .then((response) => {
        dispatch({
          type: GET_RENTALWIFI_BY_ID,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};


export function postRentalWifi(payload) {
  return async () => {
    try {
      let response = await axios.post("http://localhost:5000/rentalWifi", payload);
      console.log("Response de POST: ", payload);
      // alert("Pokemon created! :)");
      return response;
    } catch (error) {
      // alert('Sorry, Pokemon name already exist')
      console.log("Error in action postPoke: ", error);
    }
  };
}


/////////// END RENTAL WIFI 

///////USERS
export const getAllUsers = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:5000/users")
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserByName = (payload) => {
  console.log("PAYLOAD NAMEEEEEE: ", payload);
  return async function (dispatch){
      try{
          let aux = await axios.get("http://localhost:5000/users?name="+payload)
          return dispatch({
              type: GET_USER_BY_NAME,
              payload: aux.data
          })
      }
      catch(e){
          return dispatch({
              type: GET_USER_BY_NAME,
              payload: "Not Found"
          })
      }
  }
}
export function addUser(payload) {
  return async () => {
    try {
      let response = await axios.post("http://localhost:5000/users", payload);
      console.log("Response de POST: ", payload);
      // alert("Pokemon created! :)");
      return response;
    } catch (error) {
      // alert('Sorry, Pokemon name already exist')
      console.log("Error in action addUser: ", error);
    }
  };
}

export function updateProduct(payload) {
  console.log("UPDATE USER ACTION -------", payload);
  let id = payload.id;
  return async function (dispatch) {
    let request = await axios.put(
      "http://localhost:3001/users/"+id,
      payload
    );
    return dispatch({
      type: UPDATE_USER,
      payload: request.data,
    });
  };
}
//////END USERS