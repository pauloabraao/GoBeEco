import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/home_mission/icons/icon-2.png";

const Challenges2 = () => {
  const challengeData = {
    title: "Limpeza Extrema",
    bonusPoints: 25,
    description:
      "Algumas pessoas acham que é uma tarefa incrível, outros odeiam-na, mas (quase) todos a fazemos. Então, porque não tentar limpar de uma forma mais ecológica e sustentável?",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Limpeza Sustentável",
        points: 10,
        description:
          "Organiza o teu armário dos materiais de limpeza. Limita-te aos produtos de limpeza sustentáveis mais importantes, aqueles que irás utilizar a longo prazo. Utiliza os outros...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Vamos ficar CHEIROS de diversão!",
        points: 10,
        description:
          "Planeia quando queres lavar a tua roupa durante toda a semana. Dependendo da quantidade de roupa que tiveres, separa-a com antecedência (preta, branca e de cor, ...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Difícil",
        title: "Faz os teus próprios produtos de limpeza",
        points: 25,
        description:
          "Faz uma pesquisa online sobre produtos de limpeza doméstica que sejam amigos do ambiente e que tu mesmo os possas preparar (por exemplo: bicarbonato de sódio com...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Declaração de amor à celulose de bambu",
        points: 10,
        description:
          "Para algumas pessoas é indispensável e é utilizado constantemente: o rolo de cozinha. Limpar uma panela usada, recolher cascas de maçã ou de batata, ou secar o café...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "Não embales num saco",
        points: 10,
        description:
          "Tenta evitar usar sacos de lixo tanto quanto possível ao longo da semana e presta especial atenção à separação do teu lixo. Esvazia regularmente os caixotes do plástico...",
        link: "",
      },
      {
        id: 6,
        difficulty: "Difícil",
        title: "Alternativa à lavagem",
        points: 25,
        description:
          "Em vez de lavares as tuas roupas na máquina de lavar, podes descobrir métodos alternativos para as limpares. Por exemplo, podes utilizar fita adesiva para remover...",
        link: "",
      },
      {
        id: 7,
        difficulty: "Fácil",
        title: "Seca e livre de vincos",
        points: 10,
        description:
          "Não uses a máquina de secar durante uma semana inteira - seca a tua roupa ao ar livre e passa a ferro apenas os artigos selecionados. Pouparás muita energia e a tua roupa...",
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

export default Challenges2;
