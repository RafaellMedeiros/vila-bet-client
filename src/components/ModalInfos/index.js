/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  ModalArea,
  ModalButtons,
  ModalDetails,
  ModalInfoArea,
  ModalTitle,
  ModalButton,
} from "./styled";
import useApi from "../../services/api";
import { useNavigate } from "react-router-dom";

export default ({ data, setStatus }) => {
  const api = useApi();
  const navigate = useNavigate();
  const games = data && data.games ? data.games : [];
  const handleCancelButton = () => {
    setStatus(false);
  };

  const handleConfirmation = async () => {
    if (data.results) {
      const response = await api.sendResultsWeek(data.games);
      if (response.msg === "update successfully") {
        navigate("/admin");
      } else {
        alert("Não foi possivel enviar as apostas, tente novamente.");
      }
    } else {
      const response = await api.sendBet(data);

      if (response.msg === "game created") {
        navigate(`/apostas/confirmacao/${response.id}`);
      } else {
        alert("Não foi possivel enviar as apostas, tente novamente.");
      }
    }
    setStatus(false);
  };

  return (
    <Container>
      <ModalArea>
        <ModalInfoArea>
          <ModalDetails>
            <ModalTitle>Confirme as Apostas</ModalTitle>
            <table border="1">
              <thead>
                <tr>
                  <th>Casa</th>
                  <th>Empate</th>
                  <th>Fora</th>
                </tr>
              </thead>
              <tbody>
                {games.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontWeight: item.result === "home" ? "bold" : "",
                      }}
                    >
                      {item.time_home}
                    </td>
                    <td
                      style={{
                        fontWeight: item.result === "draw" ? "bold" : "",
                      }}
                    >
                      Empate
                    </td>
                    <td
                      style={{
                        fontWeight: item.result === "away" ? "bold" : "",
                      }}
                    >
                      {item.time_away}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ModalDetails>
        </ModalInfoArea>
        <ModalButtons>
          <ModalButton onClick={handleCancelButton}>Cancelar</ModalButton>
          <ModalButton onClick={handleConfirmation}>Confirmar</ModalButton>
        </ModalButtons>
      </ModalArea>
    </Container>
  );
};
