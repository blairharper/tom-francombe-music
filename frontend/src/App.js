import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginControl from './components/LoginControl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tom Francombe Music</h1>
          <title>Tom Francombe Music</title>
        </header>
        <div className="container">
          <div id ="login-control"></div>
            <LoginControl />
        </div>
    
      </div>
    );
  }
}

export default App;
