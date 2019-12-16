import React from 'react';
import { Box, Form, Text } from 'grommet';
import Input from '../../input/index';
import Formlayout from '../../FormLayout';
import SignupButton from '../SignupButton';

function FormOrgData(props) {
  const continueToNext = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  return (
    <Formlayout>
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
          <Form onSubmit={continueToNext}>
            <Input
              label="Name of Organisation"
              name="nameOfOrg"
              type="nameOfOrg"
              value={values.nameOfOrg}
              required
              onChange={handleChange}
            />
            <Input
              label="Designation"
              name="designation"
              type="designation"
              value={values.designation}
              required
              onChange={handleChange}
            />

            <Input
              label="Website"
              name="companyURL"
              type="companyURL"
              value={values.companyURL}
              required
              validate={{
                regexp: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'Input must be valid website URL!'
              }}
              onChange={handleChange}
            />
            <Input
              label="Industry"
              name="industry"
              type="industry"
              value={values.industry}
              required
              onChange={handleChange}
            />

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <SignupButton
                label={'Back'}
                onClick={back}
              />
              <SignupButton
                label={'Continue'}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Formlayout>
  );
}
export default React.memo(FormOrgData);
