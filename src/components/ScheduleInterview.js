import React from 'react';
import request from '../../request';

// import { DateTime } from 'grommet/components/Form/';
import { Box, Button, Grommet, Form, FormField, TextArea } from 'grommet';
import { grommet } from 'grommet/themes';

export default function ScheduleInterview() {
  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.log(event)}
            onSubmit={({ value }) => console.log('Submit', value)}
          >
            <FormField
              label="Add Title"
              name="name"
              required
              validate={{ regexp: /^[a-z]/i }}
            />
            <FormField
              label="Add Location"
              name="email"
              type="email"
              required
            />
            <FormField
              label="Add Guests"
              name="employeeId"
              required
              validate={{ regexp: /^[0-9]{4,6}$/, message: '4-6 digits' }}
            />
            <FormField
              label="Add Description"
              name="comments"
              component={TextArea}
            />
            {/* <FormField>
              <Date id="id" name="name" format="M/D/YYYY" onChange="" />
            </FormField> */}
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="submit" label="Save Interview" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
