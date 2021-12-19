import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.section`
  max-width: 480px;
  overflow-x: auto;
  background-color: ${colors.primarylightColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
