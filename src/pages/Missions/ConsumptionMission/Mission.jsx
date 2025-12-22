import React from "react";
import { Link } from "react-router-dom";
import "./missions.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import MissionDetails from "./MissionDetails";
import icon_1 from "../../../assets/images/missions/consumption_mission/icons/icon-1.png";
import icon_2 from "../../../assets/images/missions/consumption_mission/icons/icon-2.png";
import icon_3 from "../../../assets/images/missions/consumption_mission/icons/icon-3.png";
import icon_4 from "../../../assets/images/missions/consumption_mission/icons/icon-4.png";

const MissionsConsumption = () => {
  return (
    <>
      <Navbar />
      <main className="missions-page">
        <MissionDetails />

        <section className="challenges-section">
          <h3 className="section-title">Desafios</h3>

          <div className="challenges-grid">
            <Link
              to="/challenges/consumption/1"
              className="consumption-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_1})` }}
              ></div>
              <div>
                <h4>
                  Comprar, Não Comprar, Ou o que Comprar: Essa é a Questão!
                </h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/consumption/2"
              className="consumption-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_2})` }}
              ></div>
              <div>
                <h4>Somos o que comemos. O que queres ser?</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/consumption/3"
              className="consumption-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_3})` }}
              ></div>
              <div>
                <h4>Tu vs Poluição - Ganha a Batalha!</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/consumption/4"
              className="consumption-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_4})` }}
              ></div>
              <div>
                <h4>
                  Vamos Transformar-te num Especialista do Zero Desperdício!
                </h4>
                <p>25 pts</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="quiz-section">
          <h3 className="section-title">Quiz Final</h3>
          <div className="quiz-box">
            Conclui todos os desafios para acederes ao quiz final
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MissionsConsumption;
