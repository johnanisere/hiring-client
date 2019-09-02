import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Button, Text } from "grommet";

function MenuItems(props) {
  return (
    <>
      <Button
        key={props.name}
        hoverIndicator
        onClick={() => props.history.push("/dashboard")}
      >
        <Box
          pad={{
            horizontal: "medium",
            vertical: "small"
          }}
        >
          <Text>{props.name}</Text>
        </Box>
      </Button>
    </>
  );
}

export default withRouter(MenuItems);
