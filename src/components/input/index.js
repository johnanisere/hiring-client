import React from 'react';
import { FormField } from 'grommet';
import PropTypes from 'prop-types';
const Input = ({
  validate,
  placeholder,
  value,
  onChange,
  name,
  type,
  color
}) => (
  <FormField
    name={name}
    required
    validate={validate}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    color={color}
    style={{
      marginBottom: '15px',
      borderRadius: '20px'
    }}
  />
);
Input.propTypes = {
  color: PropTypes.string,
  validate: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired
};
export default Input;
