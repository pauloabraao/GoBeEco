import React from "react";
import { Link } from "react-router-dom";
import "./missions.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import MissionDetails from "./MissionDetails";
import icon_1 from "../../../assets/images/missions/work_mission/icons/icon-1.png";
import icon_2 from "../../../assets/images/missions/work_mission/icons/icon-2.png";
import icon_3 from "../../../assets/images/missions/work_mission/icons/icon-3.png";
import icon_4 from "../../../assets/images/missions/work_mission/icons/icon-4.png";

const MissionsWork = () => {
  return (
    <>
      <Navbar />
      <main className="missions-page">
        <MissionDetails />

        <section className="challenges-section">
          <h3 className="section-title">Desafios</h3>

          <div className="challenges-grid">
            <Link
              to="/challenges/work/1"
              className="work-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_1})` }}
              ></div>
              <div>
                <h4>Se Fixe - Poupa Energia e Combustível!</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/work/2"
              className="work-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_2})` }}
              ></div>
              <div>
                <h4>Bom Ambiente de Trabalho para um Bom Ambiente na Terra</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/work/3"
              className="work-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_3})` }}
              ></div>
              <div>
                <h4>Anedotas sobre Ar Condicionado? Não sou "fan"...</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link
              to="/challenges/work/4"
              className="work-challenge-card highlight"
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_4})` }}
              ></div>
              <div>
                <h4>Não é Fácil ser Verde</h4>
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

export default MissionsWork;
