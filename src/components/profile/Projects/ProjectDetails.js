import React, { useState } from 'react';
import { Text, ResponsiveContext } from 'grommet';
import { Folder } from 'grommet-icons';

import ProjectEdit from './ProjectEdit';

function ProjectDetails(props) {
  const [editing, setEditing] = useState(false);
  const { index, project, hidden, decadev } = props;

  function handleEdit() {
    setEditing(true);
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          {editing && !hidden ? (
            <ProjectEdit
              setEditing={setEditing}
              project={project}
              decadev={decadev}
            />
          ) : (
            <>
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
                        <Folder
                          size="large"
                          color="#d0d2d3"
                          style={{
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      flex: '1 1 90%',
                      paddingLeft: '10px',
                      color: '#666'
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      {project.title}
                    </div>
                    <div style={{ fontSize: '20px' }}>
                      <Text style={{ fontWeight: 'lighter' }}>
                        {project.languages}
                      </Text>
                    </div>
                    <a href={project.link} style={{}}>
                      <div style={{ fontSize: '14px ' }}>Project Link</div>
                    </a>
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
                </div>
              </div>
            </>
          )}
        </>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default React.memo(ProjectDetails);
