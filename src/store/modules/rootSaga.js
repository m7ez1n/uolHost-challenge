import { all } from 'redux-saga/effects';

import editClient from './home/sagas';

export default function* rootSaga() {
  return yield all([editClient]);
}
