import React from 'react';
import {NavLink} from 'react-router-dom';
const NavHeader = () => (
    <div>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink activeClassName="is-active" to="/create">create</NavLink>
            </li>
            <li>
                <NavLink activeClassName="is-active" to="/help">help</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="is-active" to="/">home</NavLink>
            </li>
        </ul>
    </div>
);
export default NavHeader;



