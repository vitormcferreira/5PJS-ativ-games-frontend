import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cartas, Carta } from './styled';
import * as actions from '../../store/modules/jogo/actions';

export default function JogoDaMemoria() {
  const dispatch = useDispatch();
  const jogo = useSelector((state) => state.jogo.jogo);

  let movimentos = [null, null];

  const handleSelecionarCarta = (target) => {
    const carta = target.getAttribute('value');
    const disabled = target.getAttribute('disabled') !== null;

    if (disabled) {
      return;
    }

    const mov = [...movimentos];
    if (movimentos[0] === null) {
      mov[0] = carta;
    } else if (movimentos[1] === null && movimentos[0] !== carta) {
      mov[1] = carta;
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
      {jogo.parsed_cartas.map((carta) => (
        <Carta
          key={carta[0]}
          className="card"
          value={carta[0]}
          disabled={carta[2]}
          onClick={(e) => handleSelecionarCarta(e.target)}
        >
          {carta[0]} {carta[1]}
        </Carta>
      ))}
    </Cartas>
  );
}
