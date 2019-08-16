import React, { useState } from "react";
import { Box, Button, Form, Text, FormField } from "grommet";
import { connect } from "react-redux";
import { BeatLoader } from "react-spinners";
import request from "../../request";
import changePassBoundActionCreator from "./changePass.action";

const ChangePass = ({ changePass }) => {
  const { error, onError } = useState("");
  const { loading, onLoading } = useState(false);
  const { success, onSuccess } = useState("");
  const { data, onChnageData } = useState({
    email: "",
    newPassword: "",
    confirmPasword: ""
  });

  // collects the data from the fields
  const handleChange = ({ target: { name, value } }) => {
    onChnageData({ ...data, [name]: value });
  };
  const activityIndicator = () => {
    onLoading(!loading);
  };
  const handleError = error => {
    onError(error);
  };
  //submit the data to the backend
  const handleSubmit = async e => {
    e.preventDefault();
    changePass(data, request, activityIndicator, handleError, onSuccess);
  };

  // renders the layout
  return (
    <>
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
      {error && (
        <small className="error" style={{ color: "red", textAlign: "center" }}>
          Make sure email and password are valid!
        </small>
      )}
      <Form onSubmit={handleSubmit}>
        <FormField
          name="email"
          required
          validate={{
            regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Input must be valid email!"
          }}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={data.email}
          style={{
            marginBottom: "15px",
            borderRadius: "20px"
          }}
        />
        <FormField
          placeholder="Password"
          name="newPassword"
          type="password"
          required
          onChange={handleChange}
          value={data.newPassword}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must contain at least 8 characters, 1 letter, and 1 number"
          }}
          color="dark-1"
          style={{
            marginBottom: "15px",
            borderRadius: "20px"
          }}
        />
        <FormField
          placeholder="Confrim Password"
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must contain at least 8 characters, 1 letter, and 1 number"
          }}
          color="dark-1"
          value={data.confirmPassword}
          style={{
            marginBottom: "15px",
            borderRadius: "20px"
          }}
        />
        <Box
          direction="row"
          justify="center"
          align="center"
          margin={{ top: "medium" }}
        >
          <Button
            primary
            width="large"
            color="dark-1"
            label={loading ? <BeatLoader size={5} color="#fff" /> : "Submit"}
            type="submit"
            style={{ width: "100%", marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
};

const mapDispatchToProps = {
  changePass: changePassBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(ChangePass);
