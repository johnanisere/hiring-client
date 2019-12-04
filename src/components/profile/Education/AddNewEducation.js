import React, { useState } from 'react';
import { Add } from 'grommet-icons/icons/Add';
import { Anchor } from 'grommet/components/Anchor';
import { Heading } from 'grommet/components/Heading';
import { connect, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import EducationForm from './EducationForm';
import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import request from '../../../request';

function AddNewEducation(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);
  const { decadev } = props;
  const { token, email } = decadev;
  const [adding, setAdding] = useState(false);
  const [values, setValues] = useState({
   qualification: '',
   placeOfEducation: '',
   startDate:'',
   endDate: ""
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
const { startDate, endDate} = values

  const paper = {
    qualification: values.qualification,
    placeOfEducation: values.placeOfEducation,
    duration: `${startDate} - ${endDate}`
  };

  const type = 'new-education';
  async function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateDetails(paper, email, request, token, type);
    handleSave();
  }

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
            <Heading level={5}>EDUCATION</Heading>

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
          <EducationForm
            values={values}
            handleChange={handleChange}
            error={error}
          />
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
)(AddNewEducation);
