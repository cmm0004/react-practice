import React, { Component } from 'react';
import { MyNav } from './components/nav.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <MyNav />
      </div>
    );
  }
}

export default App;
