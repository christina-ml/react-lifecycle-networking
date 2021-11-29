import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
    }
  }

  /* Want something to happen only ONCE, when the page initially loads. And that's it. */
  componentDidMount(){
    console.log("Trigger: On Mount")
  }

  handleIncrement=()=>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  render(){

    /* think about WHEN this runs. The act of rendering. */
    console.log("Trigger: Render")

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
