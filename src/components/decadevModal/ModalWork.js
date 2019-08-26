import React from 'react';
import { Box, Heading, Text } from 'grommet';

export default function ModalWork(props) {
  return (
    <Box responsive direction="column">
      <Box responsive direction="column">
        <Heading color="#a0a0a0" level={4}>
          {props.work}
          <hr
            style={{
              border: '0',
              height: ' 0',
              borderTop: '2px solid rgba(0, 0, 0, 0.1)',
              borderBottom: '3px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </Heading>
      </Box>
      <Box
        gap
        responsive
        style={{ marginTop: '-2rem' }}
        direction
        background={{ color: '#f1f1f1', opacity: 'weak' }}
        align="center"
      >
        <Heading level={4}>{props.heading}</Heading>
        <Text
          color="brand"
          size="small"
          style={{
            marginLeft: '10rem',
            textAlign: 'center',
            background: '#e3f2fc',
            borderRadius: '5px',
            lineHeight: '30px',
            width: '100px',
            height: '30px',
            fontWeight: 'bold',
            padding: '5px'
          }}
        >
          {props.stage}
        </Text>
      </Box>
      <Text color="#123456" size="small">
        {props.address}
      </Text>
      <Text color="#654321" size="small">
        {props.zip}
      </Text>
    </Box>
  );
}
