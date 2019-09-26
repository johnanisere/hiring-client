import React from "react";

import { grommet, Box, Button, Grommet } from "grommet";

export default function Next(props) {
  return (
    <Grommet theme={grommet}>
      <Box align="center" margin="large">
        <Button
          primary
          label="Next"
          onClick={props.handleNext}
          {...props}
          color="dark-1"
        />
      </Box>
    </Grommet>
  );
}
