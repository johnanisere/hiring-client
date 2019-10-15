import React from 'react';
import { Heading } from 'grommet';

export default function Photo(props) {
  const { data, setIsEditing } = props;

  function handleClick() {
    setIsEditing(true);
  }

  return (
    <>
      <section style={{ background: '#e9eaec', height: '130px' }}></section>
      <section
        style={{
          position: 'relative',
          top: '-51px',
          width: '60%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ flex: '1 1 20%', marginRight: '40px', height: '230px' }}>
          <img
            alt="decadev"
            src={data.profilePhoto}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              border: '20px solid #fff'
            }}
          />
        </div>
        <div style={{ flex: '1 1 80%', paddingLeft: '10px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Heading level={2}>{data.name}</Heading>
            <div
              style={{
                fontSize: '15px',
                paddingRight: '20px',
                cursor: 'pointer'
              }}
              onClick={handleClick}
            >
              Edit
            </div>
          </div>
          <div style={{ fontSize: '15px' }}>{data.bio}</div>
          <div style={{ display: 'flex', fontSize: '15px' }}>
            <div style={{ marginRight: '20px' }}>{data.currentRole}</div>
          </div>
        </div>
      </section>
    </>
  );
}
