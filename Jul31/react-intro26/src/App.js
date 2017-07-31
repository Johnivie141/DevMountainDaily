import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class SmileComponent extends Component{

constructor(props){
  super(props);
  this.messages=[
     "Ahh! not smiling",
    "I might not be smiling inside, but I'm making a component and I'm smilling Inside."
   
  ];


  
}

render(){
console.log("messageNum: " + this.props.messageNum);
  return (
    <div>{this.messages[this.props.messageNum]}
    </div>

  );
}

}

function StillSmiling(){

  return(
<div>I want to Learn</div>

  ) 
  
}


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isDevMountain:false,
      messageNum:0 , 
      totalMessages:2
  };

  setTimeout(this.stateChange.bind(this),5000);

}
stateChange(){
  console.log(this.state.isDevMountain);
  
    let newNum=this.state.messageNum +1;
    newNum = newNum% this.state.totalMessages;
    console.log("newNumber: " +newNum);
    
   this.setState({
     messageNum:newNum
   })
  

  
  this.setState({isDevMountain:!this.state.isDevMountain})

  
  setTimeout(this.stateChange.bind(this),5000);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {
            this.state.isDevMountain? "DevMountain":"React"}</h2>
        </div>
        <SmileComponent messageNum={this.state.messageNum}/>
        <StillSmiling/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
