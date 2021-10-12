import React from 'react';

import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

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
