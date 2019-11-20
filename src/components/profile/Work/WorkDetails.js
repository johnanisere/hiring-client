import React, { useState } from 'react';
import { Text, ResponsiveContext } from 'grommet';
import { Briefcase } from 'grommet-icons/icons/Briefcase';
import WorkEdit from './WorkEdit';

function WorkDetails(props) {
  const [editing, setEditing] = useState(false);
  const { index, hidden, employment, employments } = props;
  const { location, title, duration, achievements } = employment;

  function handleEdit() {
    setEditing(true);
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <div
            key={`a${index}`}
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              {size === 'small' ? (
                hidden
              ) : (
                <div style={{ flex: '1 1 10%', marginRight: '40px' }}>
                  <div
                    style={{
                      height: 'auto',
                      width: '100%',
                      padding: '5px'
                    }}
                  >
                    <Briefcase
                      color="#d0d2d3"
                      size="large"
                      style={{
                        margin: '0 auto'
                      }}
                    />
                  </div>
                </div>
              )}

              {editing && !hidden ? (
                <WorkEdit
                  setEditing={setEditing}
                  employment={employment}
                  employments={employments}
                  decadev={props.decadev}
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
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      {location}
                    </div>

                    <div style={{ fontSize: '20px' }}>
                      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                      <Text
                        style={{ marginLeft: '4px', fontWeight: 'lighter' }}
                      >
                        {duration}
                      </Text>
                    </div>
                    <div>
                      <ul style={{ fontSize: '14px ' }}>
                        {achievements.map((item, index) => (
                          <li
                            style={{
                              listStyle: 'none'
                            }}
                            key={`b${index}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
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
        </>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default React.memo(WorkDetails);
