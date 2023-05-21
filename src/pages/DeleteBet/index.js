import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer, Back } from "../../components/MainComponents";
import { PageArea } from "../Ticket/styled";

import Footer from "../../components/partials/Footer/index.js";
import useApi from "../../services/api";

import styles from "./DeleteBet.module.css";

const Page = () => {
  const navigate = useNavigate();
  const api = useApi();
  const { id } = useParams();

  let inputText = "";

  const handleChangeInput = (e) => {
    inputText = e.target.value;
  };

  const handleSubmit = async (e) => {
    if (inputText !== id) {
      alert("O ticket informado não corresponde");
      return;
    }

    const response = await api.deleteTicket(id);
    if (response.codeError === 404) {
      alert("Não foi indentificado o ticket, entre em contato com o suporte");
      return;
    }
    alert(`O ticket ${id} foi removido`);
    navigate("/admin");
  };

  const handleBackButton = () => {
    navigate("/admin");
  };

  return (
    <>
      <PageContainer>
        <Back onClick={handleBackButton}>Voltar para página inicial</Back>
        <PageArea>
          <div className={styles.textInfo}>
            <h2>Deseja realmente apagar o ticket {id} ?</h2>
            <p>
              Ao realizar essa ação esse ticket não é valido para o jogo, se
              realmente deseja remover esse ticket, digite o identificador da
              aposta e aperte no botão deletar
            </p>
          </div>
          <div className={styles.formSubmit}>
            <input
              onChange={handleChangeInput}
              placeholder="Nome do ticket aqui !!"
            />
            <button onClick={handleSubmit}>Deletar</button>
          </div>
        </PageArea>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Page;
