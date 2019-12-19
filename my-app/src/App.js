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
      {id: 'qwe1',name: "abc", age: 20 },
      {id: 'asd2',name: "def", age: 15 },
      {id: 'zxc3', name: "ghi", age: 25 }
    ],
    hideCard: false
  };
  
  handleSwitchClick = ref => {
    console.log("adding 5 years to every person");
    ref.setState({
      persons: [
        {id: 'qwe1', name: "abc", age: ref.state.persons[0].age + 5 },
        {id: 'asd2', name: "def", age: ref.state.persons[1].age + 5 },
        {id: 'zxc3', name: "ghi", age: ref.state.persons[2].age + 5 }
      ]
    });
  };

  nameChangeHandler(event, id) {
    let oldPersons =  [...this.state.persons]
    let personIndex = this.state.persons.findIndex(person=> person.id === id);
    let person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    oldPersons[personIndex] = person;
    //   let oldPersons =  [...this.state.persons]
    //   oldPersons.forEach(person=>{
    //   if(person.id === id) person.name = event.target.value;
    // });
    // unsafe implementation since it directly mutates the state
    this.setState({
      persons: oldPersons
    });
  }

  toggleHideCard = ()=> {
    this.setState({
      hideCard: !this.state.hideCard
    });
  }

  deletePropHandler = (personIndex)=> {
    // Instead of directly manipulating the state, we should make a copy first
    // Then operate over it and finally assign it back to the state
    // let oldPersonArr = this.state.persons;
    let oldPersonArr = [...this.state.persons];
    // same version
    oldPersonArr = oldPersonArr.filter((person,index)=>index!==personIndex)
    // oldPersonArr.splice(personIndex, 1)
    this.setState({persons: oldPersonArr})
  }

  render() {
    let persons_data = this.state.persons.map((person, index) => (
      <Person 
      key={person.id}
      name={person.name}
      age={person.age}
      change =  {(event)=>this.nameChangeHandler(event, person.id)}
      delete = {()=>this.deletePropHandler(index)}/>
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
        <button 
          onClick={this.handleSwitchClick.bind(this, this)}
          style = {styles}
        >
          Switch
        </button>
        <button 
          onClick={this.toggleHideCard}
          style = {styles}
        >
          {/* {this.state.hideCard && 'Show'}
          {!this.state.hideCard && 'Hide'} */}
          {this.state.hideCard ? 'Show' : 'Hide'}
        </button>
        {this.state.hideCard ? null : <div>
          {persons_data}
          <hr />
          <p>demo for props.children</p>
          <Person
            name="jkl"
            age="10"
            click={() => this.handleSwitchClick(this)}
            change = {()=>{}}
          >
            <b>Hobbies: Singing</b>
          </Person>
        </div>}
      </div>
    );
    // equivalent of the jsx above, but proves to be cumbersome to write
    // hence prefered way is writing JSX
    // return React.createElement('div',{className: "App"},React.createElement('h1',null,'Hello World!!'));
  }
}

export default App;
