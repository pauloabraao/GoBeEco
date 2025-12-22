import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBeEcoGame.css";

// Assets
import logoColor from "../../assets/GoBeEcoGame/logo_gobeeco_color.svg";
import iconWoman from "../../assets/GoBeEcoGame/icon-woman-tablet.svg";
import bgWave from "../../assets/GoBeEcoGame/bg-wave.svg";
import ueErasmus from "../../assets/GoBeEcoGame/ue-erasmus.png";

const GoBeEcoGame = () => {
    const navigate = useNavigate();

    return (
        <div className="gobeeeco-game-container">
            {/* Background Wave */}
            <img src={bgWave} alt="" className="bg-wave" />

            {/* Main Content */}
            <div className="content-wrapper">
                {/* Top Logo */}
                <header className="game-header">
                    <img src={logoColor} alt="GoBeEco Logo" className="logo-top" />
                </header>

                {/* Hero Section */}
                <main className="game-main">
                    <div className="hero-image-container">
                        <img src={iconWoman} alt="Woman with tablet" className="hero-img" />
                    </div>

                    <h1 className="game-title">GoBeEco</h1>

                    <p className="game-description">
                        Joga e muda os teus hábitos para caminhares em<br />
                        direção a uma vida mais ecológica
                    </p>

                    <div className="action-buttons">
                        <button className="btn btn-login" onClick={() => navigate("/login")}>Iniciar Sessão</button>
                        <button className="btn btn-create-account">Criar uma conta</button>
                    </div>
                </main>

                {/* Footer */}
                <footer className="game-footer">
                    <div className="footer-links">
                        <a href="#" className="footer-link">Política de Privacidade</a>
                        <span className="footer-link">FAQ</span>
                    </div>

                    <div className="footer-langs">
                        <span>EN</span>
                        <span className="dot">.</span>
                        <span>PL</span>
                        <span className="dot">.</span>
                        <span>DE</span>
                        <span className="dot">.</span>
                        <span>PT</span>
                    </div>

                    <div className="footer-eu-disclaimer">
                        <p className="disclaimer-text">
                            The European Commission support for the production of this publication does<br />
                            not constitute an endorsement of the contents which reflects the views only of<br />
                            the authors, and the Commission cannot be held responsible for any use which<br />
                            may be made of the information contained therein.
                        </p>
                        <div className="eu-logo-placeholder">
                            <img src={ueErasmus} alt="Co-funded by the Erasmus+ Programme of the European Union" className="eu-logo" />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default GoBeEcoGame;
