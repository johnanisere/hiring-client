import React, { useState } from 'react';
import { Heading } from 'grommet/components/Heading';

import ProjectForm from './ProjectForm';

export default function ProjectEdit(props) {
  const { setEditing, project } = props;
  const { title, languages, link } = project;
  const [values, setValues] = useState({
    title: title || '',
    languages: languages || '',
    link: link || ''
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
        <Heading level={5}>ACHIEVEMENTS</Heading>

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
      <ProjectForm values={values} handleChange={handleChange} />
    </div>
  );
}
