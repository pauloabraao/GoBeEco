import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/work_mission/icons/icon-3.png";

const ChallengeWork03 = () => {
  const challengeData = {
    title: "Anedotas sobre Ar Condicionado? Não sou 'fan'...",
    bonusPoints: 85,
    description:
      "Em tempos de pandemia COVID-19, a ventilação tornou-se ainda mais importante. A circulação de ar garante que a quantidade de carbono é reduzida, o que permite que nos concentremos melhor.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Um passarinho disse-me que não estás a ventilar o suficiente",
        points: 10,
        description:
          "Areja o escritório a cada hora durante 3 minutos. Quanto mais frio estiver lá fora, menor é o tempo de ventilação. Tenta fazê-lo durante um dia inteiro. Caso necessário, programa um temporizador!",
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Tudo o que consegues aquecer!",
        points: 50,
        description:
          "Quando saíres do escritório no Inverno, baixa o aquecimento. Mas não desligues por completo porque, caso esteja muito frio, é necessária muito mais energia para aquecer o espaço novamente....",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Dia frio de abril!",
        points: 25,
        description:
          "Utiliza o arrefecimento noturno e abre as portas e janelas durante a noite. Caso isso não seja possível, abre-as de manhã cedo. Reduz as fontes de calor internas e desliga todos os dispositivos...",
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
            <a href="/mission/4" className="back-link">
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

export default ChallengeWork03;
