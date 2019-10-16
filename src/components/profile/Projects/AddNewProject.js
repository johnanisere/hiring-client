import React, { useState } from 'react';
import { Add } from 'grommet-icons/icons/Add';
import { Anchor } from 'grommet/components/Anchor';
import { Heading } from 'grommet/components/Heading';

import ProjectForm from './ProjectForm';

function AddNewProject(props) {
  const [adding, setAdding] = useState(false);
  const [values, setValues] = useState({
    title: '',
    languages: '',
    link: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function addNewField() {
    setAdding(true);
  }

  function handleCancel() {
    setAdding(false);
  }
  function handleSave() {
    setAdding(false);
  }

  return (
    <>
      {adding ? (
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
            <Heading level={5}>PROJECTS</Heading>

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
      ) : (
        <Anchor
          icon={<Add color="plain" />}
          label="Add"
          onClick={addNewField}
          style={{ color: 'black' }}
        />
      )}
    </>
  );
}

export default React.memo(AddNewProject);
