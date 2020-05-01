import React from 'react';
import './App.css';
import Main from './screens/Main';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      firstname: ''
    }
  }

  setLogin = (firstname) => {
    this.setState({ loggedIn: true, firstname })
  }

  setLogout = () => {
    this.setState({ loggedIn: false })
  }

  render() {
    const { loggedIn, firstname } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          {loggedIn ? <Main setLogout={this.setLogout} firstname={firstname} /> : <Login setLogin={this.setLogin} />}
        </div>
      </div>
    );
  }
}

export default App;
