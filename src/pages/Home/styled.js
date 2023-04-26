import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 129px;
`;

export const HomeTitle = styled.h1`
  display: flex;
  text-align: center;
`;

export const PageArea = styled.div`
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
      }
    }
  }
`;

export const FooterArea = styled.div`
  height: 70px;
  width: 100%;
  background-color: #555;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  bottom: 0;
  @media (max-width: 500px) {
    height: 35px;
  }
  @media print {
    display: none;
  }
`;

export const TextArea = styled.div`
  width: auto;
  cursor: pointer;
  padding: 5px;
  @media (max-width: 500px) {
    height: 70px;
    width: auto;
  }
`;

export const Rules = styled.div`
  font-size: 17px;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const Rights = styled.div`
  font-size: 13px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
