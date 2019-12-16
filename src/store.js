import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./helpers/localStorage";
import throttle from "lodash.throttle";

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);
const persistedState = loadState();
let store = createStore(rootReducer, persistedState, enhancer);
store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
      authentication: store.getState().authentication,
      interviews: store.getState().interviews,
      shortlisted: store.getState().shortlisted,
      decadevs: store.getState().decadevs,
      interviewDetails: store.getState().interviewDetails
    });
  }, 1000)
);

export default store;
