import { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routers/Home';
import Jangbi from './Pages/Jangbi';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import styled from 'styled-components';
import View from './Pages/Board/View';
import RegisterPage from './Pages/Board/RegisterPage';

//유저정보를 데이터베이스에 저장하고 인증할수있는 코드를짜야된다

const Div = styled.div``;
const App = () => {
  const [userInfo, setUserinfo] = useState(null);

  return (
    <Div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/jangbi">
        <Jangbi />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/view">
        <View />
      </Route>
      <Route path="/registerpage">
        <RegisterPage />
      </Route>
    </Div>
  );
};

export default App;
