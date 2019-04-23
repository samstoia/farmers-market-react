import React from "react";
import Home from "./Home";
import About from "./About";
import { Switch, Route } from 'react-router-dom';

function App(){

  
  
  return (
    <div>
      <div>
        
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;