import React, { useState, useEffect } from 'react';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { monthDiff, yearDiff } from '../../../helpers/utils';
import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import request from '../../../request';

import WorkForm from './WorkForm';

function WorkEdit(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);
  const { setEditing, employment, decadev } = props;
  const { token, email } = decadev;
  const [values, setValues] = useState({
    title: employment.title || '',
    achievements: employment.achievements.join(' ') || '',
    from: '',
    to: '',
    location: employment.location || ''
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
    id: employment._id,
    achievements: values.achievements.split('.'),
    title: values.title,
    location: values.location,
    duration: `${yearDiff(values.to, values.from)} ${monthDiff(
      values.to,
      values.from
    )}`
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const type = 'employmentInfo';
    props.onUpdateDetails(paper, email, request, token, type);
    handleSave();
  }

  async function handleDelete(e) {
    e.preventDefault();
    const type = 'delete-employment';
    props.onUpdateDetails(paper, email, request, token, type);
    handleSave();
  }

  useEffect(() => {
    return () => {
      setEditing(false);
    };
  }, [setEditing]);

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
      <WorkForm values={values} handleChange={handleChange} error={error} />
    </div>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(WorkEdit);
