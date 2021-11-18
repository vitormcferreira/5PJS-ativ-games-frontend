import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';
import * as validadores from './validadores';

const exibeErros = (errors) => {
  // eslint-disable-next-line no-unused-vars
  Object.entries(errors).forEach(([campo, msgs]) => {
    msgs.forEach((msg) => toast.error(msg));
  });
};

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

// manter o token
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  try {
    const validado = validadores.validaRegister(payload);

    if (validado.errors) {
      exibeErros(validado.errors);
      yield put(actions.registerFailure());
      return;
    }

    const response = yield call(axios.post, '/users', payload);

    yield put(actions.registerSuccess({ ...response.data }));

    toast.success('Usuário criado com sucesso');
    history.push('/login');
  } catch (e) {
    const errors = get(e, 'response.data.errors', {});

    exibeErros(errors);
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
