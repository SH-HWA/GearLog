import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

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

const Nav = () => {
  return (
    <Navbar>
      <Logo />
      <ul class="navbar__menu">
        <li class="navbar__munu__item active">Models</li>
        <li class="navbar__munu__item">Board</li>
        <li class="navbar__munu__item">SignIn</li>
      </ul>
    </Navbar>
  );
};

export default Nav;
