import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);
export default store;
