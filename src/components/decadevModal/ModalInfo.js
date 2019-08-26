import React, { useState, useEffect } from 'react';
import { getDetails } from '../profile/getDetails';
import { Link } from 'react-router-dom';
import { Heading, Text, Box } from 'grommet';
import { Phone, Chat, Calendar } from 'grommet-icons';

export default function Info(props) {
  const { email, phone, cv, name } = props;
  const [values, setValues] = useState([]);
  console.log('NAME: ', name);

  useEffect(() => {
    const obj = getDetails();
    setValues(obj);
  }, []);

  return (
    <Box
      pad="medium"
      responsive
      direction="column"
      border
      fill
      style={{
        minHeight: '100%'
      }}
    >
      <Box responsive gap="large">
        <Heading level={2}>{name}</Heading>
        <Text style={{ marginTop: '-2rem' }} size="medium" color="brand">
          Software Developer
        </Text>
        <Heading color="#a0a0a0" level={6}>
          RESUME:{' '}
          <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>
            {cv}
          </Link>
        </Heading>
        <Box
          responsive
          style={{ marginTop: '-2rem' }}
          direction
          background={{ color: '#f1f1f1', opacity: 'weak' }}
          align="center"
        >
          <Text
            color="brand"
            size="xsmall"
            style={{
              textAlign: 'center',
              background: '#e3f2fc',
              borderRadius: '5px',
              lineHeight: '30px',
              width: 'auto',
              height: '30px',
              fontWeight: 'bold',
              padding: '8px',
              cursor: 'pointer'
            }}
          >
            {<Chat size="small" style={{ marginRight: '5px' }} />}
            Send Message
          </Text>

          <Text
            color="brand"
            size="xsmall"
            style={{
              marginLeft: '12px',
              textAlign: 'center',
              background: '#e3f2fc',
              borderRadius: '5px',
              lineHeight: '30px',
              width: 'auto',
              height: '30px',
              fontWeight: 'bold',
              padding: '8px',
              cursor: 'pointer'
            }}
          >
            <Phone size="small" style={{ marginRight: '5px' }} />
            {phone}
          </Text>
          <Text
            color="brand"
            size="xsmall"
            gap
            style={{
              marginLeft: '12px',
              textAlign: 'center',
              background: '#e3f2fc',
              borderRadius: '5px',
              lineHeight: '30px',
              width: 'auto',
              height: '30px',
              fontWeight: 'bold',
              padding: '8px',
              cursor: 'pointer'
            }}
          >
            {<Calendar size="small" style={{ marginRight: '5px' }} />}
            Schedule Interview
          </Text>
        </Box>
      </Box>

      <Box pad responsive background={{ color: '#f1f1f1', opacity: 'weak' }}>
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
        <Heading level={6}>Email: {email}</Heading>
        <Heading level={6}>Phone: {phone}</Heading>
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
