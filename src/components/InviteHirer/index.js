import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { Box, Button, Form, Text } from 'grommet';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../input/index';
import FormError from '../formError';
import inviteHirerBoundActionCreator from '../InviteHirer/inviteHirer.action';
import request from '../../request';

function InviteHirer(props) {
  const { error, loading } = useSelector(({ hirer }) => hirer);
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    contactPerson: '',
    phone: '',
    companyURL: '',
    address: ''
  });

  const {
    email,
    password,
    name,
    contactPerson,
    phone,
    companyURL,
    address
  } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.hirer(values, request);
  };

  return (
    <Box fill align="center" justify="center">
      <Text
        width="auto"
        size="large"
        margin="small"
        style={{
          fontWeight: 'bold',
          fontSize: '25px'
        }}
      >
        Invite Hiring Partner
      </Text>
      <Box width="large">
        <FormError error={error} />
        <Form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            value={name}
            required
            validate={{ regexp: /^[a-z]/i }}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            required
            onChange={handleChange}
          />
          <Input
            label="Phone"
            name="phone"
            type="phone"
            value={phone}
            required
            onChange={handleChange}
          />
          <Input
            label="Contact Person"
            name="contactPerson"
            type="contactPerson"
            value={contactPerson}
            required
            onChange={handleChange}
          />
          <Input
            label="Company URL"
            name="companyURL"
            type="companyURL"
            value={companyURL}
            required
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            required
            value={password}
            type="password"
            validate={{
              regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                'Password must contain at least 8 characters, 1 letter, and 1 number'
            }}
            onChange={handleChange}
          />
          <Input
            label="Address"
            name="address"
            required
            value={address}
            onChange={handleChange}
          />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button
              primary
              width="large"
              color="dark-1"
              label={
                loading ? <BeatLoader size={5} color="#fff" /> : 'Send Invite'
              }
              type="submit"
              style={{ width: '100%', marginTop: 20 }}
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = {
  hirer: inviteHirerBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(InviteHirer));
