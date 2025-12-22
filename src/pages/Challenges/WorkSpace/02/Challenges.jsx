import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/work_mission/icons/icon-2.png";

const ChallengeWork02 = () => {
  const challengeData = {
    title: "Bom Ambiente de Trabalho para um Bom Ambiente na Terra",
    bonusPoints: 65,
    description:
      "Um ambiente de trabalho positivo faz com que os funcionários se sintam mais felizes, criativos e inovadores. Pequenas mudanças sustentáveis contribuem uma atmosfera mais saudável.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "O verde mantém o ar limpo!",
        points: 10,
        description:
          "É verde, é ecológica, e contribui para a tua saúde! Leva uma planta para o teu escritório e torna o teu espaço de trabalho mais limpo!",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Partilhar é Cuidar",
        points: 10,
        description:
          "Torna-te o colega preferido de toda a gente partilhando a tua comida! Fala com os teus colegas sobre esta possibilidade. Bónus: Partilha a comida que sobrou em tua casa com os teus colegas!...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Forma uma equipa!",
        points: 25,
        description:
          "Sê corajoso! Fala com os teus colegas sobre uma questão de sustentabilidade que pode estar a afetar a vossa vida diária no escritório. Por exemplo: separação do lixo, poupança de energia, etc.",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Imprime em modo ecológico",
        points: 10,
        description:
          "Pensa duas vezes antes de imprimires documentos, e se o fizeres, tenta imprimir na frente e verso do papel. Tenta fazer isto pelo menos uma vez por semana!",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "A temperatura ideal",
        points: 10,
        description:
          "Configura a temperatura da sala de forma a que esteja agradável para todos. Ventila-a pelo menos uma vez por dia, durante 5-10 minutos, dependendo da estação em que se encontram. Repete o...",
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

export default ChallengeWork02;
