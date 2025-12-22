import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/work_mission/icons/icon-1.png";

const ChallengeWork01 = () => {
  const challengeData = {
    title: "Sê Fixe - Poupa Energia e Combustível!",
    bonusPoints: 105,
    description:
      "As mudanças diárias têm um grande impacto no clima! Reduzir o consumo de eletricidade reduz também as emissões das centrais elétricas, o que contribui para conservar os recursos naturais e ecossistemas.",
    progressPercentage: 20,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Desperdício de energia faz-me ferver o sangue!",
        points: 10,
        description:
          "De cada vez que ferveres água para café ou chá, tenta garantir que se trata da quantidade certa para as chávenas que vais servir. Podes calcular a água necessária usando a medida da chávena.",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Se não estás a usar, podes desligar!",
        points: 10,
        description:
          "Desliga o teu computador e o ecrã de cada vez que fizeres uma pausa, e todos os dias quando saíres do escritório.",
        link: "",
      },
      {
        id: 3,
        difficulty: "Difícil",
        title: "Vamos trabalhar!",
        points: 50,
        description:
          "Em vez de ires de carro para o trabalho, tenta, pelo menos três vezes por semana, caminhar, ir de bicicleta, usar transportes públicos ou recorrer à boleia de outros colegas.",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Tens correio!",
        points: 10,
        description:
          '"Se a Internet fosse um Estado, seria o país com o terceiro maior consumo de eletricidade do planeta. Apenas a China e os Estados Unidos da América consomem mais." Esvazia a tua caixa de...',
        link: "",
      },
      {
        id: 5,
        difficulty: "Médio",
        title: "Hora do almoço!",
        points: 25,
        description:
          "Prepara o almoço de 3 ou 4 dias! Irás poupar tempo e energia!",
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

export default ChallengeWork01;
