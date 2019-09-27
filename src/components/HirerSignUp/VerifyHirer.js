import React, { useEffect, useState } from 'react';
import request from '../../request';

export default function VerifyHirer({ match }) {
  const {
    params: { token, email }
  } = match;

  // eslint-disable-next-line
  const [state, setState] = useState({ token, email });
  const [message, setMessage] = useState('');

  useEffect(() => {
    request
      .put('http://localhost:3005/api/v1/hirer/verifyhirer', { ...state })
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
