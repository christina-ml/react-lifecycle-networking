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

  /* Doesn't happen on the initial load, but every subsequent load. */
  componentDidUpdate(){
    console.log("Trigger: On Update");
  }

  /*
  - Remove things that are running.
  - Constant connections, that you'd want to stop.
  - Mostly used for efficiency
  - hard to show this, since we're not running anything in our code that needs to be unmounted.
  */
  componentWillUnmount(){
    console.log("Trigger: On Unmount");
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
        {/* <input onChange={this.handleInputChange} /> */}
      </div>
    )
  }
}

export default App;
