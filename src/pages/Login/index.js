import React from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Form, Container } from './styled';
import Header from '../../components/Header';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.loginRequest({ email, password, prevPath }));

    // limpa a senha após tentar login
    setPassword('');
  };

  return (
    <div className="fundo">
      <Header />
      <Container>
        <h1>LOGIN</h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
          <button type="submit">ENTRAR</button>
          <p>Não possui uma conta?</p>
          <a href="/register">Clique aqui para criar!</a>
        </Form>
      </Container>
    </div>
  );
}
