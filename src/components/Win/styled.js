import styled from 'styled-components';

export const WinContainer = styled.section`
  position: fixed;
  text-align: center;
  color: rgb(0, 71, 165);
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  display: 'block';

  h1 {
    font-size: 4em;
    font-weight: normal;
  }

  h2 {
    font-size: 2em;
    margin: 1em;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    color: rgb(50, 50, 50);
    padding: 10px 20px;
    border-radius: 50px;
    border: 3px solid rgb(50, 50, 50);
    position: absolute;
    bottom: calc(20vh + 50px);
    left: calc(50% - 72px);
    width: fit-content;
    cursor: pointer;

    &:hover {
      background-color: rgb(50, 50, 50);
      color: lightblue;
    }
  }

  p {
    color: rgb(50, 50, 50);
  }

  div {
    background: lightblue;
    padding: 50px;
    width: 80%;
    height: 60vh;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
  }
`;
