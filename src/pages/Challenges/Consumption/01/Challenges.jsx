import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/consumption_mission/icons/icon-1.png";

const ChallengeConsumption01 = () => {
  const challengeData = {
    title: "Comprar, Não Comprar, Ou o que Comprar: Essa é a Questão!",
    bonusPoints: 100,
    description:
      "As próximas tarefas pretendem ajudar-te a ser mais consciente ecologicamente na aquisição e uso de diferentes tipos de bens de consumo.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Devo confiar nesta marca ou não?",
        points: 10,
        description:
          'Descarrega a aplicação "Moda Livre" (disponível em inglês) ou uma semelhante e verifica o quão éticas são as marcas que utilizas. Publica os resultados e partilha-os com pelo menos 2 amigos.',
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Torna-te um mestre da reparação!",
        points: 50,
        description:
          "A tua tarefa consiste em escolher um item do teu guarda-roupa que já não usas e transformá-lo numa outra coisa (por exemplo, transformar um vestido numa camisa ou saia). Uma vez por seman...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Espera, nós vamos para (a tua segunda) casa",
        points: 25,
        description:
          "Percorre os teus bens (podem ser roupas, sapatos, artigos de entretenimento ou até cosméticos que ainda não tenham sido utilizados ou que tenham sido acabados de usar, mas ainda em bom estado)...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Difícil",
        title: "Apenas o essencial!",
        points: 50,
        description:
          "Realiza o desafio dos 30 dias com a tua roupa. Começa no primeiro dia do mês e todos os dias escolhe um outfit completo. No final do mês, analisa o teu guarda-roupa, se houver um artigo que...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "À procura de tesouros!",
        points: 10,
        description:
          'Elabora uma "mapa" de lojas em segunda mão e websites (made.trade ou shopearthhero, por exemplo). Sempre que precises de comprar algo, dá preferência a essas mesmas lojas. Partilha o...',
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

export default ChallengeConsumption01;
