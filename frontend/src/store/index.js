import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//el thunk es para que todo sea asíncrono:

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;
