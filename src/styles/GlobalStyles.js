import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  overflow-x: auto;
  background-color: ${colors.primarylightColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
