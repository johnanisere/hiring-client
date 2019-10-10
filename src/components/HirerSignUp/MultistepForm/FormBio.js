import React from 'react';
import { Box, Button, Form, Text } from 'grommet';
import Input from '../../input/index';

function FormBio(props) {
  const { values, handleChange } = props;
  const continueToNext = e => {
    e.preventDefault();
    props.nextStep();
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
        <Form onSubmit={continueToNext}>
          <Input
            label="Your Name"
            name="name"
            value={values.name}
            required
            validate={{ regexp: /^[a-z]/i }}
            onChange={handleChange}
          />
          <Input
            label="Work Email"
            name="email"
            type="email"
            value={values.email}
            validate={{
              regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Input must be valid email!'
            }}
            required
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            type="phone"
            value={values.phone}
            required
            onChange={handleChange}
          />

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button
              primary
              width="large"
              color="dark-1"
              label={'Continue'}
              style={{ width: '100%', margin: '20px 0' }}
              // onClick={continueToNext}
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
export default React.memo(FormBio);
