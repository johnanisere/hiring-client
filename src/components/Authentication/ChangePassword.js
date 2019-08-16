import React, { useState } from "react";
import { Box, Form, Text } from "grommet";
import { connect } from "react-redux";
import Button from "../buttons/FormButton";
import request from "../../request";
import FormError from "../formError";
import Input from "../input";
import SuccessNotification from "../toasters/SuccessNotification";

import changePassBoundActionCreator from "./changePassword.action";

const ChangePass = ({ onChangePassword }) => {
  const [error, onError] = useState({});
  const [loading, onLoading] = useState(false);
  const [success, onSuccess] = useState("");
  const [data, onChangeData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  // collects the data from the fields
  const handleChange = ({ target: { name, value } }) => {
    onChangeData({ ...data, [name]: value });
  };
  const activityIndicator = value => {
    onLoading(value);
  };
  const handleError = error => {
    onError(error);
  };
  const handleSuccess = val => {
    onSuccess(val);
  };
  //submit the data to the backend
  const handleSubmit = async e => {
    e.preventDefault();
    handleError({});
    onSuccess("");
    onChangePassword(
      data,
      request,
      activityIndicator,
      handleError,
      handleSuccess
    );
  };
  const closeToaster = () => onSuccess("");
  // renders the layout
  return (
    <>
      {success && (
        <SuccessNotification message={success.message} onClose={closeToaster} />
      )}
      <Box margin="small" pad="small">
        <Text
          width="auto"
          size="large"
          margin="auto"
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            paddingBottom: "15px"
          }}
        >
          Change Password
        </Text>
        <Text size="small" alignSelf="center">
          Enter email and password
        </Text>
      </Box>
      <FormError error={error} />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Password"
          name="newPassword"
          type="password"
          onChange={handleChange}
          value={data.newPassword}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must contain at least 8 characters, 1 letter, and 1 number"
          }}
          color="dark-1"
        />
        <Input
          placeholder="Confrim Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must contain at least 8 characters, 1 letter, and 1 number"
          }}
          color="dark-1"
          value={data.confirmPassword}
        />
        <Button loading={loading} type="submit" text="Submit" />
      </Form>
    </>
  );
};

const mapDispatchToProps = {
  onChangePassword: changePassBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(ChangePass);
