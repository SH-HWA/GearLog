import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { useHistory } from 'react-router-dom';
const Navbar = styled.div`
  font-size: 30px;
  position: fixed; /*항상고정*/
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  color: #2d3436;
  padding: 16px;

  transition: 300ms ease-in-out;

  ul {
    list-style: none;
    padding-right: 600px;
  }

  .navbar__menu {
    display: flex;
    margin-top: 60px;
    .navbar__menu {
      flex-direction: column;
      text-align: center;
      width: 100%;
      display: none;
    }
  }
  .navbar__munu__item {
    padding: 8px 20px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid transparent;
  }
  .navbar__munu__item:hover {
    background-color: #dfe6e9;
    border-color: white;
  }
`;
//isLogin이 true일때  마이페이지를 들어갈수있게해줌
const Nav = ({ isLogin, postLogout }) => {
  const history = useHistory();
  return (
    <Navbar>
      <Logo />
      <ul class="navbar__menu">
        <li
          onClick={() => {
            history.push('/models');
          }}
          class="navbar__munu__item active"
        >
          Models
        </li>
        <li
          onClick={() => {
            history.push('/view');
          }}
          class="navbar__munu__item"
        >
          Board
        </li>

        {!isLogin ? (
          <li
            onClick={() => {
              history.push('/signin');
            }}
            class="navbar__munu__item"
          >
            SignIn
          </li>
        ) : (
          <li
            onClick={() => {
              postLogout();
            }}
            class="navbar__munu__item"
          >
            SignOut
          </li>
        )}

        <li
          onClick={() => {
            if (isLogin) {
              history.push('/MyPage');
            } else {
              alert('login을 해주세요');
            }
          }}
          class="navbar__munu__item"
        >
          MyPage
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;

/*
  로그아웃
*/
