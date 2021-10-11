//회원가입과 로그인폼 컴포넌트

import styled from 'styled-components';
import Button from '../../Components/common/Button';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';
import { emailCheck, passwordCheck } from '../../Modules/Verifi';

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

const AuthForm = ({
  type,
  postSignUp,
  postLogin,
  email,
  password,
  onChange,
  newPassword,
  username,
}) => {
  const text = textMap[type];

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      postLogin();
    }

    if (type === 'register') {
      if (!emailCheck(email)) {
        alert('적합한 이메일이 아닙니다');
        return false;
      }

      if (password !== newPassword) {
        alert('패스워드 그거 맞아?');
        return false;
      }
      if (!passwordCheck(password)) {
        alert('특수문자,영문, 숫자 필수 포함 6~21자리');
        return false;
      }
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
          <>
            <StyledInput
              autoComplete="new-password"
              name="newpassword"
              placeholder="비밀번호확인"
              type="password"
              value={newPassword}
              required
              onChange={onChange}
            />
            <StyledInput
              autoComplete="new-password"
              name="nickname"
              placeholder="닉네임"
              type="text"
              value={username}
              required
              onChange={onChange}
            />
          </>
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
