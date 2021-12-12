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
        <tr>
          <th>Ranking</th>
          <th>
            <span>{ranking.count}</span>
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
      {/* tfoot para preencher o espaço */}
      <tfoot className="preencher-espaco" />
    </TabelaRanking>
  );
}
