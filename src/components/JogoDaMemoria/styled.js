import styled from 'styled-components';

export const Cartas = styled.section`
  grid-area: jogo-da-memoria;
  background-color: blue;
  display: flex;
  gap: 10px;
`;

export const Carta = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
`;
