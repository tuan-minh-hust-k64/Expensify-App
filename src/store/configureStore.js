import {createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    return createStore(
        combineReducers (
            {
                expenses: expensesReducer,
                filter: filterReducer,
            }
        ),
       composeEnhancers(applyMiddleware (thunk)),
    )
}

export default configureStore;