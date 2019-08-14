import React, { useState } from 'react';
import request from '../../request';
import { BeatLoader } from 'react-spinners';
import { Box, Button, Form, Text, FormField } from 'grommet';

function Login(props) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const { email, password } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(values, request);
  };

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

      {props.error && (
        <small className="error" style={{ color: 'red', textAlign: 'center' }}>
          {props.error.response.data.error}
        </small>
      )}

      <Form>
        <FormField
          name="email"
          required
          validate={{
            regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Input must be valid email!'
          }}
          value={email}
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
          // validate={{
          //   regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          //   message:
          //     'Password must contain at least 8 characters, 1 letter, and 1 number'
          // }}
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
            label={
              props.loading ? <BeatLoader size={5} color="#fff" /> : 'Login'
            }
            onClick={handleSubmit}
            type="submit"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
}

export default Login;
