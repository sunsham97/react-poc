import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name}. I'm {props.age} years old.
      </p>
      <p>
        Some random number between 0 and 30: {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
