import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/public_mission/icons/icon-4.png";

const ChallengePublic04 = () => {
  const challengeData = {
    title: "Baywatch - 1,2,3, val!",
    bonusPoints: 25,
    description:
      "Fazer caiaque ou só relaxar à beira do rio - tão bom. Mas o que farás com o plástico da barra de chocolate que comeste para teres energia?",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Médio",
        title: "Passa de mascador a chiczador! Chegou o momento!",
        points: 25,
        description:
          "És um mascador? Nem por isso? Os teus amigos e família fazem parte do grupo de mascadores? Chegou o momento de tornar o mascar de pastilha elástica um hábito eco-saudável. Online ou num...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Não podes salvar o mundo sozinho!",
        points: 75,
        description:
          "Conta a um amigo sobre esta gamificação e o seu sucesso na poupança de recursos. Quanto mais pessoas jogarem, maior será o impacto que teremos. Por isso, faz com que todo o mundo saiba!",
        link: "",
      },
      {
        id: 3,
        difficulty: "Difícil",
        title: "Deixa as árvores e as abelhas em paz!",
        points: 75,
        description:
          "Os espaços verdes têm habitantes indígenas - árvores, plantas, animais, aves, insetos e...mosquitos. Quer queiras quer não, és um visitante, por isso comporta-te como um convidado culto, não...",
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

export default ChallengePublic04;
