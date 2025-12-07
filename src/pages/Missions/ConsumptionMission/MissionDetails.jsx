import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="consumption-mission-hero">
      <div className="consumption-mission-content">
        <div className="consumption-mission-text">
          <span className="consumption-mission-tag">Missão 1</span>

          <h1>
            Consumo: <br />
            Evitando desperdícios.
          </h1>

          <h4 className="consumption-about-mission">Sobre a missão</h4>
          <p className="consumption-about-mission">
            Pequenos hábitos - pequenas mudanças que mudam tudo.
          </p>

          <p className="consumption-about-mission">
            Quem quer que frequente, a qualquer momento e em qualquer lugar,
            espaços públicos, deve lembrar-se: é nossa responsabilidade
            partilhada deixá-los, pelo menos, na mesma condição que os
            encontrámos.
          </p>

          <p className="consumption-about-mission">
            Espaços públicos são todos aqueles de acesso livre e fácil. Não são
            "lugares de ninguém": são lugares teus também.
          </p>
        </div>

        <div className="consumption-mission-info">
          <div className="consumption-badge-box">
            <div className="consumption-badge-medal"></div>

            <div className="consumption-badge-texts">
              <h5>Medalha</h5>
              <strong>[R]-Evolucionário</strong>
              <p>para concluir a missão</p>
            </div>
          </div>

          <div className="consumption-progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
