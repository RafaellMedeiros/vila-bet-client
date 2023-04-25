import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  WppButton,
  NewBetButton,
  ButtonsArea,
  PrintTicketButton,
  PrintArea,
} from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const navigate = useNavigate();
  const api = useApi();
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [Nocopied, setNoCopied] = useState(true);
  const [ticket, setTicket] = useState([]);
  const [name, setName] = useState("");
  const [rankingPosition, setRankingPosition] = useState("");
  let newBet = false;
  useEffect(() => {
    api.getTicket(id).then((response) => {
      setTicket(response.table);
      setName(response.name);
      setRankingPosition(response.position);
    });
  }, []);

  const handleSendWpp = () => {};
  const handlePrint = () => {
    newBet = true;
    window.print();
  };
  const handleNewBet = () => {
    if (newBet) {
      navigate("/apostas");
    } else {
      alert("Imprima para poder ir para nova aposta!");
    }
  };

  return (
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
              <strong>Posição no ranking: </strong> {rankingPosition}
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
                  <tr key={index}>
                    <td>
                      {item.time_home} X {item.time_away}
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
  );
};

export default Page;
