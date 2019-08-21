import React, { useState, useEffect } from 'react';
import DateTimeDropButton from '../DateTime';
import FormFieldSelect from '../FormFieldSelect';
import { Box, Grommet, Form, FormField, TextArea, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { useSelector, connect } from 'react-redux';
import request from '../../request';
import FormLayout from '../FormLayout';
import FormError from '../formError';
import FormButton from '../button/FormButton';
import scheduleInterviewBoundActionCreator, {
  authorizeBoundActionCreator
} from './scheduleInterview/scheduleInterview.action';
import { toIso } from '../../helpers/utils';
import moment from 'moment-timezone';
import Modal from './Modal';

function ScheduleInterview(props) {
  const { error, loading } = useSelector(
    ({ interviewDetails }) => interviewDetails
  );
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

  const setDateAndTime = data => {
    setValues({ ...values, ...data });
  };
  const setDecadev = data => {
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
    console.log(values);
  };
  const submit = (cb, code) => {
    const data = {
      email: 'sheyiogundijo@gmail.com',
      code
    };

    props.authorize(data, request, cb, handleSubmit);
  };
  useEffect(() => {
    console.log(values);
  });

  return (
    <Grommet full theme={grommet}>
      <FormLayout>
        <Box fill align="center" justify="center">
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
            <Form onSubmit={handleSubmit}>
              <FormError error={error} />
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
              <FormFieldSelect decadev={decadev} setDecadev={setDecadev} />
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
                <FormButton
                  loading={loading}
                  type="submit"
                  text="Save Interview"
                />
              </Box>
              <Modal open={open} onToggle={onToggle} submit={submit} />
            </Form>
          </Box>
        </Box>
      </FormLayout>
    </Grommet>
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
