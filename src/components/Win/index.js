import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { WinContainer } from './styled';

export default function Win({ handleReiniciar }) {
  const jogadas = useSelector((state) => state.jogo.jogo.jogadas);
  const acertos = useSelector((state) => state.jogo.jogo.acertos);

  return (
    <>
      {/* 6 é a quantidade máxima de acertos (6 pares de cartas) */}
      {acertos === 6 ? (
        <WinContainer>
          <div>
            <h1>Parabéns!</h1>
            <p>Você encontrou todos os pares com</p>
            <h2>
              <span>{jogadas - acertos}</span> ERROS
            </h2>
            <button type="button" onClick={handleReiniciar}>
              Jogar denovo
            </button>
          </div>
        </WinContainer>
      ) : (
        ''
      )}
    </>
  );
}

Win.propTypes = {
  handleReiniciar: PropTypes.func.isRequired,
};
