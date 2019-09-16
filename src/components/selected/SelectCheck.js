import React, { useState } from 'react';
import { CheckBox } from 'grommet';

export default function SelectCheck(props) {
  const [checked, setChecked] = useState(!!props.checked);
  const onChange = event => setChecked(event.target.checked);

  return <CheckBox {...props} checked={checked} onChange={onChange} />;
}
