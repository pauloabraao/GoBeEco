import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/home_mission/icons/icon-4.png";

const Challenges4 = () => {
  const challengeData = {
    title: "Abastece o teu Mundo",
    bonusPoints: 25,
    description:
      "O uso de energia não sustentável está diretamente relacionado com emissões de CO2. Como podemos adotar hábitos relacionados com um uso de energia mais ecológica e assim evitar contribuir para a crise climática?",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Apanha os ladrões de energia",
        points: 10,
        description:
          "Escolhe uma tarde para explorares todas as divisões de tua casa e descobrires dispositivos em modo stand-by. Pensa se precisas mesmo de ter estes aparelhos...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: "Energia verde e eletrificante",
        points: 25,
        description:
          "Consulta a tua fatura da eletricidade e descobre mais sobre o teu fornecedor. Se já recorres a energia renovável, muito bem. Se ainda usas energia convencional, procura...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Fácil",
        title: "Aquece de forma inteligente",
        points: 10,
        description:
          "Usa o microondas em vez do fogão sempre que possível. Tenta descobrir novas receitas que possam ser preparadas recorrendo apenas a este eletrodoméstico e partilha-as...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Do quente ao frio",
        points: 10,
        description:
          "Verifica a temperatura do teu frigorífico e descongela o teu congelador. Gelo mas suas paredes reduz significativamente o efeito de arrefecimento e aumenta o consumo de...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "Não deixes as luzes acesas",
        points: 10,
        description:
          "Deixar as luzes ligadas é um dos hábitos que mais contribui para o desperdício de energia. Felizmente, também é um dos mais fáceis de mudar. Presta atenção e tenta, a...",
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

export default Challenges4;
