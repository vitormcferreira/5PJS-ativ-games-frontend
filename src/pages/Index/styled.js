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

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    color: rgb(50, 50, 50);
    padding: 10px 20px;
    border-radius: 50px;
    border: 3px solid rgb(50, 50, 50);
    font-weight: 500;
    font-size: 18px;

    &:hover {
      background-color: rgb(50, 50, 50);
      color: white;
      cursor: pointer;
    }
  }
`;
