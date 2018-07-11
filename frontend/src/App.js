import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom Francombe Music</h1>
          <title>Tom Francombe Music</title>
         
        </header>
        
          <Navigation />
      
      </div>
    );
  }
}

export default App;
