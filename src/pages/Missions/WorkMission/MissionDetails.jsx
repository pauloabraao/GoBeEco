import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="work-mission-hero">
      <div className="work-mission-content">
        <div className="work-mission-text">
          <span className="work-mission-tag">Missão 4</span>

          <h1>Hábitos no local de trabalho</h1>

          <h4 className="work-about-mission">Sobre a missão</h4>
          <p className="work-about-mission">
            Pequenos hábitos - pequenas mudanças que mudam tudo.
          </p>

          <p className="work-about-mission">
            Pequenas ações têm um grande impacto positivo no ambiente. Tenta
            usar menos eletricidade e reduzir o consumo de energia - estarás a
            contribuir para um mundo mais saudável.
          </p>

          <p className="work-about-mission">
            Pronto para salvar o mundo e seres o funcionário do mês? Aqui vamos
            nós!
          </p>
        </div>

        <div className="work-mission-info">
          <div className="work-badge-box">
            <div className="work-badge-medal"></div>

            <div className="work-badge-texts">
              <h5>Medalha</h5>
              <strong>Funcionário do Mês</strong>
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
