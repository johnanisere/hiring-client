import React from 'react';
import { Heading, Box, Text } from 'grommet';

export default function Skills(props) {
  const { skills } = props.decadev;
  return (
    <Box responsive direction="column">
      <Heading color="#a0a0a0" level={4}>
        SKILLS{' '}
        <hr
          style={{
            border: '0',
            height: ' 0',
            borderTop: '2px solid rgba(0, 0, 0, 0.1)',
            borderBottom: '3px solid rgba(255, 255, 255, 0.3)'
          }}
        />
      </Heading>
      {skills.map((value, i) => (
        <>
          <Heading level={4} key={i} style={{ marginTop: '-1rem' }}>
            {value.type}
          </Heading>
          <Text>{value.description}</Text>
        </>
      ))}
    </Box>
  );
}
