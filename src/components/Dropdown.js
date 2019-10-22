import React, { useState } from 'react';
import { Grommet, Select } from 'grommet';
import { grommet } from 'grommet/themes';
import PropTypes from 'prop-types';
import { deepMerge } from 'grommet/utils';
import Finalize from './selected/Finalize';
const theme = deepMerge(grommet, {
  global: {
    control: {
      border: {
        radius: '2px'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '12px'
    }
  },
  text: {
    medium: '13px'
  },
  textInput: {
    extend: 'padding: 0 12px;'
  },
  select: {
    control: {
      extend: 'padding: 3px 6px;',
      open: {
        background: '#ece0fa',
        border: '1px solid #7D4CDB'
      }
    }
  }
});

function Dropdown(props) {
  const [values, setValues] = useState({
    options: ['All', 'Male', 'Female'],
    value: ''
  });

  const { options, value } = values;

  const handleChange = ({ option }) => {
    setValues({ ...values, value: option });
    props.handleChange(option);
  };

  return (
    <Grommet theme={theme || grommet}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 20px'
        }}
      >
        <Finalize />
        <Select
          id="select"
          name="select"
          placeholder="Select Gender"
          value={value}
          options={options}
          onChange={handleChange}
        />
      </div>
    </Grommet>
  );
}

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired
};
export default Dropdown;
