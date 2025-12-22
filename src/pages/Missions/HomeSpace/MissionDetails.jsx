import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="home-mission-hero">
      <div className="home-mission-content">
        <div className="home-mission-text">
          <span className="home-mission-tag">Missão 2</span>

          <h1>Sua casa - Sua decisão</h1>

          <h4 className="home-about-mission">Sobre a missão</h4>

          <p className="home-about-mission">
            Manutenção da casa, cozinha, limpeza e entretenimento: em qualquer
            atividade que se desenrole dentro das nossas quatro paredes, temos a
            possibilidade de escolher como usamos os recursos.
          </p>
        </div>

        <div className="home-mission-info">
          <div className="home-badge-box">
            <div className="home-badge-medal"></div>

            <div className="home-badge-texts">
              <h5>Medalha</h5>
              <strong>Herói Climático Secreto</strong>
              <p>para concluir a missão</p>
            </div>
          </div>

          <div className="home-progress-circle">
            <span>6%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
