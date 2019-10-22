import React, { useState } from 'react';
import { Box } from 'grommet';

import ProjectDetails from './ProjectDetails';
import AddNewProject from './AddNewProject';

export default function Projects(props) {
  const { data } = props;
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
        <div>Projects</div>
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
          <AddNewProject decadev={data} />
        </div>
        {data.portfolio.map((project, index) => (
          <ProjectDetails
            project={project}
            index={index}
            hidden={hidden}
            decadev={data}
            key={`project${index}`}
          />
        ))}
      </Box>
    </section>
  );
}
