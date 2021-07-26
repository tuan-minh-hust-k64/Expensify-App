import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => {   
    return (
        <div>
            <h1>Information</h1>
            <p>this is a message: {props.info}</p>
        </div>
    )
};

const withAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated&&<p>this is message for you.</p>}
            <WrapperComponent {...props} />
        </div>
    )
}


const AuthInfo = withAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info='fuck you' />, document.getElementById('root'));
