import React from 'react';
import { Heading, Box, Text } from 'grommet';
import Formlayout from '../../FormLayout';

function Success() {
  return (
    <Formlayout>
      <Box>
        <Heading>Success!</Heading>
        <Text>
          <strong>Thank You For Your Submission</strong>
        </Text>
        <p>You will get an email with further instructions</p>
      </Box>
    </Formlayout>
  );
}

export default React.memo(Success);
