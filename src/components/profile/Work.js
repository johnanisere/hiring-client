import React from 'react';
import { Box, Heading, Text } from 'grommet';

export default function Work(props) {
  const { decadev } = props;
  console.log({ decadev });
  return (
    <Box responsive direction="column">
      <Heading color="#a0a0a0" level={4}>
        WORK EXPERIENCE
        <hr
          style={{
            border: '0',
            height: ' 0',
            borderTop: '2px solid rgba(0, 0, 0, 0.1)',
            borderBottom: '3px solid rgba(255, 255, 255, 0.3)'
          }}
        />
      </Heading>
      {decadev.employments.map(item => (
        <Box pad="small">
          <Box
            responsive
            style={{ marginTop: '-2rem' }}
            direction
            background={{ color: '#f1f1f1', opacity: 'weak' }}
            align="center"
          >
            <Heading level={4}>{item.title}</Heading>
            <Text
              color="brand"
              size="small"
              style={{
                marginLeft: 'auto',
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
              {item.duration}
            </Text>
          </Box>
          <Text color="#123456" size="small">
            {item.location}
          </Text>

          {item.achievements.map(achievement => (
            <Text color="#654321" size="small">
              {achievement}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
}
