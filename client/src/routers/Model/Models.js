import React from 'react';
import Button from '../../Components/common/Button';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import './Model.css';
import blue from '../../img/Audio/blue.mp3';
import red from '../../img/Audio/redkey.mp3';
import brown from '../../img/Audio/brownkey.mp3';
import Logi from '../../img/Logi.png';
import Corsair from '../../img/Corsair.jpeg';
import Razer from '../../img/razer.png';

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

  const history = useHistory();
  return (
    <Dev>
      <div
        className="brand"
        onClick={() => {
          history.push('/models');
        }}
      >
        <h1>브랜드 선택</h1>
      </div>

      <div
        className="Logo"
        onClick={() => {
          history.push('/models/logi');
        }}
      >
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
        <img src={Logi} alt="" />
      </div>

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
          history.push('/models/razer');
        }}
      >
        <img src={Razer} alt="" />
      </div>
    </Dev>
  );
};

export default Models;
{
  /* <Button
          onClick={() => {
            playAudio(blue);
          }}
          className="key"
          style={{ background: 'blue' }}
        >
          청축
        </Button> */
}
