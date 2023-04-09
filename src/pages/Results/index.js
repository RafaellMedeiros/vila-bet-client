import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle, Back } from "../../components/MainComponents";
import { PageArea } from "./styled";



const Page = () => {

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const [games, setGames] = useState([

        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: ''
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: ''
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: ''
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: ''
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: ''
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: ''
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: ''
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: ''
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: ''
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: ''
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: ''
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: ''
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: ''
        },


    ]);


    const handleOnChange = (index, value) => {
        
        const gamesCopy = [...games];
        gamesCopy[index].result = value;
        setGames(gamesCopy);

    }

    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <PageContainer>
            <Back onClick={handleBackButton}>Voltar</Back>
            <PageTitle>Resultados da semana</PageTitle>
            <PageArea>
                <div className="container">
                    {games.map((i, k) =>

                        <div className="games" key={k}>
                            <h3 key={k}>Jogo {k + 1}</h3>

                            <label for={`${k}`}>
                                <div className="time" style={{backgroundColor: i.result === 'home' ? '#CA3237': '', color: i.result === 'home' ? '#FFF': '' }}>
                                    <input
                                        type="radio"
                                        value={'home'}
                                        name={k + 'resultado'}
                                        id={`${k}`}
                                        
                                        onChange={() => handleOnChange(k, 'home')}
                                    />
                                    {i.teams.home}
                                </div>
                            </label>
                            <label for={`${k}1`}>
                                <div className="time" style={{backgroundColor: i.result === 'draw' ? '#CA3237': '', color: i.result === 'draw' ? '#FFF': '' }}>
                                    <input
                                        type="radio"
                                        value={'draw'}
                                        name={k + 'resultado'}
                                        id={`${k}1`}
                                        
                                        onChange={() => handleOnChange(k, 'draw')}
                                    />
                                    Empate
                                </div>
                            </label>
                            <label for={`${k}2`}>
                                <div className="time" style={{backgroundColor: i.result === 'away' ? '#CA3237': '' , color: i.result === 'away' ? '#FFF': '' }}>
                                    <input
                                        type="radio"
                                        value={'away'}
                                        name={k + 'resultado'}
                                        id={`${k}2`}
                                        selected = {i.result === 'away'}
                                        onChange={() => handleOnChange(k, 'away')}
                                    />
                                    {i.teams.away}
                                </div>
                            </label>

                        </div>

                    )}
                </div>
            </PageArea>
        </PageContainer>
    )
};

export default Page;