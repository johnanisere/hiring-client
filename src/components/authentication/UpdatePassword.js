import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { Box, Button, Form, Text, FormField } from 'grommet';

import request from '../../request';
import updatePasswordBoundActionCreator from './updatePassword.action';
import SuccessNotification from '../toasters/SuccessNotification';
import FormError from '../formError';
import { connect } from 'react-redux';

function UpdatePassword({ onUpdatePassword, match }) {
  const [values, setValues] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, onError] = useState({});
  const [loading, onLoading] = useState(false);
  const [success, onSuccess] = useState('');
  const [diffPassword, setDiffPassword] = useState(false);

  const {
    params: { token }
  } = match;
  const { password, confirmPassword } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const activityIndicator = value => {
    onLoading(value);
  };
  const handleError = error => {
    onError(error);
  };
  const handleSuccess = val => {
    onSuccess(val);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const condition = password !== confirmPassword;
    if (condition) {
      setDiffPassword(true);
      return;
    }
    onUpdatePassword(
      { newPassword: confirmPassword },
      request,
      token,
      activityIndicator,
      handleError,
      handleSuccess
    );
  };
  const closeToaster = () => onSuccess('');

  return (
    <>
      {success && (
        <SuccessNotification message={success.message} onClose={closeToaster} />
      )}
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
          Update Password
        </Text>
        <Text size="small" alignSelf="center">
          Kindly update your password here
        </Text>
      </Box>
      {diffPassword && (
        <small className="error" style={{ color: 'red', textAlign: 'center' }}>
          Make sure passwords on both fields are the same!
        </small>
      )}
      <FormError error={error} />
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
            width="large"
            color="dark-1"
            label={
              loading ? <BeatLoader size={5} color="#fff" /> : 'Update Password'
            }
            type="submit"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  onUpdatePassword: updatePasswordBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(UpdatePassword);
