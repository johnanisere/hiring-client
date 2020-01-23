import React, { useState, useEffect } from 'react';
import DateTimeDropButton from '../DateTime';
import { Box, Form, FormField, TextArea, Text } from 'grommet';
import { useSelector, connect, useDispatch } from 'react-redux';
import request from '../../request';
import FormError from '../formError';
import FormButton from '../button/FormButton';
import scheduleInterviewBoundActionCreator from './scheduleInterview.action';
import { toNormalDate } from '../../helpers/utils';
import SuccessNotification from '../toasters/SuccessNotification';

import LongerFormsLayout from '../LongerFormsLayout';
import { INCREMENT_NEXT_COUNT } from '../AllowNext/allowNext.action';
import { GET_HIRER } from './hirer.action';

function ScheduleInterview(props) {
  const { email } = props.match.params;
  const [success, onSuccess] = useState('');

  const { loading } = useSelector(({ interviewDetails }) => interviewDetails);
  const { error } = useSelector(({ error }) => error);
  const { pod } = useSelector(({ pod }) => {
    return pod;
  });

  const { data: userData } = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  const handleSuccess = val => {
    onSuccess(val);
  };

  useEffect(() => {
    if (!pod) {
      props.history.push('/dashboard');
    }
  });

  const handleAllowNext = userPod => {
    let currentInviteCount = userData.currentInviteCount;

    let currentPod =
      pod === 'C#' ? pod.split('')[0].toLowerCase() : pod.toLowerCase();

    currentInviteCount.forEach(count => {
      if (count.pod === currentPod) {
        if (count.count >= 1) {
          count.next = false;
        } else {
          ++count.count;
        }
      }
    });

    const payload = { partner: { ...userData, currentInviteCount } };

    dispatch({
      type: INCREMENT_NEXT_COUNT,
      payload: userPod
    });

    dispatch({ type: GET_HIRER, payload });
  };

  const { data } = useSelector(({ user }) => user);

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
    hiringPartner: data.email,
    nameOfOrg: data.nameOfOrg
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

    let payload = {
      location,
      description,
      startTime,
      endTime,
      startDate: toNormalDate(startDate),
      endDate: toNormalDate(endDate),
      hiringPartner,
      nameOfOrg,
      decaDev
    };

    props.scheduleInterview(payload, request, handleSuccess);
  };

  const closeToaster = () => onSuccess('');
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
            <FormField
              label="Decadev"
              name="decadev"
              value={decaDev}
              disabled
            />
            <FormField
              label="Add Description"
              name="description"
              value={description}
              onChange={handleChange}
              component={TextArea}
              required
            />
            <Box direction="row" align="center" style={{ marginTop: '20px' }}>
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
            </Box>
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
                onClick={() => {
                  handleAllowNext(pod);
                }}
              />
            </Box>
          </Form>
        </Box>
      </LongerFormsLayout>
    </>
  );
}
const mapDispatchToProps = {
  scheduleInterview: scheduleInterviewBoundActionCreator
};
export default connect(null, mapDispatchToProps)(React.memo(ScheduleInterview));
