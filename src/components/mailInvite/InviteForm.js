import React, { useState } from "react";
import { Box, Form, Select, Button, Heading, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import axios from "axios";

export default function InviteForm() {
  const [squad, setSquad] = useState({
    options: ["Squad 1", "Squad 2", "Squad 3"],
    value: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    console.log(value)
    //axios.post("http://localhost:3005/api/v1//invite/devs");
  };

    const { options, value } = squad;

  return (
    <>
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="start" pad="large">
          <div className="container">
            <Form onSubmit={handleSubmit}>
              <Heading align="center" style={{textAlign: "center"}}>Invite Devs</Heading>
              <Select
                id="select"
                name="select"
                placeholder="Select Squad"
                value={value}
                options={options}
                onChange={ ({option}) => setSquad({...squad, value: option })}
              />
              <Box align="start" pad="small">
                <Box direction="row" align="start" gap="small" pad="xsmall">
                  <Button
                    label="Send Invite"
                    type="submit"
                    style={{ marginLeft: "45px" }}
                  />
                </Box>
              </Box>
            </Form>
          </div>
        </Box>
      </Grommet>
    </>
  );
}
