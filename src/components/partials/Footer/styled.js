import styled from "styled-components";

export const FooterArea = styled.div`
  height: 70px;
  width: 100%;
  background-color: #555;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 500px) {
    height: 35px;
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

export const Devs = styled.div`
  font-size: 17px;
  text-align: center;
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
