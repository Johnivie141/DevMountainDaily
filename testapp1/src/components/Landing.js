import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Landing extends Component{

 


 render(){
  return (
      <div className="Landing">
         <h1> Welcome to Nerdz?</h1>
         <Link to="/magick">Visit Magick</Link>
      </div>
   );
  }
}