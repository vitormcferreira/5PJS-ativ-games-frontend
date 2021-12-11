/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">JOGO DA MEMÓRIA</Link>
      <div>
        <Link to="/login">LOGOUT</Link>
        <Link to="/sobre">SOBRE</Link>
      </div>
    </Nav>
  );
}
