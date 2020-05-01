import React from 'react';
import { GoogleLogout } from 'react-google-login';

export default function Login(props) {
    return (
        <div>
            <GoogleLogout
                clientId="368994794866-m0pdjh8ee8mipldasevv400v9cmmrqjg.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                )}
                buttonText="Logout"
                onLogoutSuccess={() => {
                    props.logOut()
                }} />
        </div>)
}
















