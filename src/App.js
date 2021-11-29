import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
    }
  }

  handleIncrement=()=>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  render(){

    /* think about WHEN this runs. The act of rendering. */
    console.log("Trigger")

    return(
      <div>
        <h1>Hello World</h1>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Click Me</button>
      </div>
    )
  }
}

export default App;
