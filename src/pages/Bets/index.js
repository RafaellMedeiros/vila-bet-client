import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea, InfosArea, SendButton, SendButtonArea } from "./styled";
import { ConfirmationModal } from "../../components/Modal";

const Page = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selller, setSeller] = useState("Vendedor");
  const [disabled, setDisabled] = useState(false);

  const [games, setGames] = useState([
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "",
    },
  ]);

  const handleOnChange = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].result = value;
    setGames(gamesCopy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    setDisabled(false);
  };
  const handleSendButton = () => {
    window.location.href = "/apostas/confirmacao";
  };

  return (
    <PageContainer>
      <PageTitle>Apostas da semana</PageTitle>
      <InfosArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome:</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
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
                type="tel"
                disabled={disabled}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Endereço:</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Responsável:</div>
            <div className="area--input">
              <input
                type="email"
                disabled={disabled}
                value={selller}
                required
              />
            </div>
          </label>
        </form>
      </InfosArea>
      <PageArea>
        <div className="container">
          {games.map((i, k) => (
            <div className="games" key={k}>
              <h3 key={k}>Jogo {k + 1}</h3>

              <label htmlFor={`${k}`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "home" ? "#781010" : "",
                    color: i.result === "home" ? "#FFF" : "",
                  }}
                >
                  <input
                    type="radio"
                    value={"home"}
                    name={k + "resultado"}
                    id={`${k}`}
                    onChange={() => handleOnChange(k, "home")}
                  />
                  {i.teams.home}
                </div>
              </label>
              <label htmlFor={`${k}1`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "draw" ? "#781010" : "",
                    color: i.result === "draw" ? "#FFF" : "",
                  }}
                >
                  <input
                    type="radio"
                    value={"draw"}
                    name={k + "resultado"}
                    id={`${k}1`}
                    onChange={() => handleOnChange(k, "draw")}
                  />
                  Empate
                </div>
              </label>
              <label htmlFor={`${k}2`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "away" ? "#781010" : "",
                    color: i.result === "away" ? "#FFF" : "",
                  }}
                >
                  <input
                    type="radio"
                    value={"away"}
                    name={k + "resultado"}
                    id={`${k}2`}
                    selected={i.result === "away"}
                    onChange={() => handleOnChange(k, "away")}
                  />
                  {i.teams.away}
                </div>
              </label>
            </div>
          ))}
        </div>
      </PageArea>
      <SendButtonArea>
        {/* <SendButton onClick={handleSendButton}>Enviar apostas</SendButton> */}
        <ConfirmationModal />
      </SendButtonArea>
    </PageContainer>
  );
};

export default Page;
