import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Box, Button, Form, Text, FormField } from 'grommet';

function useDataFetcher(url, bodyDetails) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(url, bodyDetails)
      .then(function(response) {
        setData(response);
        setIsLoading(false);
      })
      .catch(function(error) {
        setError(error);
        console.log(error);
      });
  }, [url, bodyDetails]);

  return { data, error, isLoading };
}

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const { email, password } = values;

  useEffect(() => {
    console.log(values);
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const condition = !email || !password;

    console.log({ condition });

    if (condition) {
      setError(true);
      return;
    }
    console.log('VALUES', values);
  };
  useDataFetcher('localhost:3005/api/v1/users/user-login', values);

  return (
    <>
      <Box margin="small" pad="small">
        <Text
          width="auto"
          size="large"
          margin="auto"
          style={{
            fontWeight: 'bold',
            fontSize: '25px',
            paddingBottom: '15px'
          }}
        >
          Login Here
        </Text>
        <Text size="small" alignSelf="center">
          Enter email and password
        </Text>
      </Box>
      {error && (
        <small className="error" style={{ color: 'red', textAlign: 'center' }}>
          Make sure email and password are valid!
        </small>
      )}
      <Form onSubmit={e => handleSubmit(e)}>
        <FormField
          name="email"
          required
          validate={{
            regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Input must be valid email!'
          }}
          value={password}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />
        <FormField
          placeholder="Password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              'Password must contain at least 8 characters, 1 letter, and 1 number'
          }}
          color="dark-1"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />

        <Box
          direction="row"
          justify="center"
          align="center"
          margin={{ top: 'medium' }}
        >
          <Button
            primary
            width="large"
            color="dark-1"
            label="Login"
            type="submit"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
}
