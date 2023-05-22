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

  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    api.getFinancial().then((response) => setSellers(response));
  }, []);

  const handleBackButton = () => {
    history("/admin");
  };

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para página inicial</Back>

      <PageTitle>Financeiro</PageTitle>
      <PageArea>
        <table className="responsive" border="1">
          <tr>
            <th>Revendedor</th>
            <th>Vendido</th>
          </tr>
          {sellers?.map((i, k) => (
            <tr key={k}>
              <td>{i.name}</td>
              <td>{i.count}</td>
            </tr>
          ))}
        </table>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
