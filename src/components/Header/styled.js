import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  grid-area: header;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 24px;

  a {
    color: ${colors.primarylightColor};
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 20px;
    font-size: 18px;
  }
`;
