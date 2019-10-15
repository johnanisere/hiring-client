import React, { useState } from 'react';
import { Text } from 'grommet';

import SkillsEdit from './SkillsEdit';

function SkillsDetails(props) {
  const [editing, setEditing] = useState(false);
  const { skill, index, hidden } = props;
  function handleEdit() {
    setEditing(true);
  }
  return (
    <div key={`a${index}`} style={{ padding: '20px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 10%', marginRight: '40px' }}>
          <div
            style={{
              height: 'auto',
              width: '100%',
              backgroundColor: 'black'
            }}
          ></div>
        </div>
        {editing && !hidden ? (
          <SkillsEdit setEditing={setEditing} />
        ) : (
          <>
            <div
              style={{
                flex: '1 1 90%',
                paddingLeft: '10px',
                color: '#666'
              }}
            >
              <div style={{ fontSize: '20px' }}>
                <Text style={{ fontWeight: 'bold' }}>{skill.type}</Text>
              </div>
              <div>
                <div style={{ fontSize: '14px ' }}>{skill.description}</div>
              </div>
            </div>
            <div
              style={{
                fontSize: '11px',
                padding: '6px 8px',
                backgroundColor: '#dde2e7',
                height: '10%',
                borderRadius: '3px',
                cursor: 'pointer',
                visibility: hidden ? 'hidden' : 'visible'
              }}
            >
              <span onClick={handleEdit}>Edit</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(SkillsDetails);
