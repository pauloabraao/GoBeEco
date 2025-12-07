import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import TaskItem from "../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../assets/images/missions/public_mission/icons/icon-1.png";

const Challenges = () => {
  const challengeData = {
    title: "Modelos a Seguir - Em movimento!",
    bonusPoints: 100,
    description:
      "Ruas, avenidas ou paragens de autocarro - todas estas são possíveis passarelas para modelos sustentáveis. Mostra os teus melhores movimentos ecológicos e entra na onda amiga do ambiente!",
    progressPercentage: 25,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "O meu lixo - o meu problema",
        points: 10,
        description:
          "Quando regressares de um passeio, de uma viagem, de uma caminhada, traz de volta tudo aquilo que levaste contigo. Como? Coloca todo o lixo e desperdício num saco co...",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "TATG - Traz A Tua Garrafa",
        points: 10,
        description:
          "A correr pela cidade? À espera de um autocarro? Ou só a vaguear? Mais tarde ou mais cedo irás sentir sede. Lembra-te disto antes de saires de casa - leva sempre contigo...",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Diz não aos apanhadores de folhas",
        points: 25,
        description:
          "Quando estiveres a passear à sombra de uma árvore ou a passar por arbustos e plantas, evita apanhar folhas e flores ou partir ramos. Se a tua reação imediata é 'O quê?! Eu...",
      },
      {
        id: 4,
        difficulty: "Difícil",
        title: "Acaba com o barulho, sê único!",
        points: 75,
        description:
          "Planta uma árvore ou um arbusto para combater o barulho. Envolve-te na guerrilha da jardinagem e fala com as autoridades locais para perceberes quais os melhores locais...",
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
            <a href="/mission/2" className="back-link">
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
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Challenges;
