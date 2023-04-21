import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    width: 380px;
    padding-left: 0px;
  }
`;

export const ModalArea = styled.div`
  height: 460px;
  display: flex;
  flex-direction: column;
`;

export const ModalButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ModalDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  td {
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 360px;
  }
`;

export const ModalTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const ModalButton = styled.button`
  border: 0;
  background-color: #47141d;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
