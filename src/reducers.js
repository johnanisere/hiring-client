import { combineReducers } from "redux";
import user from "./components/authentication/user.reducer";
import authentication from "./components/authentication/authentication.reducer";

export default combineReducers({ authentication, user });
