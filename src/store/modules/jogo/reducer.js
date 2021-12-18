import * as types from '../types';

const initialState = {
  jogo: {
    jogadas: 0,
    acertos: 0,
    cartas: [],
    carta_anterior: null,
    carta_posterior: null,
  },
  ranking: {
    results: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.NOVO_JOGO_SUCCESS: {
      return {
        ...state,
        jogo: action.payload,
      };
    }

    case types.FAZER_MOVIMENTO_SUCCESS: {
      const newJogo = {
        ...state.jogo,
        ...action.payload,
      };

      if (newJogo.carta_posterior) {
        newJogo.jogadas += 1;

        const cartasIguais =
          newJogo.carta_anterior.valor_carta ===
          newJogo.carta_posterior.valor_carta;

        if (cartasIguais) {
          newJogo.acertos += 1;
          newJogo.cartas = newJogo.cartas.map((el) => {
            if (el.carta === newJogo.carta_anterior.carta) {
              return newJogo.carta_anterior;
            }
            if (el.carta === newJogo.carta_posterior.carta) {
              return newJogo.carta_posterior;
            }
            return el;
          });
        }
      }

      return {
        ...state,
        jogo: newJogo,
      };
    }

    case types.LIMPAR_CARTAS_SELECIONADAS: {
      const newJogo = {
        ...state.jogo,
        carta_anterior: null,
        carta_posterior: null,
      };
      return {
        ...state,
        jogo: newJogo,
      };
    }

    case types.GET_RANKING_SUCCESS: {
      return {
        ...state,
        ranking: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
