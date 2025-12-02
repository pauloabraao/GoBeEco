import React from "react";
import "./missions.css";
import heroImage from "../../../assets/images/missions/home_mission/banner-space-home.png";
import medal from "../../../assets/images/missions/home_mission/medal.png";

const MissionDetails = () => {
  return (
    <section
      className="mission-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
      }}
    >
      <div className="mission-content">
        <div className="mission-text">
          <span className="mission-tag">Missão 2</span>

          <h1>
            A sua casa - <br />
            responsabilidade individual
          </h1>

          <h4>Sobre a missão</h4>
          <p>Pequenos hábitos - pequenas mudanças que mudam tudo.</p>

          <p>
            Quem quer que frequente, a qualquer momento e em qualquer lugar,
            espaços públicos, deve lembrar-se: é nossa responsabilidade
            partilhada deixá-los, pelo menos, na mesma condição que os
            encontrámos.
          </p>

          <p>
            Espaços públicos são todos aqueles de acesso livre e fácil. Não são
            "lugares de ninguém": são lugares teus também.
          </p>
        </div>

        <div className="mission-info">
          <div className="badge-box">
            <div
              className="medal"
              style={{ backgroundImage: `url(${medal})` }}
            ></div>
            <h5>Medalha</h5>
            <strong>[R]-Evolucionário</strong>
            <p>para concluir a missão</p>
          </div>

          <div className="progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
