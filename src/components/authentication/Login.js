import React, { useState } from 'react';
import request from '../../request';
import { BeatLoader } from 'react-spinners';
import { Box, Button, Form, Text } from 'grommet';
import Input from '../input';
import { useSelector, connect } from 'react-redux';
import loginBoundActionCreator from './login.action';
import FormError from '../formError';

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
          Login
        </Text>
        <Text size="small" alignSelf="center">
          Enter email and password
        </Text>
      </Box>
      <FormError error={error} />
      <Form>
        <Input
          name="email"
          validate={{
            regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Input must be valid email!'
          }}
          value={email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <Input
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
)(React.memo(Login));
