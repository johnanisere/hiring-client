import React, { useState } from "react";
import { Box, Form, Select, Button, Heading, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import BeatLoader from "react-spinners/BeatLoader";
import request from "../../request";
import { connect, useSelector } from "react-redux";
import mailInviteBoundActionCreator from "./mailInvite.action";
import PropTypes from "prop-types";

function InviteForm(props) {
  const { loading } = useSelector(({ user }) => user);
  const [state, setState] = useState({
    options: ["Squad 1", "Squad 2", "Squad 3"],
    value: ""
  });

  const [error, setError] = useState(false);

  const { options, value } = state;

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      setError(true);
      return;
    }
    const data = { squadNo: value };

    props.mailInvite(data, request);
  };
  return (
    <>
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="start" pad="large">
          <div
            className="container"
            style={{
              border: "1px solid #f1f1f1",
              padding: "50px",
              borderRadius: "5px",
              boxShadow: "1px 2px 2px #f1f1f1",
              marginTop: "30px"
            }}
          >
            <Form onSubmit={handleSubmit}>
              {error && (
                <small
                  className="error"
                  style={{ color: "red", textAlign: "center" }}
                >
                  Invalid Request. Please select a squad
                </small>
              )}
              <Heading level={2} align="center" style={{ textAlign: "center" }}>
                Invite Devs
              </Heading>
              <Select
                id="select"
                name="select"
                placeholder="Select Squad"
                value={value}
                options={options}
                onChange={({ option }) => setState({ ...state, value: option })}
              />
              <Box direction="row" align="start" gap="small" pad="xsmall">
                <Button
                  primary
                  width="large"
                  color="dark-1"
                  label={
                    loading ? (
                      <BeatLoader size={5} color="#fff" />
                    ) : (
                      "Send Invite"
                    )
                  }
                  type="submit"
                  style={{ width: "100%", margin: "5px auto" }}
                />
              </Box>
            </Form>
          </div>
        </Box>
      </Grommet>
    </>
  );
}

InviteForm.propType = {
  mailInvite: PropTypes.func
};

const mapDispatchToProps = {
  mailInvite: mailInviteBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(InviteForm);
