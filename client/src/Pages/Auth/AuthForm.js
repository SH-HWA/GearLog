//회원가입과 로그인폼 컴포넌트
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../Components/common/Button';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';
import axios from 'axios';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: gray;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  hr {
    margin-top: 50px;
  }
  .logo {
    text-align: center;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: black;
    border-bottom: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #70a1ff;
    text-decoration: underline;
    &:hover {
      color: #3742fa;
    }
  }
`;

const textMap = {
  login: '이메일로그인',
  register: '회원가입',
  logo: '간편로그인',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  /*
  로그인이 됬을때 홈화면으로가고 로그인페이지는 로그아웃만 남겨놓는다
  홈화면에서는 로그인 버튼이 로그아웃버튼으로 바뀌어야한다.
  로그아웃 버튼을 누를시 로그인버튼으로 바뀌어야되고 다시 로그인 페이지로 갈수있게 하기
*/
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
        console.log('@@@@@', res);
      })
      .catch((err) => console.log(err));
  };

  const postSignUp = () => {
    return axios
      .post(
        'http://localhost:8000/signup',
        {
          email: email,
          password: password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((result) => {
        // if (result.data.message === 'signup ok') {
        //   alert('회원가입이완료되었습니다 로그인해주세요');
        //   history.push('/');
        // }
        console.log('reuslt', result);
      })
      .catch((err) => console.log(err));
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
    }
  };
  //회원가입을 눌렀을때는 어떻게 하지?
  const onSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      postLogin();
    }

    if (type === 'register') {
      postSignUp();
    }
  };

  return (
    <AuthFormBlock>
      <Logo className="logo" style={{ fontsize: '200px' }} />
      <h3>{textMap['logo']}</h3>
      <Button fullWidth style={{ background: '#fae100', marginTop: '1rem' }}>
        카카오
      </Button>
      <Button fullWidth style={{ background: '#2DB400', marginTop: '1rem' }}>
        네이버
      </Button>
      <Button fullWidth style={{ background: '#70a1ff', marginTop: '1rem' }}>
        구글
      </Button>
      <hr />
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="email"
          type="text"
          placeholder="이메일"
          value={email}
          required
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          required
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="newpassword"
            placeholder="비밀번호확인"
            type="password"
            value={newPassword}
            required
            onChange={onChange}
          />
        )}
        <Button
          className="bottom-button"
          fullWidth
          style={{ background: '#b2bec3', marginTop: '1rem' }}
        >
          {text}
        </Button>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/signup">SignUp</Link>
        ) : (
          <Link to="/signin">SignIn</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
