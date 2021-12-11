import styled from 'styled-components';

export const MovimentosSection = styled.section`
  grid-area: movimentos;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    width: fit-content;
    height: fit-content;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    background-color: black;
    color: white;
    font-size: 18px;
  }
`;
