import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  // executado quando o componente é renderizado
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('alunos');
      // eslint-disable-next-line no-console
      console.log(response.data);
    }
    getData();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>oi</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button onClick={handleClick} type="submit">
        Enviar
      </button>
    </Container>
  );
}
