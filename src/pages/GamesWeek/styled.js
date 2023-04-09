import styled from "styled-components";

export const PageArea = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .games {
    margin: 10px;
    .game {
      text-align: justify;
    }
    h3 {
      text-align: center;
      background-color: #47141d;
      border-radius: 10px;
      color: #fff;
      margin: 0;
      margin-bottom: 10px;
    }
  }
  button {
    background-color: #47141d;
    border: 0;
    outline: 0;
    padding: 5px 10px;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #ca3237;
    }
  }
`;
