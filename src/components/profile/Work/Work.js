import React, { useState } from 'react';
import { Box } from 'grommet';

import WorkDetails from './WorkDetails';
import AddNewWork from './AddNewWork';

function Work(props) {
  const { employments } = props;
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
        <div>Experience</div>
        <div
          style={{
            fontSize: '15px',
            cursor: 'pointer'
          }}
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
          <AddNewWork />
        </div>

        {employments.map((employment, index) => (
          <WorkDetails
            key={`work${index}`}
            index={index}
            location={employment.location}
            title={employment.title}
            duration={employment.duration}
            achievements={employment.achievements}
            hidden={hidden}
          />
        ))}
      </Box>
    </section>
  );
}
export default React.memo(Work);
