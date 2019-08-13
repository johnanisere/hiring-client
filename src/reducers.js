import { combineReducers } from 'redux';
import login from './compositions/Authentication/reducer';

export default combineReducers({ login });
