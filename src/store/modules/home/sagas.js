import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { updateClientSuccess } from './actions';

function* updateClient({ id, name, email, phone, status }) {
  const client = yield call(api.get, `data/${id}`);

  yield put(updateClientSuccess(client.id, name, email, phone, status));
}

export default all([takeLatest('@client/UPDATE_CLIENT_REQUEST', updateClient)]);
