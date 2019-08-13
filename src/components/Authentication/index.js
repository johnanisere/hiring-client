import React from 'react';

import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import Routes from './routes';

export default function(props) {
  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box
          style={{
            borderRadius: '10px',
            boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.1)'
          }}
          width="medium"
          pad="medium"
        >
          <Routes {...props} />
        </Box>
      </Box>
    </Grommet>
  );
}
