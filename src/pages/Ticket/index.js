import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  WppButton,
  NewBetButton,
  ButtonsArea,
  PrintTicketButton,
  PrintArea,
} from "./styled";

import Footer from "../../components/partials/Footer/index.js";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();
  const { id } = useParams();
  const [ticket, setTicket] = useState([]);
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [count, setCount] = useState("");
  useEffect(() => {
    api.getTicket(id).then((response) => {
      setTicket(response.table);
      setName(response.name);
      setCount(response.count);
      setCreateAt(response.createAt);
    });
  }, []);

  return (
    <>
      <PageContainer>
        <PageArea>
          <PrintArea>
            <title>Ticket de Aposta - Vila Bet</title>
            <div className="title">
              <h1>Ticket - Vila Bet</h1>
            </div>
            <div className="infos">
              <p>
                <strong>Id da aposta: </strong> {id}
              </p>
              <p>
                <strong>Nome: </strong> {name}
              </p>
              <p>
                <strong>Criada em: </strong> {createAt}
              </p>
              <p>
                <strong>Você acertou: </strong> {count}
              </p>
            </div>
            <div className="table">
              <table>
                <tbody>
                  <tr>
                    <th>Jogo</th>
                    <th>Resultado</th>
                  </tr>
                  {ticket?.map((item, index) => (
                    <tr key={index} className={item.color}>
                      <td>
                        <div className="header-td">
                          {item.time_home} X {item.time_away}
                        </div>
                        <div className="footer-td">
                          {item.ligue} / {item.date_game}
                        </div>
                      </td>
                      <td>{item.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PrintArea>
        </PageArea>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Page;
