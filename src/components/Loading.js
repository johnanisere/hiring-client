import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
const Loading = () => (
  <Grommet full theme={grommet}>
    <Box fill align="center" justify="center">
      <Box fill width="medium" align="center" justify="center">
        <MoonLoader size={30} />
      </Box>
    </Box>
  </Grommet>
);

export default Loading;
