/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import umi from '../../../img/1.png';
import keyboard from '../../../img/2.png';
import styled from 'styled-components';

const Img = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
`;

const Logitech = () => {
  return (
    <Img>
      <img src={umi} />
      <img src={keyboard} />
    </Img>
  );
};

export default Logitech;
