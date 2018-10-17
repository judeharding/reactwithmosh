import React, { Component } from "react";
// define a class
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
  }
}
// the export the class
export default Counter;
