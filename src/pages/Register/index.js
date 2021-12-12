import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Container } from './styled';
import Header from '../../components/Header';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(actions.registerRequest({ username, password }));
  };

  return (
    <div className="fundo">
      <Header />
      <Container>
        <h1>REGISTRAR</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Seu username"
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
            />
          </label>

          <button type="submit">CRIAR CONTA</button>
        </Form>
      </Container>
    </div>
  );
}
