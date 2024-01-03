const baseUrl = "https://sanmycontrol.onrender.com";


export const  URL_GET_ALL_USERS = `${baseUrl}/users`;

export const URL_ADD_USER = `${baseUrl}/users`;
export const URL_GET_USER_BY_NAME = `${baseUrl}/users?name=`;
export const  URL_UPDATE_USER = `${baseUrl}/users`;
export const  URL_DELETE_USER = `${baseUrl}/users`;
//RENTAL WIFI
export const  URL_GET_ALL_RENTALS_WIFI = `${baseUrl}/rentalWifi`;
export const  URL_UPDATE_RENTAL_WIFI_BY_ID = `${baseUrl}/rentalWifi`;
export const  URL_DELETE_RENTAL_WIFI_BY_ID = `${baseUrl}/rentalWifi`;

export const URL_ADD_RENTAL_WIFI = `${baseUrl}/rentalWifi`;
export const URL_GET_EARNINGS_WIFI_PER_DAY = `${baseUrl}/earnings/wifiPerDay`;
//END RENTAL WIFI

//BEGIN EARNINGS
export const URL_GET_EARNINGS = `${baseUrl}/earnings`;
export const URL_GET_EARNINGS_BY_MONTH =  `${baseUrl}earnings/month`;
export const URL_GET_COUNT_RENTALS =  `${baseUrl}/chartData`;

//END EARNINGS