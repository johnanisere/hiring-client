import React, { useState } from 'react';
import { Box, Button, Form, Text, FormField } from 'grommet';
import {API} from '../config';
import axios from 'axios';

const ChangePass = () =>  {

  //checks for errors
  const [error, setError] = useState(false);

  //object to store values
  const userObj = {};

  // collects the data from the fields
  const handleChange = e => {
    userObj[e.target.name] = e.target.value;
  };

  //submit the data to the backend
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(userObj);
    try {
      const data = await axios.put(`${API}/api/v1/users/change-password`, userObj);      
      console.log(data);
    
    } catch (error) {
      setError(true);
      console.log(error.response); 
    }
  };

  // renders the layout
  return (
    <>
      <Box margin="small" pad="small">
        <Text
          width="auto"
          size="large"
          margin="auto"
          style={{
            fontWeight: 'bold',
            fontSize: '25px',
            paddingBottom: '15px'
          }}
        >
          Change Password
        </Text>
        <Text size="small" alignSelf="center">
          Enter email and password
        </Text>
      </Box>
      {error && (
        <small className="error" style={{ color: 'red', textAlign: 'center' }}>
          Make sure email and password are valid!
        </small>
      )}
      <Form onSubmit={handleSubmit}>
        <FormField
          name="email"
          required
          validate={{
            regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Input must be valid email!'
          }}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />
        <FormField
          placeholder="Password"
          name="newPassword"
          type="password"
          required
          onChange={handleChange}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              'Password must contain at least 8 characters, 1 letter, and 1 number'
          }}
          color="dark-1"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />
        <FormField
          placeholder="Confrim Password"
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          validate={{
            regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              'Password must contain at least 8 characters, 1 letter, and 1 number'
          }}
          color="dark-1"
          style={{
            marginBottom: '15px',
            borderRadius: '20px'
          }}
        />
        <Box
          direction="row"
          justify="center"
          align="center"
          margin={{ top: 'medium' }}
        >
          <Button
            primary
            width="large"
            color="dark-1"
            label={'submit'}
            type="submit"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>
      </Form>
    </>
  );
}

export default ChangePass;
                                                      
