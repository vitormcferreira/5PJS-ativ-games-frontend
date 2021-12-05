import React from 'react';
import { useSelector } from 'react-redux';
import { MovimentosSection } from './styled';

export default function Movimentos() {
  const jogadas = useSelector((state) => state.jogo.jogo.jogadas);
  return <MovimentosSection>Movimentos {jogadas}</MovimentosSection>;
}
