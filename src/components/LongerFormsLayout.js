import React from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";

const LongerFormsLayout = props => (
  <Grommet full theme={grommet}>
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill align="center" justify="center">
          <Box
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.1)",
              overflow: "scroll"
            }}
            width="large"
            pad="medium"
            margin="medium"
            align="center"
          >
            {props.children}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Grommet>
);

export default LongerFormsLayout;
