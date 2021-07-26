import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import Page404 from '../components/Page404';
import NavHeader from '../components/NavHeader';
const Approuter = () => (
        <BrowserRouter>
            <div>
                <NavHeader />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/create" component={Create} />
                    <Route path="/help" component={Help} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </BrowserRouter>
);
export default Approuter;
