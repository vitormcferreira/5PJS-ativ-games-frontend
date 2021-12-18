import styled from 'styled-components';

export const Cartas = styled.section`
  grid-area: jogo-da-memoria;
  height: 100%;
  background-color: #3a3a3a;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;

  overflow-y: auto;

  /* responsividade das cartas */
  @media (max-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 10px;
    gap: 10px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const Carta = styled.div`
  background-color: ${({ cor = '#ccc' }) => cor};
  position: relative;
  border-radius: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 400ms ease-in-out;
  transform-style: preserve-3d;

  img {
    height: 100%;
    width: 100%;
    max-height: 100px;
    max-width: 100px;

    display: inline-block;
    vertical-align: middle;
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:active {
    transform: scale(0.97);
  }

  /* virar carta */
  &.flip {
    transform: rotateY(180deg);

    img {
      transform: rotateY(180deg);
    }
  }
`;
