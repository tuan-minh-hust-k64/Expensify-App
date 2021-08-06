import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import NavHeader from './NavHeader';
import NavLeft from './NavLeft';
import Content from './Content';
const PageLogin = (props) => {
    return (
        <div>
            <div>
                <NavHeader isAuthenticated={false} />
            </div> 
            <NavLeft isAuthenticated={false} />
             <Content />
        </div>
       

    )
}
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(PageLogin);





//    <div className="box-layout">
    //         <div className="box-layout__box">
    //             <h1 className="box-layout__title">TikTok App</h1>
    //             <p>It's time to get your expenses under control.</p>
    //             <button className="button" onClick = {props.startLogin}>Login with Google</button>
    //         </div>
    //    </div>