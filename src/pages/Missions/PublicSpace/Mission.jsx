import React from "react";
import "./missions.css";
import MissionDetails from "./MissionDetails";

const MissionsPublic = () => {
  return (
    <main className="missions-page">
      <MissionDetails />

      <section className="challenges-section">
        <h3 className="section-title">Desafios</h3>

        <div className="challenges-grid">
          <div className="challenge-card">
            <span className="icon">🧴</span>
            <div>
              <h4>Modelos a Seguir - Em movimento!</h4>
              <p>0 pts</p>
            </div>
          </div>

          <div className="challenge-card">
            <span className="icon">🌳</span>
            <div>
              <h4>Heróis Verdes, Guardiões de Parques e Florestas</h4>
              <p>0 pts</p>
            </div>
          </div>

          <div className="challenge-card">
            <span className="icon">🐾</span>
            <div>
              <h4>Animal Social Sustentável - És tu o TAL?</h4>
              <p>0 pts</p>
            </div>
          </div>

          <div className="challenge-card highlight">
            <span className="icon">🏕️</span>
            <div>
              <h4>Baywatch - 1,2,3, vai!</h4>
              <p>25 pts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quiz-section">
        <h3 className="section-title">Quiz Final</h3>
        <div className="quiz-box">
          Conclui todos os desafios para acederes ao quiz final
        </div>
      </section>
    </main>
  );
};

export default MissionsPublic;
