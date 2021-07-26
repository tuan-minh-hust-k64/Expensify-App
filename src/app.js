import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore.js";
import getVisibleExpenses from "./selectors/expenses.js";
import { addExpenses } from "./actions/expense.js";
import { setTextFilter, sortByAmount } from "./actions/filter.js";
import 'normalize.css/normalize.css';
import './style/style.scss'
import AppRouter from './routers/AppRouter.js';
const store = configureStore();
store.dispatch(addExpenses({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpenses({ description: 'Gas bill', amount: 1000  }));
store.dispatch(addExpenses({ description: 'Rent', amount: 109500 }));


const jsx =( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDom.render(jsx, document.getElementById('root'));