import React from 'react';
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
        <th>Ranking</th>
        <th>
          <span>{ranking.count}</span>
        </th>
      </thead>
      <tbody>
        {ranking.results.map((rankUsuario) => (
          <tr key={rankUsuario.id}>
            <td>{rankUsuario.user_data.username}</td>
            <td>{rankUsuario.erros}</td>
          </tr>
        ))}
        {/* div para preencher o espaço */}
        <div className="preencher-espaco" />
      </tbody>
    </TabelaRanking>
  );
}
