import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageTemplate from './Auth/AuthTemplate';
import Logo from '../Components/Logo';
import Button from '../Components/common/Button';

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

const MyPage = ({ username, email, password }) => {
  const [changeName, setChangeName] = useState(false);
  return (
    <>
      <MyPageTemplate>
        <Logo />
        <StyledInput type="text" value={email}></StyledInput>

        <StyledInput type="text" value={username} />
        <StyledInput type="password " value={password} />
      </MyPageTemplate>
    </>
  );
};

export default MyPage;
