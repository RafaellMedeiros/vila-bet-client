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
  position: fixed;
  left: 5px;
  top: 105px;
  color: #fff;
  font-weight: bold;
  border-radius: 15%;
  cursor: pointer;
`;
