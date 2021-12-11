import styled from 'styled-components';

export const Cartas = styled.section`
  grid-area: jogo-da-memoria;
  height: 100%;
  padding: 35px;
  background-color: #3a3a3a;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

export const Carta = styled.div`
  width: 13vw;
  height: 13vw;
  background-color: ${({ cor = '#ccc' }) => cor};
  position: relative;
  padding: 30px;
  border-radius: 16px;

  img {
    height: 100%;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
`;
