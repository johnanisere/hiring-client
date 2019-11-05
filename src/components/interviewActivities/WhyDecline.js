import React, { useState } from 'react';
import { Box, Button, Form } from 'grommet';
import Input from '../input/index';
import Formlayout from '../FormLayout';
import request from '../../request';
import { connect } from 'react-redux';
import whyDecline from './decline.action';
import SuccessNotification from '../toasters/SuccessNotification';

function WhyDecline(props) {
  const [values, setValues] = useState({
    declineReason: '',
    interviewId: props.interviewId
  });
  const [success, onSuccess] = useState('');
  const handleSuccess = val => {
    onSuccess(val);
  };

  const { declineReason } = values;
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(declineReason);
    props.whyDecline(request, values, handleSuccess);
  };
  const closeToaster = () => onSuccess('');

  return (
    <>
      {success && (
        <SuccessNotification message={success} onClose={closeToaster} />
      )}
      <Formlayout>
        <Box fill align="center" justify="center" width="100%">
          <Box width="large">
            <Form onSubmit={handleSubmit}>
              <Input
                label="Please Provide a reason"
                name="declineReason"
                value={declineReason}
                required
                validate={{ regexp: /^[a-z]/i }}
                onChange={handleChange}
              />

              <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                <Button
                  primary
                  width="large"
                  color="dark-1"
                  label={'Submit'}
                  style={{ width: '100%', margin: '20px 0' }}
                  type="submit"
                />
              </Box>
            </Form>
          </Box>
        </Box>
      </Formlayout>
    </>
  );
}

const mapDispatchToProps = {
  whyDecline
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(WhyDecline));
