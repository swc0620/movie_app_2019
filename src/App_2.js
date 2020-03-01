import React from 'react';

// To show up on the screen, you need to put it inside the 'render' method
// 'state' is an object that stores data that will change
class App_2 extends React.Component{
  state = {
      count: 0
  }
  /* Bad Practice : Do not mutate state directly. Use setState()*/
  /*
  add = () => {
    this.state.count += 1;
  }
  */

  /* setState() refreshes state and also calls render() one more time which also refreshes view*/
  /* Bad Practice : because you modify state directly */
  /*
  add = () => {
    this.setState({count: this.state.count + 1});
  };
  */

  /* Good Practice */
  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  };

  minus = () => {
    this.setState(current => ({ count: current.count -1 }))
  };

  componentDidMount() {
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye cruel world");
  }

  render(){
    console.log("I am rendering");
    return ( 
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}


export default App_2;
