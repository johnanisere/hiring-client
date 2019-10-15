import React from 'react';
import { Box, Text } from 'grommet';

export default function Projects(props) {
  const { projects } = props;

  return (
    <section
      style={{
        width: '60%',
        margin: 'auto',
        marginBottom: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px'
        }}
      >
        <div>Projects</div>
        <div style={{ fontSize: '15px', cursor: 'pointer' }}>Edit</div>
      </div>
      <Box style={{ border: '0.5px solid #d9dadc' }}>
        {projects.map((project, index) => (
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
                  {project.title}
                </div>
                <div style={{ fontSize: '20px' }}>
                  <Text style={{ fontWeight: 'lighter' }}>
                    {project.languages}
                  </Text>
                </div>
                <div style={{ fontSize: '14px ' }}>{project.link}</div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </section>
  );
}
