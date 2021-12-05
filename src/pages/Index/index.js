import React from 'react';

import { useDispatch } from 'react-redux';
import { Container, Botoes } from './styled';
import JogoDaMemoria from '../../components/JogoDaMemoria';
import Movimentos from '../../components/Movimentos';
import Ranking from '../../components/Ranking';
import Header from '../../components/Header';
import * as actions from '../../store/modules/jogo/actions';

export default function Index() {
  const dispatch = useDispatch();

  const handleReiniciar = (e) => {
    e.preventDefault();
    dispatch(actions.novoJogoRequest({ reiniciar: true }));
  };

  React.useEffect(() => {
    dispatch(actions.novoJogoRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Movimentos />
      <Ranking />
      <JogoDaMemoria />
      <Botoes>
        <button type="button">Mudar tema</button>
        <button type="button" onClick={handleReiniciar}>
          Reiniciar
        </button>
      </Botoes>
    </Container>
  );
}
