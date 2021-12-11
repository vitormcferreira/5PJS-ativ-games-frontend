import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TabelaRanking = styled.table`
  grid-area: ranking;

  border-collapse: collapse;
  border-top: 2px solid #eee;
  text-align: center;

  thead {
    background-color: ${colors.primarylightColor};
    th {
      padding: 60px 0;
      font-size: 20px;
      span {
        width: fit-content;
        height: fit-content;
        padding: 5px;
        border-radius: 30px;
        background-color: black;
        color: white;
      }
    }
  }

  tbody tr {
    font-size: 18px;
    background-color: #eee;
    &:nth-child(2n) {
      background-color: #bbb;
    }
    height: 40px;
  }
`;
