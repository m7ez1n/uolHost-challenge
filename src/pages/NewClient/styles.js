import styled from 'styled-components';

export const Container = styled.div`
  max-height: 200px;
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

export const FormClient = styled.form`
  max-height: 100px;
  max-width: 900px;
  background: #f8f8ff;
  padding: 200px;
  margin: 30px auto;
  border-radius: 5px;
  margin-bottom: 20px;

  .left {
    position: relative;
    margin-left: -150px;
    margin-top: -150px;

    p {
      font-size: 18px;
      color: #1c1c1c;
      margin-bottom: 10px;
    }

    input {
      width: 60%;
      display: block;
      margin-top: 8px;
      margin-bottom: 10px;
      padding: 7px;
      font-size: 16px;
      color: #808080;
      border-radius: 6px;
      border: 1px solid #ccddef;
      outline-color: #808080;
    }
  }

  .right {
    position: relative;
    margin-top: -227px;
    margin-left: 300px;

    p {
      font-size: 18px;
      color: #1c1c1c;
      margin-bottom: 10px;
    }

    input {
      width: 180%;
      display: block;
      margin-top: 8px;
      margin-bottom: 10px;
      padding: 7px;
      font-size: 16px;
      color: #808080;
      border-radius: 6px;
      border: 1px solid #ccddef;
      outline-color: #808080;
    }
  }

  .voltar button {
    font-size: 18px;
    font-weight: normal;
    background: #f8f8ff;
    color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: 6px;
    padding: 10px 30px 10px 30px;
    position: relative;
    margin-top: 25px;
    margin-right: -20px;
    float: right;

    &:hover {
      background: #ff0000;
      color: #f8f8ff;
    }
  }

  .salvar button {
    font-size: 18px;
    font-weight: normal;
    background: #f8f8ff;
    color: #daa520;
    border: 1px solid #daa520;
    border-radius: 6px;
    padding: 10px 30px 10px 30px;
    position: relative;
    margin-top: 25px;
    margin-right: -250px;
    float: right;

    &:hover {
      background: #daa520;
      color: #f8f8ff;
    }
  }
`;
