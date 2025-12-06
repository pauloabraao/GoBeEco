import React from "react";
import "./missions.css";

const MissionDetails = () => {
  return (
    <section className="home-home-mission-background">
      <div className="home-mission-content">
        <div className="home-mission-text">
          <span className="home-mission-tag">Missão 2</span>

          <h1>
            Sua Casa: <br />
            Responsabilidade Individual
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
