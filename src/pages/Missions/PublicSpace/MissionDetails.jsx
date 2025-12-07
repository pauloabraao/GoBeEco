import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="public-mission-hero">
      <div className="public-mission-content">
        <div className="public-mission-text">
          <span className="public-mission-tag">Missão 1</span>

          <h1>
            Espaço público: <br />
            Responsabilidade Individual
          </h1>

          <h4 className="public-about-mission">Sobre a missão</h4>
          <p className="public-about-mission">
            Pequenos hábitos - pequenas mudanças que mudam tudo.
          </p>

          <p className="public-about-mission">
            Quem quer que frequente, a qualquer momento e em qualquer lugar,
            espaços públicos, deve lembrar-se: é nossa responsabilidade
            partilhada deixá-los, pelo menos, na mesma condição que os
            encontrámos.
          </p>

          <p className="public-about-mission">
            Espaços públicos são todos aqueles de acesso livre e fácil. Não são
            "lugares de ninguém": são lugares teus também.
          </p>
        </div>

        <div className="public-mission-info">
          <div className="public-badge-box">
            <div className="public-badge-medal"></div>

            <div className="public-badge-texts">
              <h5>Medalha</h5>
              <strong>[R]-Evolucionário</strong>
              <p>para concluir a missão</p>
            </div>
          </div>

          <div className="public-progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
