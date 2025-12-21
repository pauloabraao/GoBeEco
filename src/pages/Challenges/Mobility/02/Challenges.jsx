import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/mobility_mission/icons/icon-2.png";

const ChallengeMobility02 = () => {
  const challengeData = {
    title: "Mede a tua Pegada",
    bonusPoints: 55,
    description:
      "Os hábitos de mobilidade têm um grande impacto na mudança climática, devido às emissões de CO2. Este desafio irá ajudar-te a reduzir a pegada carbónica associada aos transportes que usas.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Pé grande",
        points: 10,
        description:
          "Sabes qual é o tamanho do teu pé? Sim, sim, este pé que deixa uma marca no nosso planeta. Qual é a profundidade da tua marca? Calcula a pegada de carbono do teu último voo:...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Observa as pegadas da tua viagem",
        points: 10,
        description:
          "Os teus hábitos de transporte são de grande importância para as alterações climáticas devido às suas emissões de CO2. Verifica a pegada de carbono da tua próxima viagem – quer viajes de carro,...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Fácil",
        title: "Pegada do pneu",
        points: 10,
        description:
          "Calcula, todos os dias, a pegada da tua viagem diária de carro e toma uma decisão sobre como gostarias de a aproveitar. https://www.carbonfootprint.com/calculator.aspx Confirma a...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Férias sobre carris",
        points: 25,
        description:
          "Que tal umas férias de comboio? Ou uma viagem de negócios? Verifica se é possível chegares ao teu destino de férias de comboio. Sempre que possível, escolhe o comboio como o meio de transporte,...",
        link: "",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="missions-page challenge-details-page">
        {/* Hero Section showing title and icon */}
        <section className="challenge-details-hero">
          <div className="challenge-hero-content">
            <a href="/mission/5" className="back-link">
              &lt; Voltar à missão
            </a>

            <div className="challenge-header-flex">
              <div
                className="challenge-big-icon"
                style={{ backgroundImage: `url(${icon_1})` }}
              ></div>
              <div className="challenge-header-text">
                <span className="challenge-overline">Desafio</span>
                <h1>{challengeData.title}</h1>
                <p className="bonus-points">
                  {challengeData.bonusPoints} Pontos bónus
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main content area with description, progress, and tasks */}
        <section className="challenge-details-body">
          <div className="challenge-info-block">
            <h5>Sobre o desafio</h5>
            <p>{challengeData.description}</p>
          </div>

          <div className="challenge-progress-block">
            <div className="progress-labels">
              <span>Tarefas</span>
              <span>{challengeData.progressPercentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${challengeData.progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="tasks-list-container">
            {challengeData.tasks.map((task) => (
              <TaskItem
                key={task.id}
                difficulty={task.difficulty}
                title={task.title}
                description={task.description}
                points={task.points}
                link={task.link}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChallengeMobility02;
