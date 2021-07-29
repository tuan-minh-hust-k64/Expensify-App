import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import Page404 from '../components/Page404';
import NavHeader from '../components/NavHeader';
import PageLogin from '../components/PageLogin';
import PrivateRoute from './PrivateRoute';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
const Approuter = () => (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={PageLogin} exact/>
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/create" component={Create} />
                    <PrivateRoute path="/edit/:id" component={Edit} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </Router>
);
export default Approuter;
