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
  @media (max-width: 500px) {
    .container {
      display: flex;
      flex-direction: column;
      width: 350px;
      justify-content: center;
      align-items: center;
      margin-left: 30px;
      margin-bottom: 15px;
      gap: 0;

      h3 {
        width: 350px;
        font-size: 25px;
        padding: 5px 0;
      }
      .time {
        width: 350px;
      }
    }
  }
`;
export const SendButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SendButton = styled.button`
  padding: 10px;
  background-color: #47141d;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  border: 0;
  margin-right: 15px;
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin-right: 55px;
    font-size: 20px;
  }
`;
