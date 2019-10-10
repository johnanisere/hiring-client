import React from 'react';
import { Box, Button, Form, Text } from 'grommet';
import Input from '../../input/index';

function FormPassword(props) {
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
            label="Password"
            name="password"
            type="password"
            value={values.password}
            required
            onChange={handleChange}
          />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button
              primary
              width="large"
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
  );
}
export default React.memo(FormPassword);
