import React, { useState } from 'react';
import DateTimeDropButton from '../DateTime';
import { Box, Form, FormField, TextArea, Text } from 'grommet';
import { useSelector, connect } from 'react-redux';
import request from '../../request';
import FormError from '../formError';
import FormButton from '../button/FormButton';
import scheduleInterviewBoundActionCreator from './scheduleInterview.action';

import FormLayout from '../FormLayout';

function ScheduleInterview(props) {
  const { email } = props.match.params;
  const { error, loading } = useSelector(
    ({ interviewDetails }) => interviewDetails
  );
  const { hirer } = useSelector(({ hirer }) => hirer);

  const [values, setValues] = useState({
    title: '',
    location: '',
    description: '',
    startDate: undefined,
    startTime: '',
    endDate: undefined,
    endTime: '',
    decaDev: email,
    timezone: '',
    hiringPartner: hirer.email,
    nameOfOrg: hirer.nameOfOrg
  });

  const {
    title,
    location,
    description,
    startDate,
    startTime,
    endDate,
    endTime,
    decaDev,
    hiringPartner,
    nameOfOrg
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
    if (!startDate || !startTime || !endDate || !endTime) return;
    // let start = toIso(startDate, startTime);
    // let end = toIso(endDate, endTime);
    let payload = {
      location,
      description,
      startTime: `${startDate} ${startTime}`,
      endTime: `${endDate} ${endTime}`,
      hiringPartner,
      nameOfOrg,
      decaDev
    };
    props.scheduleInterview(payload, request);
  };

  return (
    <FormLayout>
      <Box width="medium">
        <Box margin="small" pad="small">
          <Text
            width="auto"
            size="large"
            margin="small"
            style={{
              fontWeight: 'bold',
              fontSize: '25px'
            }}
          >
            Schedule Interview
          </Text>
        </Box>
        <FormError error={error} />
        <Form onSubmit={handleSubmit}>
          <FormField
            label="Add Title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          <FormField
            label="Add Location"
            name="location"
            value={location}
            onChange={handleChange}
          />
          <FormField label="Decadev" name="decadev" value={decaDev} disabled />
          <FormField
            label="Add Description"
            name="description"
            value={description}
            onChange={handleChange}
            component={TextArea}
            required
          />
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
          <Box
            direction="row"
            justify="center"
            align="center"
            margin={{ top: 'medium' }}
          >
            <FormButton loading={loading} type="submit" text="Save Interview" />
          </Box>
        </Form>
      </Box>
    </FormLayout>
  );
}
const mapDispatchToProps = {
  scheduleInterview: scheduleInterviewBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(ScheduleInterview));
