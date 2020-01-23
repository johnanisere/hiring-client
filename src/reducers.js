import { combineReducers } from 'redux';
import user from './components/authentication/user.reducer';
import authentication from './components/authentication/authentication.reducer';
import decadevs from './components/dashboard/decadevs.reducer';
import interviewDetails from './components/dashboard/scheduleInterview.reducer';

import shortlisted from './components/selected/selected.reducer';
import hirer from './components/activateHirer/activateHirer.reducer';
import interviews from './components/interviewActivities/interviews.reducer';
import error from './components/authentication/error.reducer';
import allowNext from './components/AllowNext/allownext.reducer';
import hired from './components/hired/hired.reducer';
import setPod from './components/SetPod/setPod.reducer';

import getHirer from './components/dashboard/hirer.reducer';

export default combineReducers({
  user,
  error,
  decadevs,
  shortlisted,
  authentication,
  interviewDetails,
  hirer,
  interviews,
  allowNext,
  hired,
  pod: setPod,
  getHirer
});
