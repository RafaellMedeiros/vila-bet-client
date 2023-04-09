import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle, Back } from "../../components/MainComponents";
import { PageArea } from "./styled";

const Page = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [ phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [ address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    const handleBackButton = ()=>{
        navigate(-1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);



        setDisabled(false);
    }

    
    return (
        <PageContainer>
            <Back onClick={handleBackButton}>Voltar</Back>
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
                                onChange={e => setName(e.target.value)}
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
                                onChange={e => setSurname(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Telefone</div>
                        <div className="area--input">
                            <input
                                type="tel"
                                disabled={disabled}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
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
                                onChange={e => setEmail(e.target.value)}
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
                                onChange={e => setCpf(e.target.value)}
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
                                onChange={e => setAddress(e.target.value)}
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
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Cadastrar</button>
                        </div>
                    </label>
            </form>
                
            </PageArea>
        </PageContainer>
    )
};

export default Page;