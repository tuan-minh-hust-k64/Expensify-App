import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import NavHeader from '../components/NavHeader';
const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <div>
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <NavHeader isAuthenticated={true}/>
                        <Component {...props} />
                    </div>
                ):(
                    <Redirect to="/" />
                )
            )} />
        </div>
    )
};
const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);