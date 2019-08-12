import React, { useState } from "react";
import { Box, Heading, Select, Button } from "grommet";

export default function InviteForm() {
  const [state, setState] = useState({
    options: ["Squad 1", "Squad 2", "Squad 3"],
    value: ""
  });

  const { options, value } = state;
  return (
    <>
      {/* <Heading level={3} style={{ marginLeft: "0x", textAlign: "center" }}>Send Invite</Heading> */}
      <div className="container">
        <Heading
          level={3}
          color="dark-1"
          style={{ marginLeft: "0x", textAlign: "center" }}
        >
          Send Invite
        </Heading>
        <Box fill align="center" justify="start" pad="large">
          <Select
            id="select"
            name="select"
            placeholder="Select Squad"
            value={value}
            options={options}
            onChange={option => setState({ ...state, value: option })}
          />
          <Box align="start" pad="small">
            <Box direction="row" align="start" gap="small" pad="xsmall">
              <Button label="Send Invite" onClick={() => {}} />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
