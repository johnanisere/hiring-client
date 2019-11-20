import React, { useState } from 'react';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import request from '../../../request';

import ProjectForm from './ProjectForm';

function ProjectEdit(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);
  const { setEditing, project, decadev } = props;
  const { token, email } = decadev;
  const { title, languages, link } = project;
  const [values, setValues] = useState({
    title: title || '',
    languages: languages || '',
    link: link || ''
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
    id: project._id,
    title: values.title,
    languages: values.languages,
    link: values.link
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const type = 'projectInfo';
    props.onUpdateDetails(paper, email, request, token, type);
    handleSave();
  }

  async function handleDelete(e) {
    e.preventDefault();
    const type = 'delete-project';
    props.onUpdateDetails(paper, email, request, token, type);
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
        <Heading level={5}>ACHIEVEMENTS</Heading>

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
      <ProjectForm values={values} handleChange={handleChange} error={error} />
    </div>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(ProjectEdit);
