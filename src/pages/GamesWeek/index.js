import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { PageContainer, PageTitle, Back } from "../../components/MainComponents";
import { PageArea } from "./styled";

const Page = () => {
    const [game, setGame] = useState([
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
        { home: 'Sousa', away: 'CSP' },
        { home: 'Treze', away: 'Queimadense' },
        { home: 'Auto Esporte', away: 'Campinense' },
        { home: 'Nacional', away: 'Botafogo' },
        { home: 'São Paulo Cristal', away: 'Serra Branca' },
    ]);
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    const handleBackButton = ()=>{
        navigate(-1);
    }
    return (
        <PageContainer>
            <Back onClick={handleBackButton}>Voltar</Back>
            <PageTitle>Cadastro de jogos da semana.</PageTitle>
            <PageArea>
                <div className="container">
                    {game.map((i, k) =>

                        <div className="games" key={k}>
                            <h3 key={k}>Jogo {k + 1}</h3>
                            <div className="game" key={k}>Casa: {i.home}</div>
                            <div className="game" key={k}>Fora: {i.away}</div>
                        </div>

                    )}
                </div>

                <label className="area">
                    <div className="area--title"></div>
                    <div className="area--input">
                        <button disabled={disabled}>Cadastrar</button>
                    </div>
                </label>

            </PageArea>
        </PageContainer>
    )
};

export default Page;