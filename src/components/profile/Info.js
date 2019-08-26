import React, { useState, useEffect } from 'react';
import { getDetails } from './getDetails';
import { Link } from 'react-router-dom';
import { Heading, Text, Box } from 'grommet';

export default function Info() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const obj = getDetails();
    setValues(obj);
  }, []);

  return (
    <Box responsive direction="column" fill>
      <Box responsive gap="medium" style={{ marginTop: '-1rem' }}>
        <Heading level={2}>{values.name}</Heading>
        <Text style={{ marginTop: '-2rem' }} size="medium" color="brand">
          Software Developer
        </Text>
        <Heading color="#a0a0a0" level={6}>
          RESUME:{' '}
          <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>
            {values.resume}
          </Link>
        </Heading>
      </Box>

      <Box responsive background={{ color: '#f1f1f1', opacity: 'weak' }}>
        <Heading color="#a0a0a0" level={4}>
          CONTACT INFORMATION
          <hr
            style={{
              border: '0',
              height: '0',
              width: '100',
              borderTop: '2px solid rgba(0, 0, 0, 0.1)',
              borderBottom: '3px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </Heading>
        <Heading level={6}>Email: {values.email}</Heading>
        <Heading level={6}>Phone: {values.phone}</Heading>
        <Heading level={6}>
          GitHub Profile:{' '}
          <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>
            {values.github}
          </Link>
        </Heading>
        <Heading level={6}>Squad: {values.squad}</Heading>
      </Box>
    </Box>
  );
}
