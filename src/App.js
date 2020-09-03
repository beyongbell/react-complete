import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi Tinnakorn </h1>
        <p> This is really working </p>
        <Person/>
      </div>
    );
  }
}

export default App;

// Class Component
