import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/public_mission/icons/icon-1.png";

const ChallengePublic03 = () => {
  const challengeData = {
    title: "Animal Social Sustentável - És tu o TAL?",
    bonusPoints: 50,
    description:
      "Concertos ao ar livre, estádios, feiras, espaços de exercício físico, parques infantis todos nos convidam a visitá-los... mas não a destruí-los.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Difícil",
        title: "Adota um parque - persegue os mastigadores!",
        points: 75,
        description:
          "Escolhe um local para piqueniques, um ginásio ao ar livre ou um parque de diversões, e apanha a pastilha elástica que encontrares. Se visitares estes sítios semanalmente, garante que recolhes...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: '"Rain on me / Cry me a River"',
        points: 25,
        description:
          "És fã de Lady Gaga ou Justin Timberlake? Ou conheces outras músicas relacionadas com água? De uma forma ou de outra, temos todos de tentar chamar a atenção das pessoas que nos rodeiam par...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Jardins, jardins em todo o lado...",
        points: 25,
        description:
          "As viagens de curta duração podem ter também um grande impacto em nós. Tenta verificar as zonas que normalmente visitas com os teus amigos ou onde te encontres com outras pessoas e procura...",
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
            <a href="/mission/1" className="back-link">
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

export default ChallengePublic03;
