import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Menu", age: 29 },
      { name: "Stage", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "List", age: 29 },
        { name: "Gate", age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Min", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Gate", age: 26 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "MIN!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies : Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
      )
    }

    return (
      <div className="App">
        <h1> Class Component </h1>
        <p> This is really working </p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "MIN")}
        >
          Switch Name
        </button>
        <button style={style} onClick={() => this.switchNameHandler("MIN!!!")}>
          Switch Name
        </button>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// Class Component
