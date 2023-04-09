import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 195px;

  .links {
    display: flex;
    flex-direction: column;
    height: 200px;
    width: auto;
  }

  a {
    font-size: 20px;
    background-color: #47141d;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    padding: 5px 20px;
    text-decoration: none;
  }
`;
