import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth.js';
import expensesReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    return createStore(
        combineReducers (
            {
                expenses: expensesReducer,
                filter: filterReducer,
                auth: authReducer,
            }
        ),
       composeEnhancers(applyMiddleware (thunk)),
    )
}

export default configureStore;