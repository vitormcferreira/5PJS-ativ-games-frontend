import React from 'react';
import { FaCircle } from 'react-icons/fa';
import axios from '../../services/axios';
import { TabelaRanking } from './styled';

export default function Ranking() {
  const [ranking, setRanking] = React.useState({
    count: 0,
    next: '',
    previous: '',
    results: [],
  });

  React.useEffect(() => {
    const obterRankings = async () => {
      const response = await axios.get('jogo_da_memoria/ranking/');
      setRanking(response.data);
    };
    obterRankings();
  }, []);

  return (
    <TabelaRanking>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>
            <FaCircle size={40} />
          </th>
        </tr>
      </thead>
      <tbody>
        {ranking.results.map((rankUsuario) => (
          <tr key={rankUsuario.id}>
            <td>{rankUsuario.user_data.username}</td>
            <td>{rankUsuario.erros}</td>
          </tr>
        ))}
      </tbody>
    </TabelaRanking>
  );
}
