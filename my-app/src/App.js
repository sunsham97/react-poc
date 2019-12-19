import React, { Component, useState } from "react";
import "./App.css";

// component imports
import Person from "./Person/person";

// const App = props => {

//   const [personsState, setPersonsState] = useState({
//         persons : [
//           {name: "abc", age: 20},
//           {name: "def", age: 15},
//           {name: "ghi", age: 25}
//         ]
//       });

//   let persons_data = personsState.persons.map((person, index) => <Person key = {index} name = {person.name} age = {person.age} />);

//   const handleSwitchClick = () => {
//     console.log('adding 5 years to every person')
//     setPersonsState({persons: [
//       {name: "abc", age: personsState.persons[0].age + 5},
//       {name: "def", age: personsState.persons[1].age + 5},
//       {name: "ghi", age: personsState.persons[2].age + 5}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hello World!!</h1>
//       {persons_data}
//       <hr />
//       <p>demo for props.children</p>
//       <Person name="jkl" age="10"><b>Hobbies: Singing</b></Person>
//       <button onClick={handleSwitchClick}>Switch</button>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    persons: [
      { name: "abc", age: 20 },
      { name: "def", age: 15 },
      { name: "ghi", age: 25 }
    ]
  };
  
  handleSwitchClick = ref => {
    console.log("adding 5 years to every person");
    ref.setState({
      persons: [
        { name: "abc", age: ref.state.persons[0].age + 5 },
        { name: "def", age: ref.state.persons[1].age + 5 },
        { name: "ghi", age: ref.state.persons[2].age + 5 }
      ]
    });
  };

  nameChangeHandler(event) {
    this.setState({
      persons: [
        { name: "abc", age: this.state.persons[0].age },
        { name: event.target.value, age: this.state.persons[1].age },
        { name: "ghi", age: this.state.persons[2].age }
      ]
    });
  }

  render() {
    let persons_data = this.state.persons.map((person, index) => (
      <Person key={index} name={person.name} age={person.age} />
    ));

    // inline style for button
  const styles = {
    backroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

    return (
      <div className="App">
        <h1>Hello World!!</h1>
        {persons_data}
        <hr />
        <p>demo for props.children</p>
        <Person
          name="jkl"
          age="10"
          click={() => this.handleSwitchClick(this)}
          change={this.nameChangeHandler.bind(this)}
        >
          <b>Hobbies: Singing</b>
        </Person>
        <button 
          onClick={this.handleSwitchClick.bind(this, this)}
          style = {styles}
        >
          Switch
        </button>
      </div>
    );
    // equivalent of the jsx above, but proves to be cumbersome to write
    // hence prefered way is writing JSX
    // return React.createElement('div',{className: "App"},React.createElement('h1',null,'Hello World!!'));
  }
}

export default App;
