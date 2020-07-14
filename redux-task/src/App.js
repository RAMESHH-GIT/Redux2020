import React from 'react';

import './App.css';
import Employee from './employee';
import about from './about';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Switch>
      
      <Route path='/employee' component={Employee}  />
      <Route path='/about' component={about} exact />
     
      
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
