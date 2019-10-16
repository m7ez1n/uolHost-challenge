import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1300px;
  background: #f8f8ff;
  padding: 30px;
  margin: 60px auto;

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
    margin-bottom: -20px;
  }

  p {
    color: #808080;
  }

  button {
    margin: 3px 0 2px 850px;
    background: #daa520;
    color: #f8f8ff;
    border: 0;
    border-radius: 4px;
    padding: 10px 10px;
    width: 100px;
    cursor: initial;
    font-weight: normal;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#daa520')};
    }
  }
`;

export const ClientList = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: repeat(3, 1fr);
  max-width: 1200px;
  margin-top: 40px;
  list-style: none;

  li {
    padding: 20px 15px 20px 15px;
    border: 1px solid #d3d3d3;

    strong {
      display: flex;
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 3px;
      font-weight: normal;
      color: #4f4f4f;
      font-size: 19px;
    }

    small {
      color: #808080;
      font-size: 16px;
      padding-left: 20px;
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        margin-top: -53px;
        padding-bottom: 3px;
        padding-left: 400px;
      }

      small {
        padding-left: 400px;
      }
    }

    p {
      color: #808080;
      font-size: 16px;
      padding-left: 620px;
      margin-top: -30px;
    }

    button {
      font-size: 18px;
      font-weight: normal;
      background: #f8f8ff;
      color: #daa520;
      border: 1px solid #daa520;
      border-radius: 6px;
      padding: 10px 30px 10px 30px;
      position: relative;
      margin-top: -30px;
      float: right;

      &:hover {
        background: #daa520;
        color: #f8f8ff;
      }
    }
  }
`;
