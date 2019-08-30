import React, { useState } from 'react';
import DateTimeDropButton from '../DateTime';
import FormFieldSelect from '../FormFieldSelect';
import { Box, Form, FormField, TextArea, Text } from 'grommet';
import { useSelector, connect } from 'react-redux';
import request from '../../request';
import FormError from '../formError';
import FormButton from '../button/FormButton';
import scheduleInterviewBoundActionCreator, {
  authorizeBoundActionCreator
} from './scheduleInterview.action';
import { toIso } from '../../helpers/utils';
import moment from 'moment-timezone';
import Modal from './Modal';
import FormLayout from '../FormLayout';

function ScheduleInterview(props) {
  const x = URLSearchParams.get(props.location.search);
  console.log('X: ', x);
  const { error, loading } = useSelector(
    ({ interviewDetails }) => interviewDetails
  );
  const user = useSelector(({ user }) => user.data);

  const [values, setValues] = useState({
    title: '',
    location: '',
    description: '',
    startDate: undefined,
    startTime: '',
    endDate: undefined,
    endTime: '',
    decadev: '',
    timezone: ''
  });
  const [open, onOpen] = useState(false);
  const {
    title,
    location,
    description,
    startDate,
    startTime,
    endDate,
    endTime,
    decadev
  } = values;
  console.log(values);
  const setDateAndTime = data => {
    setValues({ ...values, ...data });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onToggle = () => {
    onOpen(!open);
  };
  const handleSubmit = (e, cb) => {
    e && e.preventDefault();
    if (!startDate || !startTime || !endDate || !endTime) return;
    let start = toIso(startDate, startTime);
    let end = toIso(endDate, endTime);
    let payload = {
      title,
      location,
      description,
      startTime: start,
      endTime: end,
      timezone: moment.tz.guess(),
      email: 'johnanisere@gmail.com',
      devemail: 'sheyiogundijo@gmail.com'
    };
    props.scheduleInterview(payload, request, onToggle, cb);
  };
  const submit = (cb, code) => {
    const data = {
      email: 'sheyiogundijo@gmail.com',
      code
    };

    props.authorize(data, request, cb, handleSubmit);
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
            validate={{ regexp: /^[a-z]/i }}
          />
          <FormField
            label="Add Location"
            name="location"
            value={location}
            onChange={handleChange}
          />
          <FormField label="Decadev" name="decadev" value={decadev} disabled />
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
          <Modal open={open} onToggle={onToggle} submit={submit} />
        </Form>
      </Box>
    </FormLayout>
  );
}
const mapDispatchToProps = {
  scheduleInterview: scheduleInterviewBoundActionCreator,
  authorize: authorizeBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(ScheduleInterview));
