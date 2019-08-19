import React, { useState } from 'react';
// import request from '../../request';

import DateTimeDropButton from './DateTime';
import FormFieldSelect from './FormFieldSelect';
import { Box, Button, Grommet, Form, FormField, TextArea, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import FormLayout from './FormLayout';

export default function ScheduleInterview() {
  const [values, setValues] = useState({
    title: '',
    location: '',
    description: '',
    date: undefined,
    time: ''
  });
  const { title, location, description, date, time } = values;

  const setDateAndTime = data => {
    setValues({ ...values, ...data });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <Grommet full theme={grommet}>
      <FormLayout>
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Box margin="small" pad="small">
              <Text
                width="auto"
                size="large"
                margin="small"
                style={{
                  fontWeight: 'bold',
                  fontSize: '25px'
                }}
              >
                Schedule Interview
              </Text>
            </Box>
            <Form onReset={event => console.log(event)} onSubmit={handleSubmit}>
              <FormField
                label="Add Title"
                name="title"
                value={title}
                onChange={handleChange}
                required
                validate={{ regexp: /^[a-z]/i }}
              />
              <FormField
                label="Add Location"
                name="location"
                value={location}
                onChange={handleChange}
                required
              />
              <FormFieldSelect />
              <FormField
                label="Add Description"
                name="description"
                value={description}
                onChange={handleChange}
                component={TextArea}
              />
              <FormField>
                <DateTimeDropButton
                  setDateAndTime={setDateAndTime}
                  date={date}
                  time={time}
                />
              </FormField>
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
                  label="Save Interview"
                  type="submit"
                  style={{ width: '100%', marginTop: 20 }}
                />
              </Box>
            </Form>
          </Box>
        </Box>
      </FormLayout>
    </Grommet>
  );
}
