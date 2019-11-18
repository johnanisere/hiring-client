import React, { useState } from 'react';
import Button from '../button/FormButton';
import { Box, Form, Text } from 'grommet';
import request from '../../request';
import updatePasswordBoundActionCreator from './updatePassword.action';
import FormError from '../formError';
import { connect, useSelector } from 'react-redux';
import SuccessNotification from '../toasters/SuccessNotification';
import Input from '../input';
import Formlayout from '../FormLayout';

function UpdatePassword({ onUpdatePassword, match }) {
  const { error } = useSelector(({ error }) => error);
  const [loading, onLoading] = useState(false);

  const [success, onSuccess] = useState('');
  const [values, setValues] = useState({
    password: '',
    confirmPassword: ''
  });

  const {
    params: { token, email }
  } = match;
  const { password, confirmPassword } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const activityIndicator = value => {
    onLoading(value);
  };

  const handleSuccess = val => {
    onSuccess(val);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onUpdatePassword(
      { password, confirmPassword, email },
      request,
      token,
      activityIndicator,
      handleSuccess
    );
  };
  const closeToaster = () => onSuccess('');

  return (
    <>
      {success && (
        <SuccessNotification message={success.message} onClose={closeToaster} />
      )}
      <Formlayout>
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
            Update Password
          </Text>
          <Text size="small" alignSelf="center">
            Create new password
          </Text>
        </Box>

        <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <FormError error={error} />
          <Input
            name="password"
            required
            value={password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            style={{
              marginBottom: '15px',
              borderRadius: '20px'
            }}
          />
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="confirmPassword"
            required
            value={confirmPassword}
            onChange={handleChange}
            color="dark-1"
            style={{
              marginBottom: '15px',
              borderRadius: '20px'
            }}
          />
          <Button loading={loading} type="submit" text="Update Password" />
        </Form>
      </Formlayout>
    </>
  );
}

const mapDispatchToProps = {
  onUpdatePassword: updatePasswordBoundActionCreator
};
export default connect(null, mapDispatchToProps)(UpdatePassword);
