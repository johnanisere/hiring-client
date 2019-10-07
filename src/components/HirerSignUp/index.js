import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { Box, Button, Form, Text } from 'grommet';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../input/index';
import MultipleChoices from '../radio-button/RadioButton';

import FormError from '../formError';
import registerHirerBoundActionCreator from './hirerSignup.action';
import request from '../../request';

function HirerSignUp(props) {
  const { error, loading } = useSelector(({ hirer }) => hirer);
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    companyURL: '',
    address: '',
    nameOfOrg: '',
    designation: '',
    numberOfTalentsRequired: '',
    deadline: ''
  });
  const {
    email,
    nameOfOrg,
    name,
    phone,
    companyURL,
    designation,
    numberOfTalentsRequired,
    deadline,
    password
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
    <Box fill align="center" justify="center" width="100%">
      <Text
        width="auto"
        size="large"
        margin="small"
        style={{
          fontWeight: 'bold',
          fontSize: '25px'
        }}
      >
        Get In Touch
      </Text>
      <Box width="large">
        <FormError error={error} />
        <Form onSubmit={handleSubmit}>
          <Input
            label="Your Name"
            name="name"
            value={name}
            required
            validate={{ regexp: /^[a-z]/i }}
            onChange={handleChange}
          />
          <Input
            label="Work Email"
            name="email"
            type="email"
            value={email}
            required
            onChange={handleChange}
          />
          <Input
            label="Name of Organisation"
            name="nameOfOrg"
            type="nameOfOrg"
            value={nameOfOrg}
            required
            onChange={handleChange}
          />
          <Input
            label="Designation"
            name="designation"
            type="designation"
            value={designation}
            required
            onChange={handleChange}
          />
          <Input
            label="Website"
            name="companyURL"
            type="companyURL"
            value={companyURL}
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
            label="Password"
            name="password"
            type="password"
            value={password}
            required
            onChange={handleChange}
          />

          <MultipleChoices
            question="Number of talents required"
            choices={['1-5', '6-10', '11-20', '21 and above']}
            changed={handleChange}
            name="numberOfTalentsRequired"
            random={numberOfTalentsRequired}
          />
          <MultipleChoices
            question="How soon do you wish to onboard?"
            choices={[
              'Within 1 Month',
              'Within 2-3 Months',
              'It depends',
              "Let's Talk First"
            ]}
            name="deadline"
            changed={handleChange}
            random={deadline}
          />

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button
              primary
              width="large"
              color="dark-1"
              label={loading ? <BeatLoader size={5} color="#fff" /> : 'SignUp'}
              type="submit"
              style={{ width: '100%', margin: '20px 0' }}
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = {
  hirer: registerHirerBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(HirerSignUp));
