import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/home_mission/icons/icon-5.png";

const Challenges5 = () => {
  const challengeData = {
    title: "Autocuidado Sustentável",
    bonusPoints: 25,
    description:
      "Para garantir o acesso sustentável e seguro a água no futuro, é necessário poupá-la, especialmente em contextos domésticos.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Os chuveiros também limpam",
        points: 10,
        description:
          "Durante toda a semana, troca o banho por um duche morno de não mais de 4 minutos.",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: "Poupa água e na conta da água",
        points: 25,
        description:
          "Não desperdices uma única gota de água na casa de banho durante um dia. Tenta usar cada gota de água de forma sábia, por exemplo, regando as tuas flores com a água fri...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Fácil",
        title: "O mínimo 1×1 de cuidados capilares sustentáveis",
        points: 10,
        description:
          "Se possível, deixa o teu cabelo secar ao ar, naturalmente, e seca-o com o secador no máximo duas vezes por semana.",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Pequena descarga, grande passo",
        points: 25,
        description:
          "Se possível, utiliza sempre o botão pequeno de descarga. Se a tua sanita ainda tem um autoclismo antigo, recorre a um truque e coloca uma garrafa de água cheia no...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Médio",
        title: "Um encontro com o canalizador",
        points: 25,
        description:
          "Se tiveres/vires uma torneira com fuga ou a água a correr numa sanita, chama um canalizador ou informa a pessoa responsável por isso ainda hoje! Se não tens torneira...",
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

export default Challenges5;
