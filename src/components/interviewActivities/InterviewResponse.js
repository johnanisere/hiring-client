import React, { useEffect, useState } from 'react';
import request from '../../request';
import { Box } from 'grommet';
import Formlayout from '../FormLayout';

export default function InterviewResponse({ match }) {
  const {
    params: { intent, email, interviewId }
  } = match;

  // eslint-disable-next-line
  const [state, setState] = useState({ intent, email, interviewId });
  const [message, setMessage] = useState('');

  useEffect(() => {
    request
      .get(`/interview/response/${intent}/${email}/${interviewId}`, {
        ...state
      })
      .then(res => {
        setMessage(res.data.message);
      });
  }, [state, message, email, intent, interviewId]);

  return (
    <Formlayout>
      <Box pad="large" justify="center" align="center">
        <p>{message}</p>
      </Box>
    </Formlayout>
  );
}
