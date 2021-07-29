import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {stopLogin} from '../actions/auth';
import {resetExpenses} from '../actions/expense';
const NavHeader = (props) => (
    <div>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink activeClassName="is-active" to="/create">create</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="is-active" to="/home">home</NavLink>
            </li>
        </ul>
        <button onClick={props.stopLogin}
        >Logout</button>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    stopLogin: () => dispatch(stopLogin()),
})
export default connect(undefined, mapDispatchToProps)(NavHeader);



