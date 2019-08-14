import React from "react";
import {
  Grommet,
  Box,
  Image,
} from "grommet";
import { grommet } from "grommet/themes";
import Buttons from "./Buttons";

export default function Photo() {
  return (
    <Grommet theme={grommet}>
      <Box align="start" gap="medium">
        <Box
          height="medium"
          width="medium"
          border
          style={{ marginTop: "5px", marginLeft: "5px", borderRadius: "5px" }}
        >
          <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
        </Box>
      </Box>
      <Buttons />
    </Grommet>
  );
}
