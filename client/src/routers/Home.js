import React from 'react';
import styled from 'styled-components';
import video from '../img/video/Orange and Lemon Branding Guidelines Presentation.mp4';

const HomePage = styled.div`
  .video {
    max-width: 100%;
    height: auto;
  }
`;

const Home = () => {
  return (
    <HomePage>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4"></source>
      </video>
    </HomePage>
  );
};

export default Home;
