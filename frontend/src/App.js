import React, { Component } from 'react';
import './App.css';

import LoginControl from './components/logincontrol/LoginControl';
import Navigation from './components/navbar/Navigation';
import MainCarousel from './components/carousel/MainCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom Francombe Music</h1>
          <title>Tom Francombe Music</title>
         
        </header>
        
        <Navigation />
        <div className="carousel-container">
          <MainCarousel />
        </div>
      </div>
    );
  }
}

export default App;
