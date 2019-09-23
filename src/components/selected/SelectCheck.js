import React from 'react';
import { CheckBox } from 'grommet';
import { connect } from 'react-redux';
import selectedBoundActionCreator from './selected.action';

function SelectCheck(props) {
  const { selected } = props;

  const onChange = event => {
    props.addToSelected(props.decadevObject, !selected);
  };

  return (
    <CheckBox
      {...props}
      checked={selected}
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
