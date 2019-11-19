import React from 'react';
import { Box, Button } from 'grommet';
import { Compliance } from 'grommet-icons';

import './styles.css';
function LandingPage() {
  const checks = [
    'Over 15000 hours of coding experience',
    'Cross-team collaboration skills',
    'Over five programming languages',
    'No hiring fees'
  ];
  console.log({ width: window.screen.width, height: window.screen.width });
  return (
    <Box className="body">
      <Box className="main">
        <Box className="images">
          <Box className="logo">
            <img
              alt="decagon logo"
              className="logo-img"
              src="https://res.cloudinary.com/deepockets/image/upload/v1573491093/hiring%20client/decagon-logo21_2_lgxr2n.svg"
            />
          </Box>
          <Box className="action-box">
            <span className="action-text">Get Started</span>
            <span className="action-text">Login</span>
          </Box>
        </Box>
        <Box className="giant-top-text">
          <span className="header-text"> Decadevs are trained </span>
          <span className="header-text"> to meet your needs!</span>
        </Box>
        <Box className="body-text">
          {checks.map((item, index) => (
            <Box className="checks" key={`check ${index}`}>
              <Compliance />
              <span className="check-items">{item}</span>
            </Box>
          ))}
        </Box>
        <Box className="btn">
          <Button className="btn-text">Hire a Decadev Today!</Button>
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
