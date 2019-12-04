import React, { useState } from 'react';
import { Form, Heading } from 'grommet';

import request from '../../request';
import FormError from '../formError';
import { connect } from 'react-redux';
import mailInviteBoundActionCreator from './mailInvite.action';
import SuccessToaster from '../toasters/SuccessNotification';
import PropTypes from 'prop-types';
import Button from '../button/FormButton';

function InviteForm(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, onSuccess] = useState('');
  const [emails, setEmails] = useState([]);

  const onCloseToaster = () => onSuccess('');

  const handleSubmit = e => {
    e.preventDefault();
    onCloseToaster();
    if (!emails) {
      const error = { message: 'Invalid Request. Please select csv file' };
      setError(error);
      return;
    }

    props.mailInvite(emails, request, setLoading, setError, onSuccess);
  };

  function handleImageChange(e) {
    const { files } = e.target;
    if (window.FileReader) {
      getAsText(files[0]);
    } else {
      alert('FileReader are not supported in this browser.');
    }
  }
  function getAsText(fileToRead) {
    var reader = new FileReader();
    if(fileToRead){
      reader.readAsText(fileToRead);
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }
  }
  function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
  }
  function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    for (var i = 0; i < allTextLines.length; i++) {
      var data = allTextLines[i].split(';');

      var tarr = [];
      for (var j = 0; j < data.length; j++) {
        tarr.push(data[j]);
      }
      lines.push(tarr);
    }
    const finalEmails = lines.flat();
    setEmails(finalEmails);
    return finalEmails;
  }
  function errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError') {
      alert("Canno't read file !");
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      <div
        className="container"
        style={{
          border: '1px solid #f1f1f1',
          padding: '50px',
          borderRadius: '5px',
          boxShadow: '1px 2px 2px #f1f1f1',
          marginTop: '30px'
        }}
      >
        {success && (
          <SuccessToaster message={success} onClose={onCloseToaster} />
        )}
        <Form onSubmit={handleSubmit}>
          <FormError error={error} />
          <Heading level={2} align="center" style={{ textAlign: 'center' }}>
            Invite Devs
          </Heading>
          <input type="file" onChange={handleImageChange} name="csvFile" />
          {/* <Select
            id="select"
            name="select"
            placeholder="Select Squad"
            value={value}
            options={options}
            onChange={({ option }) => setState({ ...state, value: option })}
          /> */}
          <Button loading={loading} text="Send Invite" type="submit" />
        </Form>
      </div>
    </div>
  );
}

InviteForm.propType = {
  mailInvite: PropTypes.func
};

const mapDispatchToProps = {
  mailInvite: mailInviteBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(InviteForm);
