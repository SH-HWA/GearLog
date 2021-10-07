import React from 'react';
import styled from 'styled-components';

const LogoBlock = styled.div`
  padding-left: 50px;
  h1 {
    margin-bottom: 20px;
  }
`;

const Logo = () => {
  return (
    <>
      <LogoBlock>
        <div>
          <h1>GearLog</h1>
        </div>
      </LogoBlock>
    </>
  );
};

export default Logo;
