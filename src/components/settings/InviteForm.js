import React, { useState } from "react";
import { Box, Form, Select, Button, Heading, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import BeatLoader from "react-spinners/BeatLoader";
import request from "../../request";
import FormError from "../formError";
import { connect } from "react-redux";
import mailInviteBoundActionCreator from "./mailInvite.action";
import PropTypes from "prop-types";

function InviteForm(props) {
  const [state, setState] = useState({
    options: ["Squad 1", "Squad 2", "Squad 3"],
    value: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, onSuccess] = useState({});
  const { options, value } = state;

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      const error = { message: "Invalid Request. Please select a squad" };
      setError(error);
      return;
    }
    const data = { squadNo: value };

    props.mailInvite(data, request, setLoading, setError, onSuccess);
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
              <FormError error={error} />
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
