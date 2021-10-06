import React from 'react';
import './App.css';

import {Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Header';
import Home from './routers/Home';
import Jangbi from './Pages/Home/Jangbi';
import Communtiy from './Pages/Home/Communtiy';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';


const App = () =>{
  return (

    <div className = "header">
      <Header />
      </div>
      <div>
        <Nav />
      <Switch>
        <Route path= "/" >
          <Home />
        </Route>
        <Route path= "/jangbi">
          <Jangbi />
        </Route>
        <Route path= "/communtiy" >
          <Communtiy />
        </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      </Switch>
      </div>
      
     
    );
};

export default App;
