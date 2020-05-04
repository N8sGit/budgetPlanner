import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';

import { login } from '../redux';

function Login(props) {
    const [bool, showError] = useState(false);
    return (
        <div>
            <h3>To plan your budget please login </h3>
            {bool ? <p>There was an error logging in. Please try again</p> : null}
            <GoogleLogin
                clientId="368994794866-m0pdjh8ee8mipldasevv400v9cmmrqjg.apps.googleusercontent.com"
                buttonText="Login"
                isSignedIn={true}
                onSuccess={(response) => {
                    showError(false);
                    props.login(response.profileObj.givenName)
                }}
                onFailure={() => {
                    showError(true)
                }}
                cookiePolicy={'single_host_origin'}
            />
        </div>)
}


const mapDispatchToProps = {
    login,
};


export default connect(null, mapDispatchToProps)(Login);
