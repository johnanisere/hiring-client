import React from "react";
import { Box, Button } from "grommet";


export default function Buttons() {
  return (
    <Box align="start" pad="small">
      <Box direction="row" align="start" gap="small" pad="xsmall">
        <Button label="Phone Interview" onClick={() => {}} />
        <Button
          color="dark-1"
          primary
          label="In-Person Interview"
          onClick={() => {}}
        />
      </Box>
    </Box>
  );
}
