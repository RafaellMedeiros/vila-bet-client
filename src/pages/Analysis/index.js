import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SearchArea, Filter } from "./styled";
import useApi from "../../services/api";
import { Trash } from "@phosphor-icons/react";

const Page = () => {
  const history = useNavigate();
  const api = useApi();
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  const [id, setId] = useState(query.get("Id") != null ? query.get("Id") : "");
  const [revendedor, setRevendedor] = useState(
    query.get("Revendedor") != null ? query.get("Revendedor") : ""
  );
  const [data, setData] = useState(
    query.get("Data") != null ? query.get("Data") : ""
  );

  const [disabled, setDisabled] = useState(false);

  const [filter, setFilter] = useState(true);

  const [aposta, setAposta] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    api.getAllUsers().then((response) => setAllUsers(response));
  }, []);
  
  useEffect(() => {
    let queryString = [];
    if (id) {
      queryString.push(`Id=${id}`);
    }
    if (revendedor) {
      queryString.push(`Revendedor=${revendedor}`);
    }
    if (data) {
      queryString.push(`Data=${data}`);
    }

    history({
      search: `?${queryString.join("&")}`,
    });
  }, [id, revendedor, data]);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleBackButton = () => {
    history("/admin");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setAposta(await api.getAnalysis(id, revendedor, data));
    setDisabled(false);
  };
  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para página inicial</Back>

      <PageTitle>Área de análise.</PageTitle>
      <PageArea>
        {!filter && <Filter onClick={handleFilter}>Mostrar filtros</Filter>}
        {filter && (
          <>
            <Filter onClick={handleFilter}>Fechar filtros</Filter>
            <SearchArea>
              <form onSubmit={handleSubmit}>
                <label className="area">
                  <div className="area--title">Filtrar por Id:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por revendedor:</div>
                  <div className="area--input">
                    <select onChange={(e) => setRevendedor(e.target.value)}>
                      <option></option>
                      {allUsers.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <label className="area">
                  <div className="area--title">Filtrar por data:</div>
                  <div className="area--input">
                    <input
                      type="date"
                      disabled={disabled}
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                </label>

                <label className="area">
                  <div className="area--title"></div>
                  <div className="area--input--button">
                    <button disabled={disabled}>Filtrar</button>
                  </div>
                </label>
              </form>
            </SearchArea>
          </>
        )}
        <div className="total-bets">Total de apostas: {aposta.length}</div>
        <table className="responsive" border="1">
          <tr>
            <th>Id</th>
            <th>revendedor</th>
            <th>Apostador</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>data</th>
            <th>ações</th>
          </tr>
          {aposta?.map((i, k) => (
            <tr key={k}>
              <td>
                <a href={`/ticket/${i.id}`}>{i.id}</a>
              </td>
              <td>{i.seller}</td>
              <td>{i.name}</td>
              <td>{i.telephone}</td>
              <td>{i.address}</td>
              <td>{i.date}</td>
              <td>
                <a href={`/delete/${i.id}`}>
                  <Trash size={32} alt="Deletar"/>
                </a>
              </td>
            </tr>
          ))}
        </table>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
