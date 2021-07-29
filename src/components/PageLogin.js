import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
const PageLogin = (props) => {
    return (
       <div>
            <h1>Login</h1>
            <button onClick = {props.startLogin}>Login</button>
       </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(PageLogin);