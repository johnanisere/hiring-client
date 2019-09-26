import React from "react";
import { FormField } from "grommet";
import PropTypes from "prop-types";
const Input = ({
  validate,
  label,
  placeholder,
  value,
  onChange,
  name,
  type,
  color
}) => (
  <FormField
    label={label}
    name={name}
    required
    validate={validate}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    color={color}
    style={{
      marginBottom: "15px",
      borderRadius: "0px"
    }}
  />
);
Input.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  validate: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string
};
export default Input;
