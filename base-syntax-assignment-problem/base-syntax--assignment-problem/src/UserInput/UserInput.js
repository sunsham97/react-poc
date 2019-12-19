import React, { Component } from "react";

class UserInput extends Component {
  render() {
    const styles = {
      outline: "1px solid orange",
      color: "red",
      margin: '8px'
    };

    return (
      <div>
        <input
          type="text"
          style = {styles}
          onChange={this.props.change}
          value={this.props.username}
        />
      </div>
    );
  }
}

export default UserInput;
