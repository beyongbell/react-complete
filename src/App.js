import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name : 'Max',   age: 28 },
      { name : 'Menu',  age: 29 },
      { name : 'Stage', age: 26 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name : 'Min',  age: 28 },
      { name : 'List', age: 29 },
      { name : 'Gate', age: 26 },
    ],})
  }

  render() {
    return (
      <div className="App">
        <h1> Class Component </h1>
        <p> This is really working </p>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

// Class Component
