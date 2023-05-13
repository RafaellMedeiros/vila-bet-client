import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SearchArea, Filter } from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const history = useNavigate();
  const api = useApi();

  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    api.getRanking().then((response) => setRanking(response.data));
  }, []);

  const handleBackButton = () => {
    history("/admin");
  };

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para página inicial</Back>

      <PageTitle>Ranking Semanal</PageTitle>
      <PageArea>
        <div className="total-bets">Total de apostas: {ranking.length}</div>
        <table className="responsive" border="1">
          <tr>
            <th>Id</th>
            <th>Apostador</th>
            <th>Revendedor</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>data</th>
            <th>Pontos</th>
          </tr>
          {ranking?.map((i, k) => (
            <tr key={k}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.seller}</td>
              <td>{i.telephone}</td>
              <td>{i.address}</td>
              <td>{i.date}</td>
              <td>{i.points}</td>
            </tr>
          ))}
        </table>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
