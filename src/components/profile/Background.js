import React from "react"
import { Grommet, Box, Grid } from "grommet";
import { grommet } from "grommet/themes";
import Photo from "./Photo";
import Info from "./Info";
import Skills from "./Skills"


const Background = () => {
  return (
    <Grommet theme={grommet} full>
      <Grid
        fill
        areas={[
          { name: "nav", start: [0, 0], end: [0, 0] },
          { name: "main", start: [1, 0], end: [1, 0] }
        ]}
        columns={["medium", "flex"]}
        rows={["flex"]}
        gap="small"
      >
        <Box gridArea="nav" background="">
          <Photo />
          <Skills/>
        </Box>
        <Box gridArea="main" background="" style={{ marginLeft: "50px" }}>
          <Info/>
        </Box>
      </Grid>
    </Grommet>
  );
};

export default Background;
