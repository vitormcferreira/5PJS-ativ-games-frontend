import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  grid-area: header;
  background-color: ${colors.primaryDarkColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  a {
    color: ${colors.primarylightColor};
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;
