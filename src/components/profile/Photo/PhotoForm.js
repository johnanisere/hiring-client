import React, { useState, useEffect } from 'react';
import { Form } from 'grommet/components/Form';
import { ResponsiveContext } from 'grommet';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { TextArea } from 'grommet/components/TextArea';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import FormError from '../../formError';
import request from '../../../request';

function PhotoForm(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);
  const { decadev, setIsEditing } = props;
  const { token, email } = decadev;

  function handleCancel() {
    setIsEditing(false);
  }
  function handleSave() {
    setIsEditing(false);
  }

  const [values, setValues] = useState({
    name: decadev.name || '',
    location: decadev.location || '',
    profilePhoto: decadev.profilePhoto || '',
    bio: decadev.bio || '',
    github: decadev.github || '',
    linkedIn: decadev.linkedIn || '',
    stackOverflow: decadev.stackOverflow || '',
    website: decadev.website || ''
  });

  const {
    name,
    location,
    profilePhoto,
    bio,
    github,
    linkedIn,
    stackOverflow,
    website
  } = values;
  const type = 'userInfo';
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateDetails(values, email, request, token, type);
    if (!loading) {
      return handleSave();
    }
  }

  useEffect(() => {
    return () => {
      setIsEditing(false);
    };
  }, [setIsEditing]);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <div
            style={{
              width: '60%',
              margin: 'auto',
              alignItems: 'center',
              background: '#f9f9fa',
              height: 'auto',
              padding: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #e7e9eb',
                marginBottom: '20px'
              }}
            >
              <Heading level={2} pad="small" style={{ fontWeight: 'lighter' }}>
                {decadev.name}
              </Heading>

              <div style={{ display: 'flex' }} className="action">
                <div onClick={handleCancel} style={{ cursor: 'pointer' }}>
                  Cancel
                </div>
                <div
                  onClick={e => handleSubmit(e)}
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                >
                  {loading ? <BeatLoader size={5} color="black" /> : 'Save'}
                </div>
              </div>
            </div>
            <Form
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: size === 'small' ? 'column' : ''
              }}
            >
              <FormError error={error} />
              <Box style={{ width: size === 'small' ? '100%' : '50%' }}>
                <Heading level={5} style={{ margin: '10px' }}>
                  Basics
                </Heading>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Name
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="name"
                    placeholder="type here"
                    value={name}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="photoURL"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Photo URL
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="photoURL"
                    placeholder="type here"
                    value={profilePhoto}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="location"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Location
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="location"
                    placeholder="type here"
                    value={location}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="bio"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Short Bio
                  </label>

                  <TextArea
                    style={{ flex: '1 1 100%' }}
                    size="small"
                    name="bio"
                    placeholder="type here"
                    value={bio}
                    onChange={handleChange}
                  />
                </div>
              </Box>
              <Box style={{ width: size === 'small' ? '100%' : '50%' }}>
                <Heading level={5} style={{ margin: '10px' }}>
                  Links
                </Heading>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="github"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    GitHub
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="github"
                    placeholder="type here"
                    value={github}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="linkedIn"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    LinkedIn
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="linkedIn"
                    placeholder="type here"
                    value={linkedIn}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="stackOverflow"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Stack Overflow
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="stackOverflow"
                    placeholder="type here"
                    value={stackOverflow}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    margin: '10px',
                    alignItems: 'center'
                  }}
                >
                  <label
                    htmlFor="website"
                    style={{
                      flex: '1 1 20%',
                      paddingRight: '10px',
                      fontSize: '15px',
                      fontWeight: 'lighter'
                    }}
                  >
                    Website
                  </label>

                  <TextInput
                    style={{ flex: '1 1 80%' }}
                    size="small"
                    name="website"
                    placeholder="type here"
                    value={website}
                    onChange={handleChange}
                  />
                </div>
              </Box>
            </Form>
          </div>
        </>
      )}
    </ResponsiveContext.Consumer>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(PhotoForm);
