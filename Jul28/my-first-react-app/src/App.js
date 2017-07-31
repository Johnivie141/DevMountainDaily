import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';









class App extends Component {
  render() {
    return (
      <div className="App">
   
        <div className="App-header">
                 
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcme to DevMountain</h2>
        </div>
         <Child/>   
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default App;
