import { combineReducers } from 'redux';
import user from './compositions/Authentication/user.reducer';
import authentication from './compositions/Authentication/authentication.reducer';

export default combineReducers({ authentication, user });
