/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, DateLimit, SendButton, SendButtonArea } from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();
  const [games, setGames] = useState([
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
    { timeHome: "", timeAway: "" },
  ]);
  const [dateLimit, setDateLimit] = useState("");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/admin");
  };
  const handleChangeHome = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].timeHome = value;
    setGames(gamesCopy);
  };
  const handleChangeAway = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].timeAway = value;
    setGames(gamesCopy);
  };
  const handleSendButton = async (e) => {
    e.preventDefault();
    if (!isAnyGameEmpty && isDateFilled) {
      const response = await api.gamesWeek(games, dateLimit);
      if (response.msg) {
        alert("Semana Criada!");
        navigate("/admin");
      }
    } else {
      alert("Preencha todas as informações!");
    }
  };
  const isAnyGameEmpty = games.some((game) =>
    Object.values(game).some((value) => !value)
  );
  const isDateFilled = dateLimit !== "" ? true : false;

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para a página inicial</Back>
      <PageTitle>Cadastro de jogos da semana.</PageTitle>
      <PageArea>
        <form>
          <DateLimit>
            <div className="date-limit-title">Informe a data limite:</div>
            <input
              type="datetime-local"
              value={dateLimit}
              onChange={(e) => setDateLimit(e.target.value)}
              required
            />
          </DateLimit>
          <div className="container">
            {games.map((i, k) => (
              <div className="games" key={k}>
                <h3 key={k}>Jogo {k + 1}</h3>
                <label htmlFor={`${k}`}>
                  <div className="game" key={k + 1}>
                    Casa:
                    <input
                      type="text"
                      value={games[k].timeHome}
                      name={k + "timeHome"}
                      id={`${k}`}
                      onChange={(e) => handleChangeHome(k, e.target.value)}
                      required
                    />
                  </div>
                </label>
                <div className="game" key={k + 2}>
                  Fora:
                  <input
                    type="text"
                    value={games[k].timeAway}
                    name="timeAway"
                    id={`${k + 1}`}
                    onChange={(e) => handleChangeAway(k, e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </PageArea>
      <SendButtonArea>
        <SendButton onClick={handleSendButton}>Enviar</SendButton>
      </SendButtonArea>
    </PageContainer>
  );
};

export default Page;
