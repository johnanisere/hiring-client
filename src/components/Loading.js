import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { Box } from "grommet";
const Loading = () => (
  <Box fill width="medium" align="center" justify="center">
    <MoonLoader size={30} />
  </Box>
);

export default Loading;
