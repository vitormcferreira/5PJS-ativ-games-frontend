import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Container } from './styled';
import Header from '../../components/Header';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(actions.registerRequest({ nome, sobrenome, email, password }));
  };

  return (
    <div className="fundo">
      <Header />
      <Container>
        <h1>REGISTRAR</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </label>
          <label htmlFor="sobrenome">
            <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Seu sobrenome"
            />
          </label>

          <label htmlFor="email">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
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
