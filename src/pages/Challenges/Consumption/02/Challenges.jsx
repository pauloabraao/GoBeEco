import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/consumption_mission/icons/icon-2.png";

const ChallengeConsumption02 = () => {
  const challengeData = {
    title: "Somos o que comemos. O que queres ser?",
    bonusPoints: 100,
    description:
      "Este desafio irá ensinar-te a avaliar o nível de sustentabilidade da tua comida e ajudarte-á a fazer escolhas mais ecológicas no que diz respeito às tuas refeições.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Difícil",
        title: "Esta comida é realmente boa?",
        points: 50,
        description:
          "Durante uma semana, tenta anotar tudo o que comes. Há muitos fatores que podem contribuir para tornar a tua comida mais ou menos prejudicial para o planeta. Usa um semáforo de sustentabilidad...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Demasiado bom para ir!",
        points: 10,
        description:
          'Instala a aplicação "Too Good to Go", disponível em vários países europeus, incluindo Portugal, Polónia e Alemanha, e usa-a da próxima vez que queiras encomendar...',
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Comendo flores e plantas selvagens",
        points: 25,
        description:
          "Alguma vez consideraste comer flores ou plantas selvagens? Embora possa parecer estranho no início, muitas delas são comestíveis e podem integrar deliciosas refeições. Tenta encontrar uma...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Opta pelo local!",
        points: 25,
        description:
          "Dá um passeio pelas redondezas ou pela tua cidade e faz uma lista de lojas locais onde podes comprar diferentes artigos. Depois, ao fazeres a tua lista de compras de mercearia, escreve à frente...",
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

export default ChallengeConsumption02;
