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
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      input {
        width: 150px;
        margin-left: 5px;
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
  .area--button {
    width: 1000px;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    padding-right: 30px;
    button {
      background-color: #47141d;
      width: 100px;
      border: 0;
      outline: 0;
      padding: 5px 10px;
      border-radius: 4px;
      color: #fff;
      font-size: 17px;
      cursor: pointer;

      &:hover {
        background-color: #781010;
      }
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
      .game {
        display: flex;
        margin-bottom: 5px;
        font-size: 20px;
        justify-content: space-around;
        align-items: center;
        input {
          width: 250px;
          height: 25px;
          padding: 5px;
        }
      }

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
  .area--button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin-right: 55px;
    font-size: 20px;
    margin-left: 72px;

    height: 50px;
    button {
      width: 300px;
      height: 40px;
      font-size: 25px;
      font-weight: bold;
    }
  }
`;

export const DateLimit = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin-left: 50px;
  .date-limit-title {
    margin-right: 10px;
    font-size: 20px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    align-items: center;
    .date-limit-title {
      font-size: 20px;
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
