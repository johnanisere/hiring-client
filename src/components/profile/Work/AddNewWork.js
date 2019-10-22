import React, { useState, useEffect } from 'react';
import { Add } from 'grommet-icons/icons/Add';
import { Anchor } from 'grommet/components/Anchor';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { monthDiff, yearDiff } from '../../../helpers/utils';
import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import request from '../../../request';
import WorkForm from './WorkForm';

function AddNewWork(props) {
  const { error, loading } = useSelector(({ user }) => user);
  const { decadev } = props;
  const { token, email } = decadev;

  const [adding, setAdding] = useState(false);
  const [values, setValues] = useState({
    title: '',
    achievements: '',
    from: '',
    to: '',
    location: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function addNewField() {
    setAdding(true);
  }

  function handleCancel() {
    setAdding(false);
  }
  function handleSave() {
    setAdding(false);
  }

  const paper = {
    achievements: values.achievements.split('.'),
    title: values.title,
    location: values.location,
    duration: `${yearDiff(values.to, values.from)} ${monthDiff(
      values.to,
      values.from
    )}`
  };
  const type = 'new-employment';
  async function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateDetails(paper, email, request, token, type);
    handleSave();
  }

  useEffect(() => {
    return () => {
      setAdding(false);
    };
  }, []);

  return (
    <>
      {adding ? (
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
            </div>
          </div>
          <WorkForm values={values} handleChange={handleChange} error={error} />
        </div>
      ) : (
        <Anchor
          icon={<Add color="plain" />}
          label="Add"
          onClick={addNewField}
          style={{ color: 'black' }}
        />
      )}
    </>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(AddNewWork);
