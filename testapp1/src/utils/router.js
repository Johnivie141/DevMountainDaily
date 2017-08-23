import React from 'react';
import {Route, Switch,} from 'react-router-dom';
import Landing from '../components/Landing';
import Magick from '../components/Magick';

export default (
 
     <Switch>
    <Route exact path="/" component={Landing}  />
    <Route path="/magick" component={Magick}/>
     </Switch>
 );

