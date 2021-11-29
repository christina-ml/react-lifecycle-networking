import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      dogImgUrl: '',

      // count: 0,
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

    this.handleLoadNewDog();
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

  // handleIncrement=()=>{
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  // }

  /* 
  - Created a method that works when we click the button, and also happens on the mounting ^ (above) 
  - it's a helper method, being used in `handleLoadNewDog()` and also `componentDidMount()`
  */
  handleLoadNewDog=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        /*
          - How do I get this data in the return? You have to use state.
          - data.message is what we want to get the image.
        */
        // console.log(data)
        this.setState({
          dogImgUrl: data.message,
        })
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
        <h1>Random Dog Pictures v1</h1>
        <div>
          <img width="400px" src={this.state.dogImgUrl} alt="Random Dog Image" />
        </div>
        <button onClick={this.handleLoadNewDog}>Load New Dog</button>

        {/* <h1>Hello World</h1>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Click Me</button>
        <input onChange={this.handleInputChange} /> */}
      </div>
    )
  }
}

export default App;
