import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const AppFunction = () => {
  const [persons, setPersons] = useState({
    list: [
        { name: "Max", age: 28 },
        { name: "Menu", age: 29 },
        { name: "Stage", age: 26 },
      ],
      otherState: "some other value"
  })

  const switchNameHandler = () => {
    setPersons({
        list: [
            { name : 'Min',  age: 28 },
            { name : 'List', age: 29 },
            { name : 'Gate', age: 26 },
        ]
    })
  }

  return (
    <div className="App">
      <h1> Function Component </h1>
      <p> This is really working </p>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person
        name={persons.list[0].name}
        age={persons.list[0].age}
      />
      <Person name={persons.list[1].name} age={persons.list[1].age}>
        My Hobbies : Racing
      </Person>
      <Person
        name={persons.list[2].name}
        age={persons.list[2].age}
      />
    </div>
  );
};

export default AppFunction;

// Function Component
