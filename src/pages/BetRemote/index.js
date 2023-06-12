import React, { useEffect, useState } from "react";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  InfosArea,
  SendButton,
  SendButtonArea,
  DateLimit,
} from "./styled";

import useApi from "../../services/api";

const Page = () => {
  const api = useApi();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [ticketRemote, setTicketRemote] = useState("");

  const [games, setGames] = useState([]);
  const [info, setInfo] = useState({});
  const [dateLimit, setDateLimit] = useState({});

  useEffect(() => {
    api.getGamesWeek().then((data) => {
      setGames(data.gamesWeek);
      setInfo(data.info);
      setDateLimit(data?.info?.date);
    });
  }, []);

  const handleOnChange = (index, value) => {
    setDisabled(false);
    const gamesCopy = [...games];
    gamesCopy[index].result = value;
    setGames(gamesCopy);
  };

  const handleSendButton = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (canSubmit()) {
      const infos = { games, name, phone, address };
      api.sendBetRemote(infos).then((data) => {
        if (data.id) {
          setTicketRemote(data.id);
        } else {
          alert("Falha na criação do ticket");
        }
      });
    } else {
      alert("Preencha todos os campos!");
    }
  };
  const canSubmit = () => {
    if (isUserContactFormValid() && isAllGamesFilled) {
      return true;
    } else {
      return false;
    }
  };
  const isUserContactFormValid = () => {
    if (name !== "" && phone !== "" && address !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(ticketRemote)
      .then(() => {
        alert("Ticket Remoto Copiado");
      })
      .catch((error) => {
        console.error("Erro ao copiar texto:", error);
      });
  };

  const isAllGamesFilled = games?.every((game) => game.result);
  return (
    <PageContainer>
      <PageTitle>Aposta Remota</PageTitle>
      {dateLimit !== undefined && (
        <DateLimit>
          As apostas se encerram às <strong>{dateLimit?.hours}</strong> de
          <strong> {dateLimit?.date}</strong>
        </DateLimit>
      )}

      <form onSubmit={handleSendButton}>
        <InfosArea>
          <label className="area">
            <div className="area--title">Nome:</div>
            <div className="area--input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Telefone:</div>
            <div className="area--input">
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Cidade:</div>
            <div className="area--input">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Ticket Remoto:</div>
            <div className="area--input">
              <input
                className="ticket-remote"
                type="text"
                disabled="true"
                value={ticketRemote}
              />
            </div>
            <div className="container-copy">
              <span onClick={handleCopy}>Copiar</span>
            </div>
          </label>
        </InfosArea>
        <PageArea>
          {!info.allowed && <h2>Não é possível realizar apostas.</h2>}
          <div className="container">
            {info.allowed && (
              <>
                {games &&
                  games?.map((i, k) => (
                    <div className="games" key={k}>
                      <h3 key={k}>Jogo {k + 1}</h3>

                      <label htmlFor={`${k}-home`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "home" ? "#781010" : "",
                            color: i.result === "home" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"home"}
                            name={k + "resultado"}
                            id={`${k}-home`}
                            onChange={() => handleOnChange(k, "home")}
                          />
                          {i.time_home}
                        </div>
                      </label>
                      <label htmlFor={`${k}-draw`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "draw" ? "#781010" : "",
                            color: i.result === "draw" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"draw"}
                            name={k + "resultado"}
                            id={`${k}-draw`}
                            onChange={() => handleOnChange(k, "draw")}
                          />
                          Empate
                        </div>
                      </label>
                      <label htmlFor={`${k}-away`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "away" ? "#781010" : "",
                            color: i.result === "away" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"away"}
                            name={k + "resultado"}
                            id={`${k}-away`}
                            selected={i.result === "away"}
                            onChange={() => handleOnChange(k, "away")}
                          />
                          {i.time_away}
                        </div>
                      </label>
                      <hr />
                      <div className="infos">
                        <strong>Liga:</strong>
                        <label className="ligue">{i.ligue}</label>
                        <strong>Data do Jogo:</strong>
                        <label className="date_game">{i.date_game}</label>
                      </div>
                    </div>
                  ))}
                <hr />
              </>
            )}
          </div>
        </PageArea>
        {info.allowed && (
          <SendButtonArea>
            <SendButton disabled={disabled}>Enviar apostas</SendButton>
          </SendButtonArea>
        )}
      </form>
    </PageContainer>
  );
};

export default Page;
