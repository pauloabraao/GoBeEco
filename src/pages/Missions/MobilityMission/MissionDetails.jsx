import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="mobility-mission-hero">
      <div className="mobility-mission-content">
        <div className="mobility-mission-text">
          <span className="mobility-mission-tag">Missão 1</span>

          <h1>No Caminho Verde</h1>

          <h4 className="mobility-about-mission">Sobre a missão</h4>
          <p className="mobility-about-mission">
            Pequenos hábitos - pequenas mudanças que mudam tudo.
          </p>

          <p className="mobility-about-mission">
            Quem quer que frequente, a qualquer momento e em qualquer lugar,
            espaços públicos, deve lembrar-se: é nossa responsabilidade
            partilhada deixá-los, pelo menos, na mesma condição que os
            encontrámos.
          </p>

          <p className="mobility-about-mission">
            Espaços públicos são todos aqueles de acesso livre e fácil. Não são
            "lugares de ninguém": são lugares teus também.
          </p>
        </div>

        <div className="mobility-mission-info">
          <div className="mobility-badge-box">
            <div className="mobility-badge-medal"></div>

            <div className="mobility-badge-texts">
              <h5>Medalha</h5>
              <strong>[R]-Evolucionário</strong>
              <p>para concluir a missão</p>
            </div>
          </div>

          <div className="mobility-progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
