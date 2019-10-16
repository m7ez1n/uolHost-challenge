import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import api from '../../services/api';
import { Container, Panel, ClientList } from './styles';

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('data');

      const data = response.data.map(client => ({
        ...client,
      }));

      setClients(data);
    }

    loadClients();
  }, []);

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
        {clients.map(client => (
          <li key={client.id}>
            <strong>{client.name}</strong>
            <small>{client.contact.email}</small>
            <div>
              <strong>{client.cpf}</strong>
              <small>{client.contact.tel}</small>
            </div>
            <p>
              <FaCircle size={12} color="#daa520" />
              {` ${client.status}`}
            </p>
            <button type="button">Editar</button>
          </li>
        ))}
      </ClientList>
    </Container>
  );
}
