import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SendButtonArea, SendButton } from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/admin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = api.cadSeller(name, email, surname, phone, cpf, address, password);
    if (response.newUser) {
      alert("Representante criado");
      navigate("/admin");
    } else {
      alert("Não foi possível concluir a operação!");
    }
  };

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para a página inicial</Back>
      <PageTitle>Cadastro de respresentantes</PageTitle>
      <PageArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome</div>
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
            <div className="area--title">Sobrenome</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Telefone</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </label>
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
            <div className="area--title">CPF</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Endereço</div>
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
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <SendButtonArea>
            <SendButton>Cadastrar</SendButton>
          </SendButtonArea>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
