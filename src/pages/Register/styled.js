import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.section`
  max-width: 480px;
  overflow-x: auto;
  background-color: ${colors.primaryDarkColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: none;
  text-align: center;

  h1 {
    color: white;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background-color: #c4c4c4;
    font-size: 18px;
    margin-bottom: 20px;
    width: 300px;
    height: 40px;
    padding: 0 15px;
    border-radius: 30px;
    border: none;
  }

  button {
    font-size: 18px;
    padding: 5px;
    background-color: white;
    height: 40px;
    width: 200px;
    border: none;
    border-radius: 0 30px 0 30px;
  }
`;
