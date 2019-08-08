import React from "react";
import { Add } from "grommet-icons";

import { Box, Button, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const IconLabel = ({action}) => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={action} />
      </Box>
    </Box>
  </Grommet>
);

export default IconLabel;