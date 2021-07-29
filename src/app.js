import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore.js";
import getVisibleExpenses from "./selectors/expenses.js";
import { addExpenses, startSetExpenses } from "./actions/expense.js";
import { setTextFilter, sortByAmount } from "./actions/filter.js";
import 'normalize.css/normalize.css';
import './style/style.scss'
import AppRouter, {history} from './routers/AppRouter.js';
import { firebase, database, provider } from './firebase/firebase';
import { logout, login } from "./actions/auth.js";



const store = configureStore();
const jsx =( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDom.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};
ReactDom.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch(login({uid: user.uid}));
            store.dispatch(startSetExpenses({uid: user.uid})).then(() => {
                renderApp();
                if(history.location.pathname==='/') {
                    history.push('/home');
                }
            })
        }else{
            store.dispatch(logout());
            renderApp();
            history.push('/');
    }
});

