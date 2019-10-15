import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
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
          <li>
            <strong>882.782.720-00</strong>
            <p>(47)98515-5001</p>
          </li>
          <small>
            <FaCircle size={12} color="#2e8b57" />
            Ativo
          </small>
        </li>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
          <li>
            <strong>882.782.720-00</strong>
            <p>(47)98515-5001</p>
          </li>
          <small>
            <FaCircle size={14} color="#dc143c" />
            Inativo
          </small>
        </li>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
          <li>
            <strong>882.782.720-00</strong>
            <p>(47)98515-5001</p>
          </li>
          <small>
            <FaCircle size={14} color="#ffa500" />
            Aguardando ativação
          </small>
        </li>
        <li>
          <div>
            <strong>John Doe</strong>
            <p>jonhdoe@hotmail.com</p>
          </div>
          <li>
            <strong>882.782.720-00</strong>
            <p>(47)98515-5001</p>
          </li>
          <small>
            <FaCircle size={14} color="#696969" />
            Desativado
          </small>
        </li>
      </ClientList>
    </Container>
  );
}
