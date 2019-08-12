import React from 'react';
import { Box, Text, Form, Button, TextInput, value, setValue } from 'grommet';
import SandboxComponent from './SandboxComponent';
import { Facebook, Instagram, Twitter } from 'grommet-icons';

export default () => (
  <Box responsive background="#fa6f12" height="600px" width="800px" pad="large">
    <Box
      direction="column"
      responsive
      pad="large"
      background="#ffffff"
      height="large"
      elevation="xlarge"
      align="center"
      round="small"
    >
      <Box
        direction="column"
        responsive
        pad="small"
        width="300px"
        height="800em"
        elevation="xlarge"
        align="center"
        background="#ffffff"
        round={{ size: 'small', corner: 'top' }}
        gap="medium"
      >
        <Text style={{ fontWeight: 'bold' }} size="small" color="#fa6f12">
          {' '}
          LOG IN
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          margin="0.15rem"
          size="10px"
          color="#b3b1b1"
        >
          Log in to get in the moment updates on things that interest you.
        </Text>
        <Form style={{ width: '90%', textAlign: 'center' }}>
          <TextInput
            style={{
              boxShadow: '-3px -2px 150px -10px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              border: 'none',
              outline: 'none',
              marginBottom: '1.5rem'
            }}
            focusIndicator
            size="xsmall"
            placeholder="username"
            name="name"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <TextInput
            style={{
              boxShadow: '-3px -2px 150px -10px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              border: 'none',
              outline: 'none',
              marginBottom: '1.5rem'
            }}
            focusIndicator
            size="xsmall"
            placeholder="password"
            name="name"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <Button
            style={{
              width: '100%',
              background: '#fa6f12',
              border: 'none',
              boxShadow: '-3px -2px 150px -8px',
              color: '#fff',
              textTransform: 'uppercase',
              fontSize: '0.5em'
            }}
            type="submit"
            label="Login"
          />
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold' }}
            margin="0.15rem"
            size="10px"
            color="#b3b1b1"
          >
            Don't have an account? Sign Up now.
          </Text>
        </Form>
      </Box>

      <Box
        width="300px"
        align="center"
        background="#fa6f12"
        height="300rem"
        elevation="xlarge"
        gap="medium"
        round={{ size: 'small', corner: 'bottom' }}
      >
        <Text
          style={{
            textAlign: 'center',
            margin: '8px',
            fontSize: '10px',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Sign Up with Social media
          <Box direction color="white" margin="small" gap="medium">
            <Facebook
              style={{
                borderRadius: '50%',
                cursor: 'pointer'
              }}
              color="white"
              elevation="xlarge"
              size="20px"
            />
            <Instagram
              style={{
                borderRadius: '50%',
                cursor: 'pointer'
              }}
              color="white"
              elevation="xlarge"
              size="20px"
            />
            <Twitter
              style={{
                borderRadius: '50%',
                cursor: 'pointer'
              }}
              color="white"
              elevation="xlarge"
              size="20px"
            />
          </Box>
        </Text>
      </Box>
    </Box>
  </Box>
);
