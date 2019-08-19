import React, { Component } from "react";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Authentication from "../../components/authentication";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="center">
          <Box
            style={{
              paddingBottom: "48px",
              borderRadius: "10px",
              boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.1)"
            }}
            width="medium"
            pad="medium"
          >
            <Authentication {...this.props} />
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
