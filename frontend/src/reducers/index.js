import {GET_MACHINES, 
    GET_MACHINE_BY_ID, 
    GET_RENTALS, 
    GET_RENTAL_BY_ID, 
    POST_MACHINE, 
    POST_RENTAL,
    UPDATE_RENTAL,
    GET_EARNINGS_BY_MONTH,
    GET_EARNINGS,
    GET_STATUS_EARNINGS,
    GET_MOVEMENTS,
    POST_MOVEMENT,
    GET_MOVEMENT_BY_ID,
    GET_COUNT_RENTALS,
    GET_REVENUE_LAST_MONTH,
    MOST_RENTED_MACHINE,
    GET_VALUE_DOLLAR,
    GET_EARNINGS_PER_DAY,
    GET_RENTAL_WIFI,
    GET_RENTALWIFI_BY_ID,
    POST_RENTAL_WIFI,
    GET_CLIENTS,
    GET_CLIENT_BY_ID,
    POST_CLIENT,
    GET_EARNINGS_WIFI_PER_DAY,
    GET_EARNINGS_PER_SELECTED_MONTH,
    GET_EARNINGS_PER_CASH_PAYMENTS,
    GET_EARNINGS_PER_MOBILE_PAYMENTS,
    GET_ALL_INCOME_MOVEMENTS,
     /*USERS*/
  GET_USERS,
  GET_USER_BY_NAME
  /* END USERS*/
 } from '../actions/const';

//state initial:
const initialState = {
    allMachines: [],
    backUpPokes: [],
    allRentals: [],
    types: [],
    details: [],
    detailsMachines: [],
    earnings: [],
    earningsByMonth: [],
    earningsPerSelectedMonth: [],
    earningsPerCashPayments: [],
    earningsPerMobilePayments: [],
    statusEarnings: [],
    movements: [],
    detailsMovement: [],
    chartData: [],
    revenueLastMonth: [],
    mostRented: [],
    valueDollar: [],
    earningsPerDay: [],
    allRentalWifi: [],
    detailRentalWifi: [],
    earningsWifiPerDay: [],
    allIncomeMovements: [],
     /*USERS*/
     users: [],
    allUsers: []
  /* END USERS*/

};//Cierre initialState

export default function rootReducer(state = initialState, { type, payload }){
    switch(type){

        

            case GET_EARNINGS:
                return {
                    ...state,
                    earnings: payload,
                    // backUpPokes: payload               
                }; 

                case GET_EARNINGS_BY_MONTH:
                    return {
                        ...state,
                        earningsByMonth: payload,
                        // backUpPokes: payload               
                    }; 
                    case GET_STATUS_EARNINGS:
                        return {
                            ...state,
                            statusEarnings: payload,
                            // backUpPokes: payload               
                    };
                case GET_EARNINGS_PER_SELECTED_MONTH:
                    return {
                        ...state,
                        earningsPerSelectedMonth: payload
                    };
                
                    case GET_EARNINGS_PER_CASH_PAYMENTS:
                        return {
                            ...state,
                            earningsPerCashPayments: payload
                        };
                    case GET_EARNINGS_PER_MOBILE_PAYMENTS:
                            return {
                                ...state,
                                earningsPerMobilePayments: payload
                     };
                     
                case GET_REVENUE_LAST_MONTH:
                    return {
                        ...state,
                        revenueLastMonth: payload
                    }
                case GET_EARNINGS_PER_DAY:
                    return {
                        ...state,
                        earningsPerDay: payload
                    }
                case GET_EARNINGS_WIFI_PER_DAY:
                    return{
                        ...state,
                        earningsWifiPerDay: payload
                    }
              
              
                case GET_RENTAL_WIFI:
                    return{
                        ...state,
                        allRentalWifi: payload
                    }
            
              

                case GET_RENTALWIFI_BY_ID:
                    return {
                        ...state,
                        detailRentalWifi: payload
                    }
                case POST_RENTAL_WIFI:
                    return {
                        ...state
                    }
          
            case UPDATE_RENTAL:
                return {
                    ...state
                }
                case GET_COUNT_RENTALS:
                    return {
                        ...state,
                        chartData: payload,
                    };
            /* USERS */
            case GET_USERS:
                return {
                    ...state,
                    allUsers: payload,
                    users: payload
                          
                }; 

                case GET_USER_BY_NAME:
                    return {
                        ...state,
                        users: payload,
                              
                    }; 
            /* END USERS*/
               
           default: 
           return {
               ...state
             };

    }//Cierre switch
};//Cierre rootReducer