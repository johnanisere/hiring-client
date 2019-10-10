import React, { useState } from 'react';
import request from '../../../request';
import { Box, Form, Text } from 'grommet';
import Input from '../../input';
import { useSelector, connect } from 'react-redux';
import hirerLoginBoundActionCreator from './hirerLogin.action';
import FormError from '../../formError';
import Button from '../../button/FormButton';
function HirerLogin(props) {
  const { error, loading } = useSelector(({ hirer }) => hirer);
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
    const navigateToDashboard = () => props.history.push('/dashboard');
    props.hirer(values, request, navigateToDashboard);
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

      <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <FormError error={error} />
        <Input
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
        <Input
          placeholder="Password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          color="dark-1"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />
        <Button loading={loading} type="submit" text="Login" />
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  hirer: hirerLoginBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(HirerLogin);
