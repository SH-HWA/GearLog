import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
const App = () => {
  return (
    <>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </>
  );
};

export default App;
