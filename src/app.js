import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore.js";
import getVisibleExpenses from "./selectors/expenses.js";
import { addExpenses, startSetExpenses } from "./actions/expense.js";
import { setTextFilter, sortByAmount } from "./actions/filter.js";
import 'normalize.css/normalize.css';
import './style/style.scss'
import AppRouter from './routers/AppRouter.js';
import './firebase/firebase';
const store = configureStore();
const jsx =( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDom.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then(() => {
    ReactDom.render(jsx, document.getElementById('root'));
})

