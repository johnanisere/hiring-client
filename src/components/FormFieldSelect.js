import React, { useState } from 'react';

import { grommet, Box, FormField, Select, Grommet } from 'grommet';

const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

export default function FormFieldSelect(props) {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState(allOptions);

  return (
    <Grommet theme={grommet}>
      <Box>
        <FormField label="Add Decadev" htmlFor="select">
          <Select
            id="select"
            options={options}
            value={value}
            onChange={({ option }) => this.setState({ value: option })}
          />
        </FormField>
      </Box>
    </Grommet>
  );
}
