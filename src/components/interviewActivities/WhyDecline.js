import React, { useState } from 'react';
import { Box, Button, Form } from 'grommet';
import { BeatLoader } from 'react-spinners';
import Input from '../input/index';
import Formlayout from '../FormLayout';
import request from '../../request';
import { connect, useSelector } from 'react-redux';
import whyDecline from './decline.action';
import SuccessNotification from '../toasters/SuccessNotification';
import FormError from '../formError/';

function WhyDecline(props) {
  const { error, loading } = useSelector(({ interviews }) => interviews);
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
            <FormError error={error} />
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
                  type={
                    loading ? <BeatLoader color="#fff" size={5} /> : 'submit'
                  }
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
