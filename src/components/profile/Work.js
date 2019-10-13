import React from 'react';
import { Box, Text } from 'grommet';

export default function Work(props) {
  const { employments } = props;

  return (
    <section
      style={{
        width: '60%',
        margin: 'auto'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Experience</div>
        <div>Edit</div>
      </div>
      <Box style={{ border: '0.5px solid #d9dadc' }}>
        {employments.map((employment, index) => (
          <div key={`a${index}`} style={{ padding: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1 1 10%', marginRight: '40px' }}>
                <div
                  style={{
                    height: '115px',
                    width: '100%',
                    backgroundColor: 'black'
                  }}
                ></div>
              </div>
              <div
                style={{
                  flex: '1 1 90%',
                  paddingLeft: '10px',
                  color: '#666'
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  {employment.location}
                </div>
                <div style={{ fontSize: '20px' }}>
                  <Text style={{ fontWeight: 'bold' }}>{employment.title}</Text>
                  <Text style={{ marginLeft: '4px', fontWeight: 'lighter' }}>
                    {employment.duration}
                  </Text>
                </div>
                <div>
                  <ul style={{ fontSize: '14px ' }}>
                    {employment.achievements.map((item, index) => (
                      <li key={`b${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </section>
  );
}
