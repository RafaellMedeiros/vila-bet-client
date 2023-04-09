import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SearchArea, Filter } from "./styled";

const Page = () => {
  const history = useNavigate();
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  const [qId, setQId] = useState(
    query.get("qId") != null ? query.get("qId") : ""
  );
  const [qRevendedor, setQRevendedor] = useState(
    query.get("qRevendedor") != null ? query.get("qRevendedor") : ""
  );
  const [qApostador, setQApostador] = useState(
    query.get("qApostador") != null ? query.get("qApostador") : ""
  );
  const [qTelefone, setQTelefone] = useState(
    query.get("qTelefone") != null ? query.get("qTelefone") : ""
  );
  const [qEndereco, setQEndereco] = useState(
    query.get("qEndereco") != null ? query.get("qEndereco") : ""
  );
  const [qData, setQData] = useState(
    query.get("qData") != null ? query.get("qData") : ""
  );
  const [qHora, setQHora] = useState(
    query.get("qHora") != null ? query.get("qHora") : ""
  );

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [revendedor, setRevendedor] = useState("");
  const [apostador, setApostador] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const [disabled, setDisabled] = useState(false);

  const [filter, setFilter] = useState(false);

  const [aposta, setAposta] = useState([
    {
      id: 1111,
      revendedor: "Vicente",
      apostador: "Junior",
      telefone: "83998034092",
      endereco: "R. José Doroteia Dutra",
      data: "14/03/2023",
      hora: "16:00",
    },
    {
      id: 2222,
      revendedor: "Vicente",
      apostador: "Raquel",
      telefone: "83998034092",
      endereco: "R. José Doroteia Dutra",
      data: "14/03/2023",
      hora: "16:00",
    },
    {
      id: 3333,
      revendedor: "Ana",
      apostador: "Renan",
      telefone: "83998034092",
      endereco: "R. José Doroteia Dutra",
      data: "14/03/2023",
      hora: "16:00",
    },
    {
      id: 4444,
      revendedor: "Rafael",
      apostador: "Moises",
      telefone: "83998034092",
      endereco: "R. José Doroteia Dutra",
      data: "14/03/2023",
      hora: "16:00",
    },
  ]);

  useEffect(() => {
    let queryString = [];
    if (qId) {
      queryString.push(`qId=${qId}`);
    }
    if (qRevendedor) {
      queryString.push(`qRevendedor=${qRevendedor}`);
    }
    if (qApostador) {
      queryString.push(`qApostador=${qApostador}`);
    }
    if (qTelefone) {
      queryString.push(`qTelefone=${qTelefone}`);
    }
    if (qEndereco) {
      queryString.push(`qEndereco=${qEndereco}`);
    }
    if (qData) {
      queryString.push(`qData=${qData}`);
    }
    if (qHora) {
      queryString.push(`qHora=${qHora}`);
    }

    history({
      search: `?${queryString.join("&")}`,
    });
  }, [qId, qRevendedor, qApostador, qTelefone, qEndereco, qData, qHora]);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleBackButton = () => {
    window.location.href = "/admin";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    setDisabled(false);
  };
  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar</Back>

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
                      value={qId}
                      onChange={(e) => setQId(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por revendedor:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qRevendedor}
                      onChange={(e) => setQRevendedor(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por apostador:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qApostador}
                      onChange={(e) => setQApostador(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por telefone:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qTelefone}
                      onChange={(e) => setQTelefone(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por endereço:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qEndereco}
                      onChange={(e) => setQEndereco(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por data:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qData}
                      onChange={(e) => setQData(e.target.value)}
                    />
                  </div>
                </label>
                <label className="area">
                  <div className="area--title">Filtrar por hora:</div>
                  <div className="area--input">
                    <input
                      type="text"
                      disabled={disabled}
                      value={qHora}
                      onChange={(e) => setQHora(e.target.value)}
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
        <table border="1">
          <tr>
            <th>Id</th>
            <th>revendedor</th>
            <th>Apostador</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>data</th>
            <th>hora</th>
          </tr>
          {aposta.map((i, k) => (
            <tr key={k}>
              <td>{i.id}</td>
              <td>{i.revendedor}</td>
              <td>{i.apostador}</td>
              <td>{i.telefone}</td>
              <td>{i.endereco}</td>
              <td>{i.data}</td>
              <td>{i.hora}</td>
            </tr>
          ))}
        </table>
        <div>Total de apostas: {aposta.length}</div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
