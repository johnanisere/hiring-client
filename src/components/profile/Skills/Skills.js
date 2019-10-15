import React, { useState } from 'react';
import { Box } from 'grommet';
import SkillsDetails from './SkillsDetails';
import AddNewSkill from './AddNewSkill';

export default function Skills(props) {
  const { skills } = props;
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
        <div>Skills</div>
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
          <AddNewSkill />
        </div>
        {skills.map((skill, index) => (
          <SkillsDetails skill={skill} index={index} hidden={hidden} />
        ))}
      </Box>
    </section>
  );
}
