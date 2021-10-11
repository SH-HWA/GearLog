import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const Div = styled.div`
  position: fixed;
  width: 100%;
`;

const Navbar = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;

  position: fixed;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  justify-content: center;
  color: rgb(245, 246, 250);
  background-color: rgb(25, 42, 86);
  min-width: 1024px;

  ul {
    list-style: none;
  }

  .navbar__menu {
    display: flex;
  }
  .navbar__munu__item {
    cursor: pointer;
    margin: 10px;
    padding-left: 10px;

    transition: 100ms ease-in-out;
  }
  & .navbar__munu__item:hover {
    color: rgb(248, 239, 186);
  }
`;
//isLogin이 true일때  마이페이지를 들어갈수있게해줌
const Nav = ({ isLogin, postLogout }) => {
  const history = useHistory();
  return (
    <Navbar>
      <div class="navbar__menu">
        <div
          onClick={() => {
            history.push('/models');
          }}
          class="navbar__munu__item active"
        >
          Models
        </div>
        <div
          onClick={() => {
            history.push('/view');
          }}
          class="navbar__munu__item"
        >
          Board
        </div>

        {!isLogin ? (
          <div
            onClick={() => {
              history.push('/signin');
            }}
            class="navbar__munu__item"
          >
            SignIn
          </div>
        ) : (
          <div
            onClick={() => {
              postLogout();
            }}
            class="navbar__munu__item"
          >
            SignOut
          </div>
        )}

        <div
          onClick={() => {
            if (isLogin) {
              history.push('/mypage');
            } else {
              alert('login을 해주세요');
            }
          }}
          class="navbar__munu__item"
        >
          MyPage
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;

/*
  로그아웃
*/
