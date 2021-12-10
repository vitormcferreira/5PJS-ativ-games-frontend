/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cartas, Carta } from './styled';
import * as actions from '../../store/modules/jogo/actions';

import imagens from './imagens';

export default function JogoDaMemoria() {
  const dispatch = useDispatch();
  const jogo = useSelector((state) => state.jogo.jogo);

  let movimentos = [null, null];

  const handleSelecionarCarta = (target) => {
    const { valorCarta } = target.dataset;
    const cartaEncontrada = target.dataset.cartaEncontrada === 'true';

    if (cartaEncontrada) {
      return;
    }

    const mov = [...movimentos];
    if (movimentos[0] === null) {
      mov[0] = valorCarta;
    } else if (movimentos[1] === null && movimentos[0] !== valorCarta) {
      mov[1] = valorCarta;
    }
    movimentos = mov;

    // ao selecionar 2 cartas faz o movimento
    if (movimentos[0] && movimentos[1]) {
      dispatch(
        actions.fazerMovimentoRequest({
          carta1: movimentos[0],
          carta2: movimentos[1],
        })
      );
      movimentos = [null, null];
    }
  };

  return (
    <Cartas>
      {/* carta[0] => valor da carta (número único)
          carta[1] => número da carta (identifica um par)
          carta[2] => se ela foi encontrada (bool) */}
      {jogo.parsed_cartas.map((carta) => (
        <Carta key={carta[0]} className="card">
          {carta[1] !== null ? (
            <img alt="" src={imagens[carta[1]].url} />
          ) : (
            <></>
          )}
          <div
            data-valor-carta={carta[0]}
            data-carta-encontrada={carta[2]}
            onClick={(e) => handleSelecionarCarta(e.target)}
            className="overlay"
          />
        </Carta>
      ))}
    </Cartas>
  );
}
