import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux';

import './App.css';
import Main from './screens/Main';
import Login from './components/Login';


function App(props) {
  const { loggedIn, firstname } = props;
  return (
    <div className="App">
      <div className="App-header">
        {loggedIn ? <Main firstname={firstname} /> : <Login />}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = {
  login,
  logout,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
