import { combineReducers } from 'redux';

import newClient from './formClient/reducer';

const reducers = combineReducers({
  newClient,
});

export default reducers;
