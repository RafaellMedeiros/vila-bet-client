import styled from "styled-components";

export const PageArea = styled.div`
  h2 {
    display: flex;
    justify-content: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1000px;
  }
  .games {
    padding: 10px;
    border: 1px solid #47141d;
    border-radius: 15px;

    label {
      display: flex;
      justify-content: center;
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

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

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 10px;

  .ticket-remote {
    border: 0;
    border-bottom: 2px solid #47141d;

    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }

  .container-copy {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 5px;

    span {
      text-align: center;
      padding: 5px;
      flex: 1;
      background: #47141d;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 5px;
    }
  }

  .area {
    width: 235px;
    padding: 0 15px;
    .area--input {
      width: 200px;
      input {
        width: 200px;
      }
      p {
        margin: 0;
      }
    }
  }

  @media (max-width: 500px) {
    margin: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .area {
      width: 380px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      .area--title {
        margin-right: 10px;
      }
      .area--input {
        width: 250px;
        display: flex;
        justify-content: flex-end;
        input {
          width: 250px;
          height: 35px;
          font-size: 17px;
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
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const DateLimit = styled.div`
  text-align: center;
  margin: 15px 0;
`;

export const InputCodConteiner = styled.div`
  border: 1px solid #999;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const LabelCod = styled.label`
  font-weight: bold;
  margin-right: 8px;
`;

export const InputCod = styled.input`
  margin-right: 8px;
`;

export const BtnCod = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  background: #47141d;
`;
