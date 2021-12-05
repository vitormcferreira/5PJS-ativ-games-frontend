import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    'header     header'
    'movimentos jogo-da-memoria'
    'ranking    jogo-da-memoria'
    'botoes     jogo-da-memoria';

  grid-template-rows: 6vh 10vh 64vh 20vh;
  grid-template-columns: 1fr 4fr;
`;

export const Botoes = styled.div`
  grid-area: botoes;
`;
