import React, { useState, useEffect } from 'react';

import { Box, Button, Grommet, Form, Text, FormField } from 'grommet';
import { grommet } from 'grommet/themes';

export default function UpdatePassword() {
  const [values, setValues] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(false);
  const { password, confirmPassword } = values;

  useEffect(() => {
    console.log(values);
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const condition =
      !password || !confirmPassword || password !== confirmPassword;

    console.log({ condition });

    if (condition) {
      setError(true);
      return;
    }
    console.log('VALUES', values);
  };

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box
          style={{
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0,0,0,0.8)'
          }}
          width="medium"
          pad="medium"
        >
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
              Update Your Password
            </Text>
            <Text size="small" alignSelf="center">
              Kindly update your password here
            </Text>
          </Box>
          {error && (
            <small
              className="error"
              style={{ color: 'red', textAlign: 'center' }}
            >
              Make sure passwords on both fields are the same!
            </small>
          )}
          <Form onSubmit={e => handleSubmit(e)}>
            <FormField
              name="password"
              required
              validate={{
                regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  'Password must contain at least 8 characters, 1 letter, and 1 number'
              }}
              value={password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              style={{
                marginBottom: '15px',
                borderRadius: '20px'
              }}
            />
            <FormField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
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
                margin="medium"
                width="large"
                color="dark-1"
                label="Update Password"
                type="submit"
                style={{ width: '100%' }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
