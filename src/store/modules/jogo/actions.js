import * as types from '../types';

// novo jogo
export function novoJogoRequest(payload) {
  return {
    type: types.NOVO_JOGO_REQUEST,
    payload,
  };
}

export function novoJogoSuccess(payload) {
  return {
    type: types.NOVO_JOGO_SUCCESS,
    payload,
  };
}

export function novoJogoFailure(payload) {
  return {
    type: types.NOVO_JOGO_FAILURE,
    payload,
  };
}

// fazer movimento
export function fazerMovimentoRequest(payload) {
  return {
    type: types.FAZER_MOVIMENTO_REQUEST,
    payload,
  };
}

export function fazerMovimentoSuccess(payload) {
  return {
    type: types.FAZER_MOVIMENTO_SUCCESS,
    payload,
  };
}

export function fazerMovimentoFailure(payload) {
  return {
    type: types.FAZER_MOVIMENTO_FAILURE,
    payload,
  };
}

// obter ranking
export function getRankingRequest(payload) {
  return {
    type: types.GET_RANKING_REQUEST,
    payload,
  };
}

export function getRankingSuccess(payload) {
  return {
    type: types.GET_RANKING_SUCCESS,
    payload,
  };
}

export function getRankingFailure(payload) {
  return {
    type: types.GET_RANKING_FAILURE,
    payload,
  };
}
