import React from "./node_modules/react";
import { Add } from "./node_modules/grommet-icons";

import { Box, Button, Grommet } from "./node_modules/grommet";
import { grommet } from "./node_modules/grommet/themes";

const IconLabel = ({ action }) => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={action} />
      </Box>
    </Box>
  </Grommet>
);

export default IconLabel;
