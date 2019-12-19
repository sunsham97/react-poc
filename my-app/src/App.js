import React, { Component } from 'react';
import './App.css';

// component imports
import Person from './Person/person'

const app = props => {
      let persons_data = this.state.persons.map((person, index) => <Person key = {index} name = {person.name} age = {person.age} />);

      return (
        <div className="App">
          <h1>Hello World!!</h1>
          {persons_data}
          <hr />
          <p>demo for props.children</p>
          <Person name="jkl" age="10"><b>Hobbies: Singing</b></Person>
          <button onClick={this.handleSwitchClick}>Switch</button>
        </div>
      );
}

export default app;

// class App extends Component {
//   state = {
//     persons : [
//       {name: "abc", age: 20},
//       {name: "def", age: 15},
//       {name: "ghi", age: 25}
//     ]
//   }

//   handleSwitchClick = ()=> {
//     console.log('adding 5 years to every person')
//     this.setState({persons: [
//       {name: "abc", age: this.state.persons[0].age + 5},
//       {name: "def", age: this.state.persons[1].age + 5},
//       {name: "ghi", age: this.state.persons[2].age + 5}
//       ]
//     });
//   }

//   render() {

//     let persons_data = this.state.persons.map((person, index) => <Person key = {index} name = {person.name} age = {person.age} />);

//     return (
//       <div className="App">
//         <h1>Hello World!!</h1>
//         {persons_data}
//         <hr />
//         <p>demo for props.children</p>
//         <Person name="jkl" age="10"><b>Hobbies: Singing</b></Person>
//         <button onClick={this.handleSwitchClick}>Switch</button>
//       </div>
//     );
//     // equivalent of the jsx above, but proves to be cumbersome to write
//     // hence prefered way is writing JSX
//     // return React.createElement('div',{className: "App"},React.createElement('h1',null,'Hello World!!'));
//   }
// }

// export default App;
