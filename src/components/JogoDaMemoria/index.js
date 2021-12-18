/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Cartas, Carta } from './styled';
import * as actions from '../../store/modules/jogo/actions';

import imagens, { interrogationMark } from './img';

export default function JogoDaMemoria() {
  const dispatch = useDispatch();
  const jogo = useSelector((state) => state.jogo.jogo);

  const handleSelecionarCarta = (target) => {
    const { carta } = target.dataset;

    const cartaJaEncontrada =
      jogo.cartas.filter(
        // se as cartas forem iguais e obj.valor_carta tiver um valor positivo
        (obj) => obj.carta === carta && obj.valor_carta !== null
      ).length > 0;

    const cartaAnterior = _.get(jogo.carta_anterior, 'carta');

    // se a carta ja foi encontrada ou a carta for diferente da anterior
    if (cartaJaEncontrada || carta === cartaAnterior) {
      return;
    }

    dispatch(actions.fazerMovimentoRequest({ carta }));
  };

  return (
    <Cartas>
      {jogo.cartas.map((obj) => {
        let carta = obj;
        if (_.get(jogo.carta_anterior, 'carta') === obj.carta) {
          carta = jogo.carta_anterior;
        } else if (_.get(jogo.carta_posterior, 'carta') === obj.carta) {
          carta = jogo.carta_posterior;
        }

        if (carta.valor_carta !== null) {
          return (
            <Carta
              key={carta.carta}
              cor={imagens[carta.valor_carta].cor}
              className="flip"
            >
              <img alt="" src={imagens[carta.valor_carta].url} />
              <div
                data-carta={carta.carta}
                onClick={(e) => handleSelecionarCarta(e.target)}
                className="overlay"
              />
            </Carta>
          );
        }
        return (
          <Carta key={carta.carta}>
            <div
              data-carta={carta.carta}
              onClick={(e) => handleSelecionarCarta(e.target)}
              className="overlay"
            />
            <img alt="" src={interrogationMark} />
          </Carta>
        );
      })}
    </Cartas>
  );
}
