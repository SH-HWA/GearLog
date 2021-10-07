import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routers/Home';
import Jangbi from './Pages/Home/Jangbi';
import Communtiy from './Pages/Home/Communtiy';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import styled from 'styled-components';

const Div = styled.div``;
const App = () => {
  return (
    <Div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/jangbi">
        <Jangbi />
      </Route>
      <Route path="/communtiy">
        <Communtiy />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Div>
  );
};

export default App;
