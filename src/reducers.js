import { combineReducers } from "redux";
import user from "./components/Authentication/user.reducer";
import authentication from "./components/Authentication/authentication.reducer";
import mailInvite from "./components/Settings/mail.reducer";

export default combineReducers({ authentication, user, mailInvite });
