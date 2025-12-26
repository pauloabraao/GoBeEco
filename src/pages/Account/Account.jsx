import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Account.css";

import medal1 from "../../assets/images/account/medal1.svg";
import medal2 from "../../assets/images/account/medal2.svg";
import medal3 from "../../assets/images/account/medal3.svg";
import medal4 from "../../assets/images/account/medal4.svg";
import medal5 from "../../assets/images/account/medal5.svg";
import medalSpecial from "../../assets/images/account/medalSpecial.svg";

const Account = () => {

    const medals = [
        { id: 1, title: "Missão 1", subtitle: "(R)-Evolucionário", icon: medal1},
        { id: 2, title: "Missão 2", subtitle: "Herói Climático Secreto", icon: medal2},
        { id: 3, title: "Missão 3", subtitle: "Mestre dos Bens Sustentáveis", icon: medal3},
        { id: 4, title: "Missão 4", subtitle: "Funcionário do Mês", icon: medal4},
        { id: 5, title: "Missão 5", subtitle: "Líder de Ecomobilidade", icon: medal5},
        { id: 6, title: "Missão Especial", subtitle: "Sempre Faz-tudo", icon: medalSpecial}
    ];

    return (
        <>
            <Navbar />

            <div className="account-page">
                <h1 className="page-title">A minha conta</h1>

                <div className="account-card">

                    <div className="user-info">
                        <span className="label-text">Nome do Utilizador</span>
                        <h3 className="user-name">Tiago</h3>
                    </div>

                    <div className="points-section">
                        <span className="label-text">Os teus pontos</span>
                        <div className="points-circle">
                            <span className="points-value">25</span>
                            <span className="points-label">pontos</span>
                        </div>
                    </div>

                    <div className="medals-section">
                        <h4 className="section-subtitle">Medalhas</h4>

                        <div className="medals-grid">
                            {medals.map((medal) => (

                                <div key={medal.id} className="medal-card">

                                    <div className="medal-icon-wrapper">
                                        <img
                                            src={medal.icon}
                                            alt={medal.subtitle}
                                            className="medal-img-grayscale"
                                        />
                                    </div>

                                    <div className="medal-info">
                                        <h4>{medal.title}</h4>
                                        <p>{medal.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Account;