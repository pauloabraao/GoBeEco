import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="mobility-mission-hero">
      <div className="mobility-mission-content">
        <div className="mobility-mission-text">
          <span className="mobility-mission-tag">Missão 5</span>

          <h1>No Caminho Verde</h1>

          <h4 className="mobility-about-mission">Sobre a missão</h4>

          <p className="mobility-about-mission">
            Os meios de transporte têm um grande impacto na poluição ambiental e
            contribuem para a mudança climática. Por isso mesmo, temos de
            escolher o caminho verde, em direção a um planeta mais saudável e
            seguro.
          </p>

          <p className="mobility-about-mission">
            Aceita os nossos desafios e muda os teus hábitos - torna-te um Líder
            da Ecomobilidade.
          </p>
        </div>

        <div className="mobility-mission-info">
          <div className="mobility-badge-box">
            <div className="mobility-badge-medal"></div>

            <div className="mobility-badge-texts">
              <h5>Medalha</h5>
              <strong>Líder da Ecomobilidade</strong>
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
