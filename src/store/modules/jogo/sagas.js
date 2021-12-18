import { call, put, all, delay, select, takeLeading } from 'redux-saga/effects';
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
    const { carta } = payload;
    const response = yield call(axios.post, 'jogo_da_memoria/', { carta });

    const isPrimeiraCarta = !(yield select(
      (state) => state.jogo.jogo.carta_anterior
    ));

    if (isPrimeiraCarta) {
      yield put(
        actions.fazerMovimentoSuccess({
          carta_anterior: { carta, ...response.data },
        })
      );
      return;
    }
    yield put(
      actions.fazerMovimentoSuccess({
        carta_posterior: { carta, ...response.data },
      })
    );

    // jogo encerrado
    if (response.status === 250) {
      yield put(actions.getRankingRequest());
    } else if (response.status !== 240) {
      // carta correta
      yield delay(2000);
    }
    yield put(actions.limparCartasSelecionadas());
  } catch (e) {
    yield put(actions.fazerMovimentoFailure({ ...e.response.data }));
  }
}

function* getRankingRequest() {
  try {
    const response = yield call(axios.get, 'jogo_da_memoria/ranking/');
    yield put(actions.getRankingSuccess({ ...response.data }));
  } catch (e) {
    yield put(actions.getRankingFailure({ ...e.response.data }));
  }
}

export default all([
  takeLeading(types.NOVO_JOGO_REQUEST, novoJogoRequest),
  takeLeading(types.FAZER_MOVIMENTO_REQUEST, fazerMovimentoRequest),
  takeLeading(types.GET_RANKING_REQUEST, getRankingRequest),
]);
