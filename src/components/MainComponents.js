import styled from "styled-components";

export const Template = styled.div``;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 27px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media print {
    display: none;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  background-color: #ffcaca;
  color: #000;
  border: 2px solid #ff0000;
  padding: 10px;
`;

export const Back = styled.div`
  padding: 10px;
  background-color: #781010;
  width: 300px;
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-left: 50px;
  }
`;
