import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import JogoDaMemoria from '../../components/JogoDaMemoria';
import Ranking from '../../components/Ranking';

export default function Index() {
  return (
    <Container>
      <Ranking />
      <JogoDaMemoria />
    </Container>
  );
}
