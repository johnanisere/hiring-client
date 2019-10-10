import React from 'react';
import { Heading, Box, Text } from 'grommet';

function Success() {
  return (
    <Box>
      <Heading>Success!</Heading>
      <Text>
        <strong>Thank You For Your Submission</strong>
      </Text>
      <p>You will get an email with further instructions</p>
    </Box>
  );
}

export default React.memo(Success);
