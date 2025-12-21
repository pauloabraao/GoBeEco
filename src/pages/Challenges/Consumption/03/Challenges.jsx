import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/consumption_mission/icons/icon-3.png";

const ChallengeConsumption03 = () => {
  const challengeData = {
    title: "Tu vs Poluição - Ganha a Batalha!",
    bonusPoints: 100,
    description:
      "Irás aprender a verificar a origem dos bens que compras, a ver quem os produziu, e a confirmar se os recursos utilizados no processo são poluentes para o ambiente ou não.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Verifica as tuas etiquetas!",
        points: 10,
        description:
          "A tarefa é muito simples! Vai ao teu guarda-roupa e verifica as etiquetas de 2-5 peças de roupa. Que informações consegues encontrar? Verifica também se são 100% sintéticas com poliéster ou...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Verifica o teu prato",
        points: 50,
        description:
          "Anota todos os alimentos que comes durante um dia e confirma na Internet qual o seu efeito poluente no planeta. Há muitos websites que te podem ajudar a descobrir o quão poluente foi a tua...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Difícil",
        title: "A tua lista pessoal sustentável",
        points: 50,
        description:
          "Faz uma lista de lojas onde podes comprar vestuário sustentável, feito de algodão orgânico e/ou que apresente toda a informação necessária sobre a sua origem. Verifica também se as roupas são 100...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Um passo por dia para manter o plástico a milhas!",
        points: 25,
        description:
          "Revê os teus produtos de cosméticos e de higiene. Tenta verificar aqueles que podem conter micropiásticos e evita comprar esses produtos no futuro. Há algumas aplicações que te podem...",
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

export default ChallengeConsumption03;
