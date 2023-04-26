import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  form {
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 150px;
        text-align: center;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
      }
      .area--input {
        flex: 1;

        input {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: 0;
          transition: all ease 0.4s;

          &:focus {
            border: 1px solid #333;
            color: #333;
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
      }
    }
  }
  @media (max-width: 500px) {
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
  }
`;

export const SendButtonArea = styled.div`
  display: flex;
  justify-content: center;
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
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    font-size: 20px;
    margin-top: 10px;
  }
`;
