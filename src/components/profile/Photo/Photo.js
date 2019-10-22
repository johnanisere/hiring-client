import React from 'react';
import { Heading } from 'grommet';
import { Location } from 'grommet-icons/icons/Location';
import { Github } from 'grommet-icons/icons/Github';
import { Linkedin } from 'grommet-icons/icons/Linkedin';
import { StackOverflow } from 'grommet-icons/icons/StackOverflow';
import { Domain } from 'grommet-icons/icons/Domain';

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
          <div
            style={{
              display: 'flex',
              fontSize: '15px',
              alignItems: 'flex-end'
            }}
          >
            <div style={{ marginRight: '5%' }}>
              <Location size="10px" /> {data.location}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px'
              }}
            >
              {data.github && (
                <a
                  href={data.github}
                  style={{ marginRight: '20px', display: 'block' }}
                >
                  <Github size="15px" style={{ cursor: 'pointer' }} />
                </a>
              )}
              {data.linkedIn && (
                <a
                  href={data.linkedIn}
                  style={{ marginRight: '20px', display: 'block' }}
                >
                  <Linkedin size="15px" style={{ cursor: 'pointer' }} />
                </a>
              )}
              {data.stackOverflow && (
                <a
                  href={data.stackOverflow}
                  style={{ marginRight: '20px', display: 'block' }}
                >
                  <StackOverflow size="15px" style={{ cursor: 'pointer' }} />
                </a>
              )}
              {data.website && (
                <a
                  href={data.website}
                  style={{ marginRight: '20px', display: 'block' }}
                >
                  <Domain size="15px" style={{ cursor: 'pointer' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
