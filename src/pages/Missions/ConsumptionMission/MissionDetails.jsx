import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="consumption-mission-hero">
      <div className="consumption-mission-content">
        <div className="consumption-mission-text">
          <span className="consumption-mission-tag">Missão 3</span>

          <h1>Obter e usar bens de consumo</h1>

          <h4 className="consumption-about-mission">Sobre a missão</h4>

          <p className="consumption-about-mission">
            Aprenderás a fazer escolhas de consumo mais sustentáveis e a reduzir
            a poluição e desperdício causados pelos bens que adquirimos - desde
            comida a produtos domésticos.
          </p>
        </div>

        <div className="consumption-mission-info">
          <div className="consumption-badge-box">
            <div className="consumption-badge-medal"></div>

            <div className="consumption-badge-texts">
              <h5>Medalha</h5>
              <strong>Mestre dos Bens Sustentáveis</strong>
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
