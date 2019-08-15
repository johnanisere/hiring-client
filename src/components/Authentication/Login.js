import React, { useState } from 'react';
import request from '../../request';
import { BeatLoader } from 'react-spinners';
import { Box, Button, Form, Text, FormField } from 'grommet';
import { useSelector, connect } from 'react-redux';
import loginBoundActionCreator from './login.action';
import { errorMessageExtrator } from '../../helpers/utils';

function Login(props) {
  const { error, loading } = useSelector(({ user }) => user);
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

      {error && (
        <small className="error" style={{ color: 'red', textAlign: 'center' }}>
          {errorMessageExtrator(error)}
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
            label={loading ? <BeatLoader size={5} color="#fff" /> : 'Login'}
            onClick={handleSubmit}
            type="submit"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  login: loginBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
