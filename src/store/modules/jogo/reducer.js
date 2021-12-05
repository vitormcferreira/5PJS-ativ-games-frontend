/* eslint-disable camelcase */
import * as types from '../types';

const initialState = {
  jogo: {
    jogadas: 0,
    acertos: 0,
    parsed_cartas: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.NOVO_JOGO_REQUEST: {
      return { ...state };
    }

    case types.NOVO_JOGO_SUCCESS: {
      return {
        ...state,
        jogo: action.payload.jogo,
      };
    }

    case types.NOVO_JOGO_FAILURE: {
      return { ...state };
    }

    case types.FAZER_MOVIMENTO_REQUEST: {
      return { ...state };
    }

    case types.FAZER_MOVIMENTO_SUCCESS: {
      return { ...action.payload };
    }

    case types.FAZER_MOVIMENTO_FAILURE: {
      return { ...action.payload };
    }

    default: {
      return state;
    }
  }
}
