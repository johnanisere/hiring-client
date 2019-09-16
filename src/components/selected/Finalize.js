import React from 'react';

import { Button } from 'grommet';

export default function Finalize(props) {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium" margin="large">
        <Button
          primary
          label="Finalize"
          // onClick={props.handleNext}
          // {...props}
          color="dark-1"
        />
      </Box>
    </Grommet>
  );
}
