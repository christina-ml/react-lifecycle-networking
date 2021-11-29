import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
    }
    /* Constructor gets loaded first, even before render. */
    console.log("Trigger: Constructor");
  }

  /* 
  - Want something to happen only ONCE, when the page initially loads. And that's it.
  - NOT going to cause an infinite loop.
  */
  componentDidMount(){
    console.log("Trigger: On Mount");
  }

  componentDidUpdate(){
    console.log("Trigger: On Update");
  }

  handleIncrement=()=>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  render(){
    /* 
    - think about WHEN this runs. The act of rendering.
    - The page can be re-rendered on button click, when this.setState causes a re-render
    */
    console.log("Trigger: Render");

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
