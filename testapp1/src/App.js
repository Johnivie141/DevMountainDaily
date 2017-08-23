import React, { Component } from 'react';

import './App.css';
import router from './utils/router.js';

class App extends Component {
  render() {
    return (
      <div>
      
        <div>
        {router}
        </div>
        
      </div>
    );
  }
}

export default App;
