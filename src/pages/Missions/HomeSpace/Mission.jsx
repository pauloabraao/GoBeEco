import React from "react";
import { Link } from "react-router-dom";
import "./missions.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import MissionDetails from "./MissionDetails";
import icon_1 from "../../../assets/images/missions/home_mission/icons/icon-1.png";
import icon_2 from "../../../assets/images/missions/home_mission/icons/icon-2.png";
import icon_3 from "../../../assets/images/missions/home_mission/icons/icon-3.png";
import icon_4 from "../../../assets/images/missions/home_mission/icons/icon-4.png";
import icon_5 from "../../../assets/images/missions/home_mission/icons/icon-5.png";

const MissionsHome = () => {
  return (
    <>
      <Navbar />
      <main className="missions-page">
        <MissionDetails />

        <section className="challenges-section">
          <h3 className="section-title">Desafios</h3>

          <div className="challenges-grid">
            <Link to="/challenges/1" className="challenge-card highlight">
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_1})` }}
              ></div>
              <div>
                <h4>Sustentavelmente Delicioso</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link to="/challenges/2" className="challenge-card highlight">
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_2})` }}
              ></div>
              <div>
                <h4>Limpeza Extrema</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link to="/challenges/3" className="challenge-card highlight">
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_3})` }}
              ></div>
              <div>
                <h4>Cultivar um Mundo mais Verde</h4>
                <p>0 pts</p>
              </div>
            </Link>

            <Link to="/challenges/4" className="challenge-card highlight">
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_4})` }}
              ></div>
              <div>
                <h4>Abastece o teu Mundo</h4>
                <p>25 pts</p>
              </div>
            </Link>

            <Link to="/challenges/5" className="challenge-card highlight">
              <div
                className="icon"
                style={{ backgroundImage: `url(${icon_5})` }}
              ></div>
              <div>
                <h4>Autocuidado Sustentável</h4>
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

export default MissionsHome;
