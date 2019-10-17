import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

import { Container, FormClient } from './styles';

export default function NewClient() {
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
            <input id="login-name" />
          </div>
          <div>
            <p>Password:</p>
            <input type="password" id="login-password" />
          </div>
          <div>
            <p>CPF:</p>
            <input id="login-cpf" />
          </div>
        </div>
        <div className="right">
          <div>
            <p>Email:</p>
            <input type="email" id="login-email" />
          </div>
          <div>
            <p>Telefone:</p>
            <input type="tel" id="login-telefone" />
          </div>
          <div>
            <p>Status:</p>
            <input id="login-status" />
          </div>
        </div>
        <div className="voltar">
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
        </div>
        <div className="salvar">
          <button type="button">Salvar</button>
        </div>
      </FormClient>
    </Container>
  );
}
