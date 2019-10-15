import React, { useState } from 'react';
import { Text } from 'grommet';
import WorkEdit from './WorkEdit';

function WorkDetails(props) {
  const [editing, setEditing] = useState(false);
  const { index, location, title, duration, achievements, hidden } = props;

  function handleEdit() {
    setEditing(true);
  }

  return (
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
          <div style={{ flex: '1 1 10%', marginRight: '40px' }}>
            <div
              style={{
                height: '115px',
                width: '100%',
                backgroundColor: 'black'
              }}
            ></div>
          </div>

          {editing && !hidden ? (
            <WorkEdit setEditing={setEditing} />
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
                  <Text style={{ marginLeft: '4px', fontWeight: 'lighter' }}>
                    {duration}
                  </Text>
                </div>
                <div>
                  <ul style={{ fontSize: '14px ' }}>
                    {achievements.map((item, index) => (
                      <li style={{ listStyle: 'none' }} key={`b${index}`}>
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
  );
}

export default React.memo(WorkDetails);
