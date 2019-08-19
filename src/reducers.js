import { combineReducers } from 'redux';
import user from './components/authentication/user.reducer';
import authentication from './components/authentication/authentication.reducer';
import decadevs from './components/dashboard/decadevs-reducers/decadevs.reducer';

export default combineReducers({ authentication, user, decadevs });
