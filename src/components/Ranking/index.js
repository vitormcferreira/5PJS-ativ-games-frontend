import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabelaRanking } from './styled';
import * as actions from '../../store/modules/jogo/actions';

export default function Ranking() {
  const ranking = useSelector((state) => state.jogo.ranking);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getRankingRequest());
  }, [dispatch]);

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
