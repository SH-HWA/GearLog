/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import RazerBlack from '../../img/razerblack.jpg';
import blue from '../../img/Audio/blue.mp3';
import red from '../../img/Audio/redkey.mp3';
import brown from '../../img/Audio/brownkey.mp3';
import Button from '../../Components/common/Button';
import '../Model.css';

const RazerStyle = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  .jangbi_list {
    padding-top: 300px;
  }
  .Razer_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
  }
`;
const keys = [
  {
    id: 1,
    color: '#0984e3',
    key: 'blu',
    src: blue,
  },
  {
    id: 2,
    color: '#ff5252',
    key: 'red',
    src: red,
  },
  {
    id: 3,
    key: 'bwn',
    color: '#cc8e35',
    src: brown,
  },
];

const playAudio = (data) => {
  let audio = new Audio(data);
  audio.play();
};

const Razer = ({ setDrop }) => {
  return (
    <RazerStyle onClick={() => setDrop(true)}>
      <ul className="jangbi_list">
        <div className="Razer_img">
          <img src={RazerBlack} alt="" />
        </div>
        <div>
          <h1>제품명 : Razer Black Widow V3 Mini</h1>
          {keys.map((el, id) => {
            return (
              <div>
                <Button
                  style={{ background: el.color }}
                  className="key"
                  key={id}
                  onClick={() => playAudio(el.src)}
                >
                  {el.key}
                </Button>
              </div>
            );
          })}
          <h2>제품 정보 및 영상보기!</h2>
          <iframe
            width="1000"
            height="800"
            src="https://www.youtube.com/embed/bJkhA_18FAg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </ul>
    </RazerStyle>
  );
};

export default Razer;
