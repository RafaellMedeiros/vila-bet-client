import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  table {
    margin-top: 10px;

    tr {
      margin: 5px 10px;
    }
    td {
      text-align: center;
      overflow-wrap: break-word;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  tr:nth-child(odd) {
    background-color: #703434;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    table {
      margin: 5px 10px;
    }
    th {
      display: none;
    }
    td:not(:first-child) {
      display: block;
    }
    tr {
      border-bottom: 1px solid #dddddd;
    }
    td {
      border: 1;
    }
  }
  .total-bets {
    text-align: center;
  }
`;

export const SearchArea = styled.div`
  top: 200px;
  max-width: 1000px;
  margin: 10px;
  margin-bottom: 30px;
  border: 1px solid #999;
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-size: 12px;
    gap: 10px;
    margin: 10px;
    .area {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .area--input--button {
      background-color: red;
      width: 175px;
      display: flex;
      justify-content: center;
      border-radius: 5px;
      button {
        width: 175px;
        background-color: #47141d;
        cursor: pointer;
        color: #fff;
        border: 0;
        border-radius: 5px;
        font-weight: bold;
        padding: 8px;
      }
    }
  }
  @media (max-width: 500px) {
    form {
      display: flex;
      flex-direction: column;

      .area {
        font-size: 15px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      input {
        height: 30px;
        padding-left: 5px;
      }
      .area--input--button {
        background-color: #47141d;
        width: 300px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        margin-right: 35px;
      }
    }
  }
`;

export const Filter = styled.div`
  padding: 10px;
  background-color: #47141d;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  width: 80px;
  margin-left: 5px;
  margin-top: 15px;
  @media (max-width: 500px) {
    width: 400px;
    text-align: center;
    font-size: 20px;
    margin: auto;
  }
`;
