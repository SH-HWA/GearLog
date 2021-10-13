import React, { useState } from 'react';
import Button from '../Components/common/Button';
import styled from 'styled-components';
import { useHistory, BrowserRouter, Route } from 'react-router-dom';

import Logi from '../img/Logi.jpg';
import Corsair from '../img/Corsair.jpg';
import Razer from '../img/razer.jpg';
import './Model.css';

const Dev = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  display: flex;
  margin-top: 100px;
  .brand {
    height: 30px;
    width: 200px;
  }
  .brandactive {
    height: 30px;
    width: 200px;
  }
  #dropdown {
  }
`;

const Models = ({ setDrop, drop }) => {
  const history = useHistory();
  return (
    <div>
      <div id="dropdown">
        <div className="dropdown-1">
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/corsair');
            }}
          >
            <img src={Corsair} alt="" />
          </div>
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/logi');
            }}
          >
            <img src={Logi} alt="" />
          </div>
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/razer');
            }}
          >
            <img src={Razer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Models;
// <Dev>

// </Dev>
