/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer, HomeTitle, PageArea } from "./styled.js";
import useApi from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { Back } from "../../components/MainComponents.js";

const Page = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const result = await api.restartWeek(email, password);
    if (result.msg) {
      alert("Semana zerada!");
      navigate("/admin");
    } else {
      alert("Não foi possível concluir a operação!");
    }
    setDisabled(false);
  };
  const handleBackButton = () => {
    navigate("/admin");
  };
  return (
    <HomeContainer>
      <Back onClick={handleBackButton}>Voltar</Back>
      <HomeTitle>
        Para recomeçar uma nova semana
        <br />
        faça login novamente.
      </HomeTitle>
      <PageArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          {/* <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input ">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={rememberPassword}
                                onChange={() => setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label> */}
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Recomeçar semana</button>
            </div>
          </label>
        </form>
      </PageArea>
    </HomeContainer>
  );
};

export default Page;
