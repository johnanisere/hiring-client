import React, { useState } from 'react';
import request from '../../request';
import { Box, Form, Text, FormField } from 'grommet';
import { useSelector, connect } from 'react-redux';
import signupBoundActionCreator from './signup.action';
import FormError from '../formError';
import Button from '../button/FormButton';
function SignUp(props) {
  const { error, loading } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signup(values, request);
  };

  return (
    <>
      <Box margin="small" pad="small" responsive>
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
          SignUp
        </Text>
        <Text size="small" alignSelf="center">
          Please fill in your details
        </Text>
      </Box>

      <FormError error={error} />
      <Form onSubmit={handleSubmit}>
        <FormField
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          type="name"
          style={{
            marginBottom: '5px',
            borderRadius: '20px'
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
            marginBottom: '5px',
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
          style={{
            marginBottom: '5px',
            borderRadius: '20px'
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
            marginBottom: '5px',
            borderRadius: '20px'
          }}
        />

        <Box
          direction="row"
          justify="center"
          align="center"
          margin={{ top: 'medium' }}
        >
          <Button loading={loading} text="Sign Up" type="submit" />
        </Box>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  signup: signupBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
