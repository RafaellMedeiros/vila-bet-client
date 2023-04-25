import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea, PrintArea } from "./styled";

const Page = () => {
  return (
    <PageContainer>
      <PageTitle>Regras do Vila Bet</PageTitle>
      <PageArea>
        <div>
          Bem-vindo(a) ao jogo de apostas de futebol! Aqui estão as regras para
          participar e ter a chance de ganhar um prêmio de R$ 5.000,00:
          <br />
          <br />
          <ol>
            <li>Este jogo permite que você aposte em 20 jogos de futebol.</li>
            <li>
              Para participar, é necessário preencher um cartão de apostas com o
              nome dos times que você acha que irão ganhar cada jogo.
            </li>
            <li>
              Depois de preencher o cartão de apostas, entregue-o ao organizador
              do jogo juntamente com a sua taxa de inscrição.
            </li>
            <li>A taxa de inscrição é de R$ 10,00 por aposta.</li>
            <li>
              {" "}
              O prêmio de R$ 5.000,00 será concedido à pessoa que acertar o
              maior número de jogos.
            </li>
            <li>
              Em caso de empate, o prêmio será dividido igualmente entre as
              pessoas que acertaram o maior número de apostas.
            </li>
            <li>
              Os resultados dos jogos serão determinados pelo resultado final.
            </li>
            <li>
              O organizador do jogo se reserva o direito de adiar ou cancelar o
              jogo se houver circunstâncias imprevistas que o tornem
              impraticável.
            </li>
            <br />
          </ol>
          Boa sorte em suas apostas e que vença o melhor!
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
