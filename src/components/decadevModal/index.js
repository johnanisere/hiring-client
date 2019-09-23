import React from 'react';
import { Box } from 'grommet';

import ModalPhoto from './ModalPhoto';
import ModalInfo from './ModalInfo';
import ModalSkills from './ModalSkills';

const DecadevModal = props => {
  const { email, profilePhoto, phone, cv, bio, name } = props;
  return (
    <Box
      responsive
      elevation="large"
      direction="row-responsive"
      round="small"
      gap="small"
      align="center"
      pad="medium"
      background="#fff"
    >
      <Box border background="">
        <ModalPhoto
          email={email}
          profilePhoto={profilePhoto}
          phone={phone}
          cv={cv}
          bio={bio}
          name={name}
        />
        <ModalSkills
          email={email}
          profilePhoto={profilePhoto}
          phone={phone}
          cv={cv}
          bio={bio}
          name={name}
        />
      </Box>
      <ModalInfo
        email={email}
        profilePhoto={profilePhoto}
        phone={phone}
        cv={cv}
        bio={bio}
        name={name}
      />
    </Box>
  );
};

export default DecadevModal;
