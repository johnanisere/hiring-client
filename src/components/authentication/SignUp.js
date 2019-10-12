import React, { useState } from 'react';
import request from '../../request';
import { Box, Form, Text, FormField } from 'grommet';
import { useSelector, connect } from 'react-redux';
import signupBoundActionCreator, {
  clearErrorBoundActionCreator
} from './signup.action';
import FormError from '../formError';
import Button from '../button/FormButton';
import SuccessNotify from '../toasters/SuccessNotification';

function SignUp(props) {
  let { error, loading, data } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = values;

  const closeToaster = () => {
    props.clear();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === 'password') {
      onvalidatePassword(value, values.confirmPassword);
    } else if (name === 'confirmPassword') {
      onvalidatePassword(values.password, value);
    } else {
      onvalidatePassword(values.password, values.confirmPassword);
    }
  };

  const onvalidatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      error.message = 'Passwords does not match';
    } else {
      props.clear();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      onvalidatePassword();
    } else {
      props.clear();
      props.signup(values, request);
    }
  };

  return (
    <>
      {data.message && (
        <SuccessNotify message={data.message} onClose={closeToaster} />
      )}
      <Box margin="small" pad="small" size="large" responsive>
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
          Register
        </Text>
        <Text size="small" alignSelf="center">
          Please fill in your details
        </Text>
      </Box>

      {error && <FormError error={error} />}
      <Form onSubmit={handleSubmit}>
        <FormField
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          type="name"
          style={{
            marginBottom: '5px'
          }}
          required
        />
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
            marginBottom: '5px'
          }}
        />
        <FormField
          placeholder="Password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          style={{
            marginBottom: '5px'
          }}
        />
        <FormField
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          type="password"
          style={{
            marginBottom: '5px'
          }}
        />

        <Box>
          <Button
            loading={loading}
            text="Sign Up"
            primary
            width="large"
            label="Sign Up"
            type="submit"
            style={{ width: '100%' }}
          />
        </Box>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  signup: signupBoundActionCreator,
  clear: clearErrorBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
