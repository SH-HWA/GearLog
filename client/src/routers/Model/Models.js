import React from 'react';
import Button from '../../Components/common/Button';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import './Model.css';
import blue from '../../img/Audio/blue.mp3';
import red from '../../img/Audio/redkey.mp3';
import brown from '../../img/Audio/brownkey.mp3';

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

const playAudio = (data) => {
  let audio = new Audio(data);
  audio.play();
};

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

        <div className="brand">커세어</div>
        <div className="brand">레이저</div>
      </Dev>
    </>
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
