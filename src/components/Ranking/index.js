import React from 'react';
import axios from '../../services/axios';

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
    <table>
      <caption>Ranking</caption>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Erros</th>
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
    </table>
  );
}
