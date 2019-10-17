import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import * as ClientActions from '../../store/modules/formClient/actions';

import { Container, FormClient } from './styles';

export default function NewClient() {
  const [newClient, setNewClient] = useState({
    id: 0,
    name: '',
    cpf: '',
    email: '',
    phone: '',
    status: '',
  });

  const updateField = e => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  function createClient(id, name, cpf, email, phone, status) {
    dispatch(
      ClientActions.addNewClientRequest(id, name, cpf, email, phone, status)
    );
  }

  return (
    <Container>
      <h1>
        <FiUser size={35} color="#1c1c1c" />
        Novo Cliente
      </h1>
      <hr />

      <FormClient>
        <div className="left">
          <div>
            <p>Name:</p>
            <input id="login-name" name="name" onChange={updateField} />
          </div>
          <div>
            <p>Password:</p>
            <input type="password" id="login-password" />
          </div>
          <div>
            <p>CPF:</p>
            <input id="login-cpf" name="cpf" onChange={updateField} />
          </div>
        </div>
        <div className="right">
          <div>
            <p>Email:</p>
            <input
              type="email"
              name="email"
              id="login-email"
              onChange={updateField}
            />
          </div>
          <div>
            <p>Telefone:</p>
            <input
              type="tel"
              name="phone"
              id="login-telefone"
              onChange={updateField}
            />
          </div>
          <div>
            <p>Status:</p>
            <input id="login-status" name="status" onChange={updateField} />
          </div>
        </div>
        <div className="voltar">
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
        </div>
        <div className="salvar">
          <button
            type="button"
            onClick={() => {
              createClient(newClient);
            }}
          >
            Salvar
          </button>
        </div>
      </FormClient>
    </Container>
  );
}
