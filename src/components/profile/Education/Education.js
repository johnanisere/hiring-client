import React, { useState } from 'react';
import { Box } from 'grommet';
import EducationDetails from './EducationDetails';
import AddNewEducation from './AddNewEducation';

export default function Education(props) {
  const { decadev } = props;
  const [hidden, setHidden] = useState(true);
  function handleVisibilityOfEdit() {
    setHidden(!hidden);
  }
  return (
    <section
      style={{
        width: '60%',
        margin: 'auto',
        marginBottom: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px'
        }}
      >
        <div>Education</div>
        <div
          style={{ fontSize: '15px', cursor: 'pointer' }}
          onClick={handleVisibilityOfEdit}
        >
          {hidden ? 'Edit' : 'Done'}
        </div>
      </div>
      <Box style={{ border: '0.5px solid #d9dadc' }}>
        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <AddNewEducation decadev={decadev} />
        </div>
        {decadev.education && decadev.education.map((currentEducation, index) => (
          <EducationDetails
            education={currentEducation}
            decadev={decadev}
            index={index}
            hidden={hidden}
            key={`education${index}`}
          />
        ))}
      </Box>
    </section>
  );
}
