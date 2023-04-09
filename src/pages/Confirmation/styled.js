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
      border: 1px solid #999;
      margin: 5px 0;
      padding: 5px 15px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
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
    }
  }
`;

export const LinkArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;
export const ConfirmButton = styled.button`
  border: 0;
  background-color: #47141d;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
    margin-left: 20px;
  }
`;
export const DeleteButton = styled.button`
  border: 0;
  background-color: #47141d;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
    margin-right: 20px;
  }
`;
export const NewBetButton = styled.button`
  border: 0;
  background-color: #47141d;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
    margin-right: 35px;
  }
`;
export const CoppyButton = styled.button`
  border: 0;
  background-color: #47141d;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
    margin-left: 35px;
  }
`;
