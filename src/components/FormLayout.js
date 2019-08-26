import React from 'react';
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const FormLayout = props => (
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
        {props.children}
      </Box>
    </Box>
  </Grommet>
);

export default FormLayout;
