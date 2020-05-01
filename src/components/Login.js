import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

export default function Login(props) {
    const [bool, showError] = useState(false);
    return (
        <div>
            <h2>Please login </h2>
            {bool ? <p>There was an error logging in. Please try again</p> : null}
            <GoogleLogin
                clientId="368994794866-m0pdjh8ee8mipldasevv400v9cmmrqjg.apps.googleusercontent.com"
                buttonText="Login"
                isSignedIn={true}
                onSuccess={(response) => {
                    showError(false);
                    props.setLogin(response.profileObj.givenName)
                }}
                onFailure={() => {
                    showError(true)
                }}
                cookiePolicy={'single_host_origin'}
            />
        </div>)
}