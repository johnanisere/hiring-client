import React, { useState } from 'react';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import SkillsForm from './SkillsForm';
import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import request from '../../../request';

function SkillsEdit(props) {
  const { error, loading } = useSelector(({ user }) => user);
  const { setEditing, skill, decadev } = props;
  const { token, email } = decadev;
  const { type, description } = skill;
  const [values, setValues] = useState({
    type: type || '',
    description: description || ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleCancel() {
    setEditing(false);
  }
  function handleSave() {
    setEditing(false);
  }

  let paper = {
    id: skill._id,
    type: values.type,
    description: values.description
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const routeName = 'skillInfo';
    props.onUpdateDetails(paper, email, request, token, routeName);
    handleSave();
  }
  async function handleDelete(e) {
    e.preventDefault();
    const routeName = 'delete-skill';
    props.onUpdateDetails(paper, email, request, token, routeName);
    handleSave();
  }

  return (
    <div
      style={{
        flex: '1 1 90%',
        height: 'auto',
        padding: '10px',
        color: '#666',
        background: '#f9f9fa'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Heading level={5}>SKILLS</Heading>

        <div style={{ display: 'flex' }}>
          <div onClick={handleCancel} style={{ cursor: 'pointer' }}>
            Cancel
          </div>
          <div
            onClick={handleSubmit}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
          >
            {loading ? <BeatLoader size={5} color="black" /> : 'Save'}
          </div>
          <div
            onClick={handleDelete}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
          >
            {loading ? <BeatLoader size={5} color="black" /> : 'Delete'}
          </div>
        </div>
      </div>
      <SkillsForm values={values} handleChange={handleChange} error={error} />
    </div>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(SkillsEdit);
