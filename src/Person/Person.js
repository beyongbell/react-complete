import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} year old! </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;

// Function Component