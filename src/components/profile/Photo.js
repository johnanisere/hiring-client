import React from 'react';
import { Grommet, Box, Image } from 'grommet';
import { grommet } from 'grommet/themes';

export default function Photo(props) {
  return (
    <Grommet theme={grommet}>
      <Box responsive align="start" gap="medium">
        <Box
          height="250px"
          width="80%"
          border
          style={{ marginTop: '5px', marginLeft: '5px', borderRadius: '5px' }}
        >
          <Image src={props.profilePhoto} fit="cover" />
        </Box>
      </Box>
    </Grommet>
  );
}
