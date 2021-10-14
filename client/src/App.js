import { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routers/Home';
import Jangbi from './Pages/Jangbi';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Nav from './Components/Nav';

import MyPage from './Pages/MyPage';

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Models from './routers/Models';
import Logitech from './routers/Gear/Logitech';
import styled from 'styled-components';
import Razer from './routers/Gear/Razer';
import Corsair from './routers/Gear/Corsair';

//유저정보를 데이터베이스에 저장하고 인증할수있는 코드를짜야된다
//로그인상태가 트루가된다면 메인페이지에서 마이페이지를 보여줘야한다
//마이페이지에서는 무엇을 해야할까?
// 회원가입, 로그인, 로그아웃, 마이페이지, 회원탈퇴 기능 구현 필수 프론트엔드, 백엔드 ★
//회원가입, 로그인 및 회원정보 수정 시 유효성 검사 필수 프론트엔드 ★
const Div = styled.div`
  font-size: 30px;

  width: 100%;
  :hover {
    cursor: pointer;
  }
`;
const App = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  const [username, setUsername] = useState('');
  const [dropdown, setDrop] = useState(true);
  const url = new URL(window.location.href); //전역으로
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    let social = localStorage.getItem('social');
    if (authorizationCode) {
      if (social === 'kakao') {
        getKakaoToken(authorizationCode);
      }
      if (social === 'naver') {
        getNaverToken(authorizationCode);
      }
      if (social === 'google') {
        getGoogleToken(authorizationCode);
      }
    } else {
      if (!social) {
        authorization();
      } else {
        if (!username) {
          getLocalInfo();
          return;
        }
        localStorage.setItem('name', username);
        localStorage.setItem('mail', email);
        getLocalInfo();
      }
    }
  }, [isLogin]);

  const getLocalInfo = () => {
    let name = localStorage.getItem('name');
    let mail = localStorage.getItem('mail');
    if (name) {
      setUsername(name);
      setEmail(mail);
      setIsLogin(true);
    }
  };

  const urls = url.origin.indexOf('mypage');
  const urlsBoard = url.origin.indexOf('view');

  const getGoogleToken = (code) => {
    axios
      .post('http://13.124.86.90/google/callback', {
        authorizationCode: code,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data) {
          setUsername(`구글계정 id ${res.data.data.id}`);
          setEmail(res.data.data.email);
          setIsLogin(true);
          history.push('/');
        }
      });
  };

  const getNaverToken = (code) => {
    axios
      .post('http://13.124.86.90/naver/callback', {
        authorizationCode: code,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data) {
          setUsername(res.data.data.nickname);
          setEmail(res.data.data.email);
          setIsLogin(true);
          history.push('/');
        }
      });
  };

  const getKakaoToken = (code) => {
    axios
      .post('http://13.124.86.90/kakao/callback', {
        authorizationCode: code,
      })
      .then((res) => {
        // console.log(res.data.data.properties);
        if (res.data.data) {
          setUsername(res.data.data.properties.nickname);
          setEmail(
            '카카오 소셜 로그인 회원인 경우 현재 email을 불러올 수 없습니다.',
          );
          setIsLogin(true);

          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postLogin = () => {
    return axios
      .post(
        'http://13.124.86.90/login',
        { email: email, password: password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === 'ok') {
          //유저정보가 변한것이 마이페이지에 보여야된다
          let token = res.data.token;
          localStorage.setItem('token', token);
          setUsername(username);
          setPassword(password);
          setEmail(email);
          setIsLogin(true);
          setDrop(true);
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          alert('이메일과 패스워드를 확인해주세요!');
        }
      });
  };

  const authorization = () => {
    let token = localStorage.getItem('token');
    axios
      .get('http://13.124.86.90/userinfo', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        let totoken = res.config.headers.authorization.split(' ')[1];
        if (token === totoken) {
          // console.log(res.data.data.userinfo.username);
          setUsername(res.data.data.userinfo.username);
          setEmail(res.data.data.userinfo.email);
          setIsLogin(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postSignUp = () => {
    return axios
      .post(
        'http://13.124.86.90/signup',
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
        console.log(result);
        if (result.data.message === '이미 존재하는 email입니다') {
          alert('이미 존재하는 email입니다');
        } else if (result.data.message === '이미 존재하는 username입니다') {
          alert('이미있는 유저네입니다');
        }
        if (result.data.message === 'signup ok') {
          alert('회원가입이완료되었습니다 로그인해주세요');
          history.push('/signin');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('모든 정보는 필수 입력 사항입니다.');
        }
      });
  };

  const postLogout = () => {
    return axios
      .post(
        'http://13.124.86.90/logout',
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === '현재 로그인 중이 아닙니다.') {
          localStorage.clear();
          setUsername('');
          setEmail('');
          setPassword('');
          setIsLogin(false);

          alert('로그아웃되었습니다');
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('로그아웃이 되지않았습니다');
        }
      });
  };
  /*로그아웃을 signIn쪽에 넣고
   로그아웃을 누르면 isLogin 이 false로 바뀐다
  */

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
    <div>
      <Div claseeName="main" style={{ position: 'fixed' }}>
        <div
          onClick={() => {
            history.push('/');
          }}
        >
          GearLog
        </div>
      </Div>

      <Nav
        setDrop={setDrop}
        drop={dropdown}
        isLogin={isLogin}
        postLogout={postLogout}
        urls={urls}
      />
      {!dropdown ? <Models id="dropdwon" /> : null}
      <Route exact path="/">
        <Home claseeName="impotant" isLogin={isLogin} postLogout={postLogout} />
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
      <Route path="/mypage">
        <MyPage
          setEmail={setEmail}
          onChage={onChange}
          email={email}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          setIsLogin={setIsLogin}
          authorization={authorization}
        />
      </Route>

      <Route path="/models/logi">
        <Logitech drop={dropdown} setDrop={setDrop} />
      </Route>

      <Route path="/models/razer">
        <Razer drop={dropdown} setDrop={setDrop} />
      </Route>
      <Route path="/models/corsair">
        <Corsair drop={dropdown} setDrop={setDrop} />
      </Route>
    </div>
  );
};

export default App;
/*

*/
