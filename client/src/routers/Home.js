import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import video from '../img/video/Orange and Lemon Branding Guidelines Presentation.mp4';
import Logo from '../Components/Logo';

const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  max-width: 100%;

  min-height: 100%;
  min-width: 1024px;
`;

const HomePage = styled.div`
  .video {
    margin-top: 50px;

    width: 1000px;
  }
`;

const Home = ({ isLogin, postLogout }) => {
  return (
    <>
      <Video>
        <HomePage>
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4"></source>
          </video>
        </HomePage>
      </Video>
    </>
  );
};

export default Home;
