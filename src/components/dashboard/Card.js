import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import SelectCheck from '../selected/SelectCheck';
import { useSelector } from 'react-redux';

import { Box, Text, Image } from 'grommet';

const App = props => {
  const { dev, onToggle, open } = props;
  const { selectedDecadevs } = useSelector(({ shortlisted }) => shortlisted);
  const selected = !!selectedDecadevs[dev.email];

  useEffect(() => {
    console.log({ selected });
  }, [selected]);
  return (
    <>
      <Box
        key={dev._id}
        pad="medium"
        align="center"
        background={{
          color: 'light-2',
          opacity: 'strong'
        }}
        round
        gap="small"
        margin="medium"
        animation={['fadeIn']}
      >
        <Image
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px'
          }}
          fit="cover"
          src={dev.profilePhoto}
        />

        <Text>{dev.email}</Text>
        <MoreInfo
          email={dev.email}
          profilePhoto={dev.profilePhoto}
          phone={dev.phone}
          cv={dev.cv}
          bio={dev.bio}
          name={dev.name}
          open={open}
          onToggle={onToggle}
        />
        <SelectCheck decadevObject={dev} selected={selected} />
      </Box>
    </>
  );
};
export default App;
