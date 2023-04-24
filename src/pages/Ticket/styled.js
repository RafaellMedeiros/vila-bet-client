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

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    justify-content: space-around;
  }
  @media print {
    display: none;
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
export const PrintTicketButton = styled.div`
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
    text-align: center;
  }
`;
export const WppButton = styled.div`
  border: 0;
  background-color: #1bd741;
  display: none; // nova feature
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 17px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px 10px;
  width: 320px;
  height: 40px;
  cursor: pointer;
  img {
    width: 30px;
  }
  @media (max-width: 500px) {
    width: 150px;
    margin-left: 35px;
  }
`;
export const PrintArea = styled.div`
  display: block;
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 60px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 30px;
    margin-bottom: 1rem;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 4px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    color: #444;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  p {
    font-size: 45px;
  }
`;
