import React from 'react';
import './App.css';
import Main from './screens/Main';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
