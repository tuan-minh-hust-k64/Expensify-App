import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore.js";
import 'normalize.css/normalize.css';
import LoadingPage from "./components/LoadingPage";
import AppRouter, {history} from './routers/AppRouter.js';
import { firebase, database, provider } from './firebase/firebase';
import { logout, login, stopLogin } from "./actions/auth.js";
import { loadVideo, startLoadVideo } from "./actions/video.js";

import './style/style.scss'


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
store.dispatch(startLoadVideo());
ReactDom.render(<LoadingPage />, document.getElementById('root'));
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch(login({uid: user.uid}));
            
                renderApp();
                if(history.location.pathname==='/') {
                    history.push('/home');
                }
            
        }else{
            store.dispatch(logout());
            renderApp();
            history.push('/');
    }
});

