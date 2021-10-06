//회원가입과 로그인폼 컴포넌트
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input``;

const Footer = styled.div``;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <input autoComplete="username" name="username" placeholder="아이디" />
        <input
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <input
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호확인"
            type="password"
          />
        )}
        <button>{text}</button>
        <button>카카오</button>
        <button>네이버</button>
        <button>구글</button>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/signin">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
