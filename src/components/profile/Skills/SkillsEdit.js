import React, { useState } from 'react';
import { Heading } from 'grommet/components/Heading';

import SkillsForm from './SkillsForm';

function SkillsEdit(props) {
  const { setEditing } = props;
  const [values, setValues] = useState({
    type: '',
    description: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleCancel() {
    setEditing(false);
  }
  function handleSave() {
    setEditing(false);
  }

  return (
    <div
      style={{
        flex: '1 1 90%',
        height: 'auto',
        padding: '10px',
        color: '#666',
        background: '#f9f9fa'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Heading level={5}>SKILLS</Heading>

        <div style={{ display: 'flex' }}>
          <div onClick={handleCancel} style={{ cursor: 'pointer' }}>
            Cancel
          </div>
          <div
            onClick={handleSave}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
          >
            Save
          </div>
        </div>
      </div>
      <SkillsForm values={values} handleChange={handleChange} />
    </div>
  );
}

export default React.memo(SkillsEdit);
