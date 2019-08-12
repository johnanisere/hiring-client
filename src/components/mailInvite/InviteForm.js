import React, { useState } from "react";
import { Box, Form, Select, Button, Heading, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export default function InviteForm() {
  const [state, setState] = useState({
    options: ["Squad 1", "Squad 2", "Squad 3"],
    value: ""
  });

  const { options, value } = state;
  return (
    <>
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="start" pad="large">
          <Form>
            <Heading align="center">Send Invite</Heading>
            <Select
              id="select"
              name="select"
              placeholder="Select Squad"
              value={value}
              options={options}
              onChange={option => setState({ ...state, value: option })}
            />
          </Form>

          <Box align="start" pad="small">
            <Box direction="row" align="start" gap="small" pad="xsmall">
              <Button label="Send Invite" onClick={() => {}} />
            </Box>
          </Box>
        </Box>
      </Grommet>
    </>
  );
}
