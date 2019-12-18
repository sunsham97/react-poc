import React from 'react';

const person = (props)=> {
    return (
        <div>
            <p>I'm {props.name}. I'm {props.age} years old.</p>
            <p>Some random number between 0 and 30: {Math.floor(Math.random()*30)}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;