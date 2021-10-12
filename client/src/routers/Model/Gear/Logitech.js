/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import GproX from '../../../img/GproX.jpeg';
import { useState } from 'react';

const Logistyle = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  .jangbi_list {
    padding-top: 300px;
  }
  .Logi_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
  }
`;

const Logitech = () => {
  const [onVideo, setOnVideo] = useState(false);
  const onClickButton = () => {};

  return (
    <Logistyle>
      <ul className="jangbi_list">
        <div className="Logi_img">
          <img src={GproX} alt="" />
        </div>
        <div>
          <h1>제품명 : Gpro X KDA</h1>
          <h2>제품 정보 및 영상보기!</h2>

          <iframe
            width="1000"
            height="800"
            src="https://www.youtube.com/embed/Yvs3WOJlUPw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </ul>
    </Logistyle>
  );
};

export default Logitech;
