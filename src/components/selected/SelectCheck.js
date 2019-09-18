import React, { useState } from 'react';
import { CheckBox } from 'grommet';
import { connect } from 'react-redux';
import selectedBoundActionCreator from './selected.action';

function SelectCheck(props) {
  const [checked, setChecked] = useState(!!props.checked);
  console.log('CHECKED1', checked);
  const onChange = event => {
    setChecked(event.target.checked);
    console.log('CHECKED2', checked);
  };
  if (checked) {
    props.addToSelected(props.decadevObject);
  }

  console.log('CHECKED3', checked);

  return (
    <CheckBox
      {...props}
      checked={checked}
      onChange={event => onChange(event)}
    />
  );
}

const mapDispatchToProps = {
  addToSelected: selectedBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(SelectCheck);
