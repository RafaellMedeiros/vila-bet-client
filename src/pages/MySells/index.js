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

  const [aposta, setAposta] = useState([]);

  useEffect(() => {
    api.getMySells().then((data) => setAposta(data));
  }, []);

  const handleBackButton = () => {
    history("/apostas");
  };

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para página inicial</Back>

      <PageTitle>Minhas vendas.</PageTitle>
      <PageArea>
        <div className="total-bets">Total de apostas: {aposta.length}</div>
        <div className="total-bets">Total a receber: R$ {aposta.length},00</div>
        <table className="responsive" border="1">
          <tr>
            <th>Id</th>
            <th>Apostador</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>data</th>
          </tr>
          {aposta?.map((i, k) => (
            <tr key={k}>
              <td>
                <a href={`/ticket/${i.id}`}>{i.id}</a>
              </td>
              <td>{i.name}</td>
              <td>{i.telephone}</td>
              <td>{i.address}</td>
              <td>{i.date}</td>
            </tr>
          ))}
        </table>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
