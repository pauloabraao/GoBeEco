import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="work-mission-hero">
      <div className="work-mission-content">
        <div className="work-mission-text">
          <span className="work-mission-tag">Missão 1</span>

          <h1>Hábitos no local de trabalho</h1>

          <h4 className="work-about-mission">Sobre a missão</h4>
          <p className="work-about-mission">
            Pequenos hábitos - pequenas mudanças que mudam tudo.
          </p>

          <p className="work-about-mission">
            Quem quer que frequente, a qualquer momento e em qualquer lugar,
            espaços públicos, deve lembrar-se: é nossa responsabilidade
            partilhada deixá-los, pelo menos, na mesma condição que os
            encontrámos.
          </p>

          <p className="work-about-mission">
            Espaços públicos são todos aqueles de acesso livre e fácil. Não são
            "lugares de ninguém": são lugares teus também.
          </p>
        </div>

        <div className="work-mission-info">
          <div className="work-badge-box">
            <div className="work-badge-medal"></div>

            <div className="work-badge-texts">
              <h5>Medalha</h5>
              <strong>[R]-Evolucionário</strong>
              <p>para concluir a missão</p>
            </div>
          </div>

          <div className="work-progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
