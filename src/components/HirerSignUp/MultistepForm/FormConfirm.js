import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Box,  Text } from 'grommet';
import BeatLoader from 'react-spinners/BeatLoader';
import FormError from '../../formError';
import registerHirerBoundActionCreator from '../hirerSignup.action';
import request from '../../../request';
import Formlayout from '../../FormLayout';
import SignupButton from '../SignupButton'

function Confirm(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);

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
      password,
      industry, 
    }, interestLanguage
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
        password,
        industry,interestLanguage
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
    <Formlayout>
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
          <SignupButton
            label='Back'
            onClick={back}
          />
          <SignupButton
           
            label={
              loading ? (
                <BeatLoader size={5} color="#fff" />
              ) : (
                'Confirm & Continue'
              )
            }
            
            onClick={loading ? null : continueToNext}
          />
        </Box>
      </Box>
    </Formlayout>
  );
}
const mapDispatchToProps = {
  hirer: registerHirerBoundActionCreator
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(Confirm));
