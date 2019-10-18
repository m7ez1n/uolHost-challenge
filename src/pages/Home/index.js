import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FiUser } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import api from '../../services/api';
import * as ClientActions from '../../store/modules/home/actions';

import { Container, Panel, ClientList } from './styles';

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const storageClients = localStorage.getItem('clients');

    if (storageClients) {
      setClients(JSON.parse(storageClients));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

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

  const dispatch = useDispatch();

  function updateClient(id, name, email, phone, status) {
    dispatch(ClientActions.updateClientRequest(id, name, email, phone, status));
  }

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
          // eslint-disable-next-line no-underscore-dangle
          <li key={client._id}>
            <strong>{client.name}</strong>
            <small>{client.contact.email}</small>
            <div>
              <strong>{client.cpf}</strong>
              <small>{client.contact.tel}</small>
            </div>
            <p>
              <FaCircle size={12} />
              {` ${client.status}`}
            </p>
            <button
              type="button"
              onClick={() =>
                updateClient(
                  // eslint-disable-next-line no-underscore-dangle
                  client._id,
                  client.name,
                  client.contact.email,
                  client.contact.tel,
                  client.status
                )
              }
            >
              Editar
            </button>
          </li>
        ))}
      </ClientList>
    </Container>
  );
}
