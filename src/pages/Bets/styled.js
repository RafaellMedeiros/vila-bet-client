import styled from "styled-components";

export const PageArea = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1000px;
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
      font-size: 20px;

      background-color: ${(props) => (props.selected ? "#781010" : "")};

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

export const InfosArea = styled.div`
  max-width: 1000px;
  margin-bottom: 20px;
  border: 1px solid #999;
  padding: 15px 0;
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .area {
      width: 235px;
      padding: 0 15px;
      .area--input {
        width: 200px;
        input {
          width: 200px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    margin: 0 10px;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .area {
        width: 400px;
        .area--input {
          width: 350px;
          input {
            width: 350px;
            height: 35px;
            font-size: 17px;
          }
        }
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
