import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  LinkArea,
  NewBetButton,
  ButtonsArea,
  ConfirmButton,
  DeleteButton,
  CoppyButton,
} from "./styled";

const Page = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [Nocopied, setNoCopied] = useState(true);

  const [games, setGames] = useState([
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "home",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "home",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "away",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "away",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "draw",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "home",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "home",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "away",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "away",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "draw",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "home",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "home",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "away",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "away",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "draw",
    },
    {
      teams: {
        home: "Treze",
        away: "Queimadense",
      },
      result: "home",
    },
    {
      teams: {
        home: "Sousa",
        away: "CSP",
      },
      result: "home",
    },
    {
      teams: {
        home: "Auto Esporte",
        away: "Campinense",
      },
      result: "away",
    },
    {
      teams: {
        home: "Nacional",
        away: "Botafogo",
      },
      result: "away",
    },
    {
      teams: {
        home: "São Paulo Cristal",
        away: "Serra Branca",
      },
      result: "draw",
    },
  ]);

  const handleOnChange = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].result = value;
    setGames(gamesCopy);
  };

  const handleBackButton = () => {
    window.location.href = "/apostas";
  };

  const handleConfirmButton = () => {
    setShowLink(true);
  };
  const handleDeleteButton = () => {
    if (window.confirm("Tem certeza que quer apagar?")) {
      window.location.href = "/apostas";
    }
  };
  const handleCoppyButton = () => {
    setNoCopied(false);
  };
  return (
    <PageContainer>
      <PageTitle>Confirmação da Aposta</PageTitle>
      <PageArea>
        <div className="container">
          {games.map((i, k) => (
            <div className="games" key={k}>
              <h3 key={k}>Jogo {k + 1}</h3>

              <div
                className="time"
                style={{
                  backgroundColor: i.result === "home" ? "#781010" : "",
                  color: i.result === "home" ? "#FFF" : "",
                }}
              >
                {i.teams.home}
              </div>

              <div
                className="time"
                style={{
                  backgroundColor: i.result === "draw" ? "#781010" : "",
                  color: i.result === "draw" ? "#FFF" : "",
                }}
              >
                Empate
              </div>

              <div
                className="time"
                style={{
                  backgroundColor: i.result === "away" ? "#781010" : "",
                  color: i.result === "away" ? "#FFF" : "",
                }}
              >
                {i.teams.away}
              </div>
            </div>
          ))}
        </div>

        {!showLink && (
          <ButtonsArea>
            <ConfirmButton onClick={handleConfirmButton}>
              Confirmar
            </ConfirmButton>
            <DeleteButton onClick={handleDeleteButton}>Apagar</DeleteButton>
          </ButtonsArea>
        )}
        {showLink && (
          <>
            <LinkArea>
              <CoppyButton onClick={handleCoppyButton}>
                Copiar Link do Ticket
              </CoppyButton>
              <NewBetButton
                onClick={handleBackButton}
                disabled={Nocopied}
                style={{ opacity: Nocopied ? 0.8 : 1 }}
              >
                Nova Aposta
              </NewBetButton>
            </LinkArea>
          </>
        )}
      </PageArea>
    </PageContainer>
  );
};

export default Page;
