import React from 'react';
import { Box } from 'grommet';

import ModalPhoto from './ModalPhoto';
import ModalInfo from './ModalInfo';
import ModalSkills from './ModalSkills';

const DecadevModal = () => {
  return (
    <Box responsive align="center" fill background="#2096f3">
      <Box
        responsive
        elevation="large"
        direction="row-responsive"
        round="small"
        gap="small"
        margin="large"
        align="center"
        pad="medium"
        background="#fff"
      >
        <Box border background="">
          <ModalPhoto />
          <ModalSkills />
        </Box>
        <ModalInfo />
      </Box>
    </Box>
  );
};

export default DecadevModal;
