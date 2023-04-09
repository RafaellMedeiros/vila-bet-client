import styled from "styled-components";

export const HeaderArea = styled.div`
  height: 100px;
  width: 100%;
  background-color: #47141d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
`;

export const LogoItem = styled.img`
  height: 100px;
  width: auto;
  cursor: pointer;
  padding: 5px;
  @media (max-width: 500px) {
    height: 70px;
    width: auto;
  }
`;

export const Title = styled.img`
  height: 70px;
  @media (max-width: 500px) {
    height: 45px;
  }
`;

export const UserArea = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: left;
  padding: 0 10px;
`;

export const LogOut = styled.div`
  font-size: 17px;
  cursor: pointer;
`;
