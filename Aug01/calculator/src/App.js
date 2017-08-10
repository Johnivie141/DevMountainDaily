import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorApp from './components/Calculator';
class App extends Component {
  render() {
    return (
      <div className="App">
       <CalculatorApp />
      </div>
    );
  }
}

export default App;
