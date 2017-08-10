import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import $ from 'jquery';


class App extends Component {
  constructor(){
    super();
    this.state={


    };

  }

  /* http://www.devmounta.in/api/students
  http://ww.devmounta.in/students
  */
  componentDidMount(){

    $.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'GET',

  // The URL to make the request to.
  url: 'http://www.myheritage.com',

  // The 'contentType' property sets the 'Content-Type' header.
  // The JQuery default for this property is
  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  // a preflight. If you set this value to anything other than
  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  // you will trigger a preflight request.
  contentType: 'text/plain',

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: false
  },

  headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
  },

  success: function(response) {
    // Here's where you handle a successful response.
    console.log(response);
  },

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
  }
});
    //axios.get('http://www.myheritage.com/')
     axios.get('http://pokeapi.co/api/v2/pokemon/1')
    
    .then(function(response){
       console.log(response);
      //  var x = response.data;
      //  console.log(x);
      //  console.log(x["abilities"][0]["ability"]["name"])
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
