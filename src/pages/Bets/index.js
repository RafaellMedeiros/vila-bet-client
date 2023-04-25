import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  InfosArea,
  SendButton,
  SendButtonArea,
  DateLimit,
} from "./styled";
import Modal from "../../components/Modal";
import ModalInfos from "../../components/ModalInfos";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [seller, setSeller] = useState({ fullName: "", sellerId: "" });
  const [disabled, setDisabled] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [games, setGames] = useState([]);
  const [info, setInfo] = useState({});
  const [dateLimit, setDateLimit] = useState({});
  let sellerId;
  useEffect(() => {
    api.getUser().then((data) => {
      setSeller({ fullName: data.fullName, sellerId: data.cpf });
    });
  }, []);
  useEffect(() => {
    api.getGamesWeek().then((data) => {
      setGames(data.gamesWeek);
      setInfo(data.info);
      setDateLimit(data?.info?.date);
    });
  }, []);

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
  const handleSendButton = (e) => {
    e.preventDefault();
    if (canSubmit()) {
      const infos = { games, name, phone, address, seller };
      setModalData(infos);
      setModalStatus(true);
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

  const isAllGamesFilled = games?.every((game) => game.result);
  return (
    <PageContainer>
      <PageTitle>Apostas da semana</PageTitle>
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
              <p>{seller.fullName}</p>
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
                    </div>
                  ))}
              </>
            )}
          </div>
        </PageArea>
        {info.allowed && (
          <SendButtonArea>
            <SendButton onClick={handleSendButton}>Enviar apostas</SendButton>
            <Modal status={modalStatus} setStatus={setModalStatus}>
              <ModalInfos data={modalData} setStatus={setModalStatus} />
            </Modal>
          </SendButtonArea>
        )}
      </form>
    </PageContainer>
  );
};

export default Page;
