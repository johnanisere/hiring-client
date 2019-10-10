import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Box, Button, Text } from 'grommet';
import BeatLoader from 'react-spinners/BeatLoader';
import FormError from '../../formError';
import registerHirerBoundActionCreator from '../hirerSignup.action';
import request from '../../../request';

function Confirm(props) {
  const { error, loading } = useSelector(({ hirer }) => hirer);
  const {
    values: {
      email,
      nameOfOrg,
      name,
      phone,
      companyURL,
      designation,
      numberOfTalentsRequired,
      deadline,
      password
    }
  } = props;
  const continueToNext = e => {
    e.preventDefault();
    props.hirer(
      {
        email,
        nameOfOrg,
        name,
        phone,
        companyURL,
        designation,
        numberOfTalentsRequired,
        deadline,
        password
      },
      request
    );
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <Box fill align="center" justify="center" width="100%">
      <FormError error={error} />
      <Box>
        <Text>Your Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Organisation: {nameOfOrg}</Text>
        <Text>Website: {companyURL}</Text>
        <Text>Designation: {designation}</Text>
        <Text>Number of Talents Required: {numberOfTalentsRequired}</Text>
        <Text>How soon do you wish to onboard?: {deadline}</Text>
      </Box>
      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button
          primary
          color="dark-1"
          label={'Back'}
          style={{ width: 'auto', margin: '20px' }}
          onClick={back}
        />
        <Button
          primary
          color="dark-1"
          label={
            loading ? (
              <BeatLoader size={5} color="#fff" />
            ) : (
              'Confirm & Continue'
            )
          }
          style={{ width: '100%', margin: '20px 5px' }}
          onClick={continueToNext}
        />
      </Box>
    </Box>
  );
}
const mapDispatchToProps = {
  hirer: registerHirerBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(Confirm));
