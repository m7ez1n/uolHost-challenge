import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Container, Panel, ClientList } from './styles';

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
        <p>Escolha um cliente para visualizar os detalhes</p>
      </Panel>

      <ClientList>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
        </li>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
        </li>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
        </li>
      </ClientList>
    </Container>
  );
}
