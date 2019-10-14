import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  h1 {
    display: flex;
    padding-top: 100px;
    padding-left: 120px;
    font-size: 30px;
    font-weight: lighter;
    color: #1c1c1c;

    svg {
      margin-right: 20px;
    }
  }

  hr {
    margin: 25px 120px auto;
    border-top: 1px;
    color: #d3d3d3;
  }
`;

export const Panel = styled.div`
  display: flex;
  padding-top: 25px;
  padding-left: 120px;

  h4 {
    color: #708090;
  }

  button {
    background: #daa520;
    color: #fff;
    border: 0;
    border-radius: 4px;
    margin: 0 0 0 425px;
    padding: 8px 10px;
    font-weight: normal;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#daa520')};
    }
  }
`;
