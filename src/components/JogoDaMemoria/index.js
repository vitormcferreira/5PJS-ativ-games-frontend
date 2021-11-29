import React from 'react';
import axios from '../../services/axios';
import { Cartas, Carta } from './styled';

export default function JogoDaMemoria() {
  const [jogo, setJogo] = React.useState([]);

  const handleObterCartas = async () => {
    const response = await axios.get('jogo_da_memoria/');
    setJogo(response.data.jogo.parsed_cartas);
  };

  // const fazerMovimento = (e) => {};

  const handleReiniciarJogo = async () => {
    await axios.delete('jogo_da_memoria/');
    await handleObterCartas();
  };

  return (
    <>
      <Cartas>
        {jogo.map((carta) => (
          <Carta key={carta}>{carta}</Carta>
        ))}
      </Cartas>
      <button type="button" onClick={handleObterCartas}>
        iniciar jogo
      </button>
      <button type="button" onClick={handleReiniciarJogo}>
        resetar jogo
      </button>
    </>
  );
}
