import React from 'react';
import { Box, Button, Form, Text } from 'grommet';
import Input from '../../input/index';
import Formlayout from '../../FormLayout';

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
              // validate={{
              //   regexp: /^(ftp|http|https):\/\/[^ "]+$/,
              //   message: 'Input must be valid website URL!'
              // }}
              onChange={handleChange}
            />

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button
                primary
                color="dark-1"
                label={'Back'}
                style={{ width: '100%', margin: '20px 5px' }}
                onClick={back}
              />
              <Button
                primary
                color="dark-1"
                label={'Continue'}
                style={{ width: '100%', margin: '20px 5px' }}
                // onClick={continueToNext}
                type="submit"
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Formlayout>
  );
}
export default React.memo(FormOrgData);
