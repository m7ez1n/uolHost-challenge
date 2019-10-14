import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Container, Panel } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        <FiUser size={35} color="#1c1c1c" />
        Painel de clientes
      </h1>
      <hr />

      <Panel>
        <h4>Listagem de usuários</h4>
        <button type="button">Novo cliente</button>
      </Panel>
    </Container>
  );
}
