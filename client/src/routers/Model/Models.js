import React from 'react';
import Sidebar from '../../Components/common/Sidebar';
import Nav from '../../Components/Nav';
import Home from '../Home';
import umi from '../../img/1.png';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import Logitech from './Gear/Logitech';

const Dev = styled.div`
  background-color: rgb(248, 239, 186);
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
`;

const Models = () => {
  const history = useHistory();
  return (
    <>
      <Dev>
        <div
          onClick={() => {
            history.push('/models/logi');
          }}
          className="brand"
        >
          로지텍
        </div>

        <div className="brand">커세어</div>
        <div className="brand">레이저</div>
      </Dev>
    </>
  );
};

export default Models;
