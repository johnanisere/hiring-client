import React, { useState } from "react";
import { Box, Form, FormField, TextArea, Text } from "grommet";
import { connect } from "react-redux";
import request from "../../request";
import LongerFormsLayout from "../LongerFormsLayout";
import DateTimeDropButton from "../DateTime";
import { toNormalDate } from "../../helpers/utils";
import SuccessNotification from "../toasters/SuccessNotification";
import FormButton from "../button/FormButton";
import FormError from "../formError/index";
import scheduleTestBoundActionCreator from "./scheduleTest.action";

function ScheduleTest(props) {
  const { email } = props.match.params;
  const { loading, scheduleTest, user, error } = props;
  const [success, onSuccess] = useState("");
  const [dateValidation, setDateValidation] = useState("");
  const handleSuccess = val => {
    onSuccess(val);
  };

  const [values, setValues] = useState({
    description: "",
    decaDev: email,
    hiringPartner: user.email,
    nameOfOrg: user.nameOfOrg,
    testUrl: "",
    startDate: undefined,
    startTime: "",
    endDate: undefined,
    endTime: ""
  });
  const {
    description,
    decaDev,
    testUrl,
    startDate,
    startTime,
    endDate,
    endTime
  } = values;

  const setDateAndTime = data => {
    setValues({ ...values, ...data });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e && e.preventDefault();
   
    if (!startDate || !startTime || !endDate || !endTime) {
      setDateValidation("Please add start and end date and time");
      return;
    } else {
      let payload;
      if (values.testUrl === "") {
        payload = {
          startTime,
          endTime,
          startDate: toNormalDate(startDate),
          endDate: toNormalDate(endDate),
          description,
          decaDev,
          hiringPartner: values.hiringPartner,
          nameOfOrg: values.nameOfOrg
        };
      } else {
        payload = {
          startTime,
          endTime,
          startDate: toNormalDate(startDate),
          endDate: toNormalDate(endDate),
          description,
          decaDev,
          hiringPartner: values.hiringPartner,
          nameOfOrg: values.nameOfOrg,
          testUrl
        };
      }

      scheduleTest(payload, request, handleSuccess);
    }
  };

  const closeToaster = () => onSuccess("");

  return (
    <>
      {success && (
        <SuccessNotification message={success} onClose={closeToaster} />
      )}
      <LongerFormsLayout>
        <Box fill width="medium">
          <Box margin="small" pad="small" align="center">
            <Text
              width="auto"
              size="large"
              margin="small"
              style={{
                fontWeight: "bold",
                fontSize: "25px"
              }}
            >
              Schedule Test
            </Text>
          </Box>

          <FormError error={error} />

          <Form onSubmit={handleSubmit}>
            <FormField
              label="Decadev"
              name="decadev"
              value={decaDev}
              disabled
            />

            <FormField
              label="Test URL (optional)"
              name="testUrl"
              value={testUrl}
              onChange={handleChange}
              validate={{
                regexp: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                message: "must be a valid url"
              }}
            />
            <FormField
              label="Add Description"
              name="description"
              value={description}
              onChange={handleChange}
              component={TextArea}
              required
            />
            <Box direction="row" align="center" style={{ marginTop: "20px" }}>
              <FormField>
                <DateTimeDropButton
                  label="Start time"
                  name="start"
                  setDateAndTime={setDateAndTime}
                  date={startDate}
                  time={startTime}
                />
              </FormField>
              <FormField>
                <DateTimeDropButton
                  label="End time"
                  name="end"
                  setDateAndTime={setDateAndTime}
                  date={endDate}
                  time={endTime}
                />
              </FormField>
            <small style={{ color: "red" }}>{dateValidation}</small>
            </Box>

            <Box
              direction="row"
              justify="center"
              align="center"
              margin={{ top: "medium" }}
            >
              <FormButton loading={loading} type="submit" text="Save Test" />
            </Box>
          </Form>
        </Box>
      </LongerFormsLayout>
    </>
  );
}

const mapDispatchToProps = {
  scheduleTest: scheduleTestBoundActionCreator
};

const mapStateToProps = state => {
  const { interviewDetails, user, error } = state;
  return {
    loading: interviewDetails.loading,
    user: user.data,
    error: error.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTest);
