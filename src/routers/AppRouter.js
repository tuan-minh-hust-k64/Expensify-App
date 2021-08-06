import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Page404 from '../components/Page404';
import PageLogin from '../components/PageLogin';
import PrivateRoute from './PrivateRoute';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();
const Approuter = () => (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={PageLogin} exact={true}/>
                    <PrivateRoute path="/home" component={Home} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </Router>
);
export default Approuter;
