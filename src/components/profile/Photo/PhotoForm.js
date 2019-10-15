import React, { useState } from 'react';

import { Form } from 'grommet/components/Form';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { TextArea } from 'grommet/components/TextArea';
import { Heading } from 'grommet/components/Heading';
import styled from 'styled-components';

const Styles = styled.ul`
  div.action:hover {
    cursor: pointer;
  }
`;

export default function PhotoForm(props) {
  const { decadevName, setIsEditing } = props;

  function handleCancel() {
    setIsEditing(false);
  }
  function handleSave() {
    setIsEditing(false);
  }

  const [values, setValues] = useState({
    name: '',
    location: '',
    photoURL: '',
    shortBio: '',
    github: '',
    linkedIn: '',
    stackOverflow: '',
    website: ''
  });
  const {
    name,
    location,
    photoURL,
    shortBio,
    github,
    linkedIn,
    stackOverflow,
    website
  } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
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
          {decadevName}
        </Heading>
        <Styles>
          <div style={{ display: 'flex' }} className="action">
            <div onClick={handleCancel} style={{ cursor: 'pointer' }}>
              Cancel
            </div>
            <div
              onClick={handleSave}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              Save
            </div>
          </div>
        </Styles>
      </div>
      <Form style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box style={{ width: '50%' }}>
          <Heading level={5} style={{ margin: '10px' }}>
            Basics
          </Heading>
          <div
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
              value={photoURL}
              onChange={handleChange}
            />
          </div>

          <div
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
          >
            <label
              htmlFor="shortBio"
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
              name="shortBio"
              placeholder="type here"
              value={shortBio}
              onChange={handleChange}
            />
          </div>
        </Box>
        <Box style={{ width: '50%' }}>
          <Heading level={5} style={{ margin: '10px' }}>
            Links
          </Heading>
          <div
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
            style={{ display: 'flex', margin: '10px', alignItems: 'center' }}
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
  );
}
