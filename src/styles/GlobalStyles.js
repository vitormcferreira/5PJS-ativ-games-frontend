import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
  }

  .fundo {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.primaryDarkColor};
  }

  a {
    text-decoration: none;
  }
`;
