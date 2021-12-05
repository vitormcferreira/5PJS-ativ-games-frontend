/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* novoJogoRequest({ payload }) {
  try {
    // se for enviada a opção reiniciar, apaga o jogo
    if (_.get(payload, 'reiniciar')) {
      yield call(axios.delete, 'jogo_da_memoria/');
    }

    const response = yield call(axios.get, 'jogo_da_memoria/');

    yield put(actions.novoJogoSuccess({ ...response.data }));
  } catch (e) {
    yield put(actions.novoJogoFailure());
  }
}

function* fazerMovimentoRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'jogo_da_memoria/', {
      carta1: payload.carta1,
      carta2: payload.carta2,
    });
    yield put(actions.fazerMovimentoSuccess({ ...response.data }));
  } catch (e) {
    yield put(actions.fazerMovimentoFailure({ ...e.response.data }));
  }
}

export default all([
  takeLatest(types.NOVO_JOGO_REQUEST, novoJogoRequest),
  takeLatest(types.FAZER_MOVIMENTO_REQUEST, fazerMovimentoRequest),
]);
