import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  background: #f8f8ff;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 30px;
    display: flex;
    font-weight: lighter;
    color: #1c1c1c;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 20px;
    }
  }

  hr {
    margin-top: 30px;
    border-top: 1px solid #eee;
    color: #d3d3d3;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin-top: 20px;

  h4 {
    color: #708090;
  }

  p {
    margin-top: -20px;
    color: #808080;
  }

  button {
    margin-left: 680px;
    margin-right: 35px;
    background: #daa520;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 8px 10px;
    width: 100px;
    font-weight: normal;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#daa520')};
    }
  }
`;

export const ClientList = styled.ul`
  margin-top: 15px;
  padding-top: 20px;
  align-items: center;
  list-style: none;

  li {
    display: flex;
    padding: 15px 20px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    & + li {
      margin-top: 20px;
    }

    strong {
      font-weight: normal;
      color: #4f4f4f;
      font-size: 19px;
    }

    p {
      color: #808080;
      font-size: 16px;
    }

    li {
      border: 0;
      margin-top: -16px;
      padding-left: 150px;
      flex-direction: column;
    }
  }
`;
