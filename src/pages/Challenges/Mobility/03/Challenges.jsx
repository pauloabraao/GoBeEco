import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/mobility_mission/icons/icon-3.png";

const ChallengeMobility03 = () => {
  const challengeData = {
    title: "Torna-te um EcoCondutor",
    bonusPoints: 110,
    description:
      "Mesmo que não consigas imaginar a tua vida sem um carro, podes tentar mudar os teus hábitos de forma a não prejudicar tanto o ambiente. Tenta!",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Médio",
        title: "Mestre da Condução Ecológica",
        points: 25,
        description:
          "Assiste a uma aula de condução sobre poupar combustível: https://www.youtube.com/watch?v=LWEnzWOx8FO https://www.youtube.com/watch?v=55tyMR_d-tc Se não conduzes, procura uma...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Táticas para uma condução ecológica",
        points: 10,
        description:
          "Enquanto conduzes, tenta recorrer a pelo menos 3 táticas ecológicas e continuar a aplicá-las durante uma semana. Se não conduzes, partilha esta informação com os teus amigos que o fazem.",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Conductor solitário - nunca mais!",
        points: 25,
        description:
          "Organiza as tuas boleias através de um grupo no Facebook ou de uma conta no Blablacar. Evita viajar sozinho de carro, sem outros passageiros, já que tal não é económico. Conduzir sozinho aumenta ...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "O teu carro não tem de brilhar!",
        points: 25,
        description:
          "Lava o teu carro no máximo uma vez por mês, e apenas em locais próprios para tal, que estão equipados com as superfícies adequadas e com um sistema de esgotos. Se não conduzes, partilha...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "Vê como estacionas!",
        points: 10,
        description:
          "Estaciona apenas em locais adequados e não em jardins ou passeios. Não conduzes? Partilha esta informação com quem o faz.",
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

export default ChallengeMobility03;
