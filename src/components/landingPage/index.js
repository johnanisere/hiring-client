import React from 'react';
import { Box, Image } from 'grommet';

import './styles.css';
function LandingPage() {
  console.log({ width: window.screen.width, height: window.screen.width });
  return (
    <Box className="body">
      <Box className="main">
        <Box className="images">
          <Box className="img">
            <Image src="https://res.cloudinary.com/deepockets/image/upload/v1573490863/hiring%20client/Component_1_1_l8eosz.svg" />
          </Box>
          <Box className="logo">
            <img
              alt="decagon logo"
              className="logo-img"
              src="https://res.cloudinary.com/deepockets/image/upload/v1573491093/hiring%20client/decagon-logo21_2_lgxr2n.svg"
            />
          </Box>
        </Box>
        <Box className="giant-top-text">
          <span> Hire Developers, </span>
          <span> With Ease!</span>
        </Box>
        <Box className="button-box">
          <button className="each-btn">
            <span className="btn-text">Get Started</span>
          </button>
          <button className="each-btn">
            <span className="btn-text">Login</span>
          </button>
        </Box>
        <Box className="mid-box">
          <Box className="mid-box-item"></Box>
          <Box className="mid-box-item"></Box>
          <Box className="mid-box-item"></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(LandingPage);
