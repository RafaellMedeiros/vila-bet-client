import styled from "styled-components";

export const PageArea = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .games {
    margin: 10px;
    .time {
      width: 200px;
      text-align: justify;
      border: 1px solid #999;
      margin: 5px 0;
      padding: 5px 15px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;

      background-color: ${(props) => (props.selected ? "#CA3237" : "")};

      &:hover {
        background-color: #781010;
        color: #fff;
      }
      input {
        display: none;
      }
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
`;
