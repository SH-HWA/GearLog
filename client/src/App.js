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
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//유저정보를 데이터베이스에 저장하고 인증할수있는 코드를짜야된다
//로그인상태가 트루가된다면 메인페이지에서 마이페이지를 보여줘야한다
//마이페이지에서는 무엇을 해야할까?

const Div = styled.div``;
const App = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserinfo] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  const [username, setUsername] = useState('');

  const postLogin = () => {
    return axios
      .post(
        'http://localhost:8000/login',
        { email: email, password: password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === 'ok') {
          setIsLogin(true);
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          alert('이메일과 패스워드를 확인해주세요');
        }
      });
  };

  const postSignUp = () => {
    return axios
      .post(
        'http://localhost:8000/signup',
        {
          email: email,
          password: password,
          username: username,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((result) => {
        if (result.data.message === 'signup ok') {
          alert('회원가입이완료되었습니다 로그인해주세요');
          history.push('/signin');
        }
      })
      .catch((err) => {
        if (err) {
          alert('이미 가입된 회원입니다 다른 이메일을 적어주세요');
        }
      });
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'newpassword') {
      setNewPassWord(value);
    } else if (name === 'nickname') {
      setUsername(value);
    }
  };

  return (
    <Div>
      <Route exact path="/">
        <Home isLogin={isLogin} />
      </Route>
      <Route path="/jangbi">
        <Jangbi />
      </Route>
      <Route path="/signin">
        <SignIn
          email={email}
          password={password}
          postLogin={postLogin}
          onChange={onChange}
        />
      </Route>
      <Route path="/signup">
        <SignUp
          email={email}
          password={password}
          onChange={onChange}
          postSignUp={postSignUp}
          newPassword={newPassword}
          username={username}
        />
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
