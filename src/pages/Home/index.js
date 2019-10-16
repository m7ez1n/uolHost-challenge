import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import api from '../../services/api';
import * as ClientActions from '../../store/modules/client/actions';

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
        <Link to="/clients">
          <button type="button">Novo cliente</button>
        </Link>
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
