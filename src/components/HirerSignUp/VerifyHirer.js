import React, { useEffect, useState } from 'react';
import request from '../../request';
import { Box } from 'grommet';

export default function VerifyHirer({ match }) {
  const {
    params: { token, email }
  } = match;

  // eslint-disable-next-line
  const [state, setState] = useState({ token, email });
  const [message, setMessage] = useState('');

  useEffect(() => {
    request
      .put(`${process.env.REACT_APP_BASE_URL}/api/v1/hirer/verifyhirer`, {
        ...state
      })
      .then(res => {
        setMessage(res.data.message);
      });
  }, [state, message]);

  return (
    <Box pad="large" justify="center" align="center">
      <p>{message}</p>
    </Box>
  );
}
