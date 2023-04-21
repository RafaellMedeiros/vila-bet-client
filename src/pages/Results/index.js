import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SendButton, SendButtonArea } from "./styled";

import Modal from "../../components/Modal";
import ModalInfos from "../../components/ModalInfos";
import useApi from "../../services/api";

const Page = () => {
  const navigate = useNavigate();
  const api = useApi();
  const [isChecked, setIsChecked] = useState(false);
  const [games, setGames] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState([]);
  useEffect(() => {
    api.getGamesWeek().then((data) => setGames(data.gamesWeek));
  }, []);

  const handleOnChange = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].result = value;
    setGames(gamesCopy);
  };

  const handleBackButton = () => {
    navigate("/admin");
  };
  const handleSendButton = (e) => {
    e.preventDefault();
    if (true) {
      // dentro do if é canSubmit()
      const infos = { games, results: true };
      setModalData(infos);
      setModalStatus(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };
  const canSubmit = () => {
    if (isAllGamesFilled) {
      return true;
    } else {
      return false;
    }
  };
  const isAllGamesFilled = games?.every((game) => game.result);
  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para a página inicial</Back>
      <PageTitle>Resultados da semana</PageTitle>
      <PageArea>
        <div className="container">
          {games?.map((i, k) => (
            <div className="games" key={k}>
              <h3 key={k}>Jogo {k + 1}</h3>

              <label for={`${k}`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "home" ? "#CA3237" : "",
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
                  {i.time_home}
                </div>
              </label>
              <label for={`${k}1`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "draw" ? "#CA3237" : "",
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
              <label for={`${k}2`}>
                <div
                  className="time"
                  style={{
                    backgroundColor: i.result === "away" ? "#CA3237" : "",
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
                  {i.time_away}
                </div>
              </label>
            </div>
          ))}
        </div>
      </PageArea>
      {games && (
        <SendButtonArea>
          <SendButton onClick={handleSendButton}>Enviar resultados</SendButton>
          <Modal status={modalStatus} setStatus={setModalStatus}>
            <ModalInfos data={modalData} setStatus={setModalStatus} />
          </Modal>
        </SendButtonArea>
      )}
    </PageContainer>
  );
};

export default Page;
