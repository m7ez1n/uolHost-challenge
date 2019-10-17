import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { addNewClientSuccess } from './actions';

function* addNewClient({ cpf, email, phone }) {
  const emailExists = yield select(state =>
    state.client.find(e => e.email === email)
  );

  const cpfExists = yield select(state =>
    state.client.find(e => e.cpf === cpf)
  );

  const phoneExists = yield select(state =>
    state.client.find(e => e.phone === phone)
  );

  if (emailExists) {
    toast.error('Esse email já existe');
  } else if (cpfExists) {
    toast.error('Esse cpf já existe');
  } else if (phoneExists) {
    toast.error('Esse telefone já existe');
  } else {
    const response = yield call(api.get, 'data');

    const data = {
      ...response.data,
    };

    yield put(addNewClientSuccess(data));

    history.push('/');
  }
}

export default all([takeLatest('@client/NEW_CLIENT_REQUEST', addNewClient)]);
