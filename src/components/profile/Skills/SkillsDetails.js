import React, { useState } from 'react';
import { Text, ResponsiveContext } from 'grommet';
import { Brush } from 'grommet-icons';

import SkillsEdit from './SkillsEdit';

function SkillsDetails(props) {
  const [editing, setEditing] = useState(false);
  const { skill, index, hidden, decadev } = props;

  function handleEdit() {
    setEditing(true);
  }
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <div key={`a${index}`} style={{ padding: '20px' }}>
          <div style={{ display: 'flex' }}>
            {size === 'small' ? (
              hidden
            ) : (
              <div style={{ flex: '1 1 10%', marginRight: '40px' }}>
                <div
                  style={{
                    height: 'auto',
                    width: '100%'
                  }}
                >
                  <Brush
                    size="large"
                    color="#d0d2d3"
                    style={{
                      margin: '0 auto'
                    }}
                  />
                </div>
              </div>
            )}
            {editing && !hidden ? (
              <SkillsEdit
                setEditing={setEditing}
                skill={skill}
                decadev={decadev}
              />
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
      )}
    </ResponsiveContext.Consumer>
  );
}

export default React.memo(SkillsDetails);
