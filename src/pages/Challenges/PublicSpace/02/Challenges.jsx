import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/public_mission/icons/icon-2.png";

const ChallengePublic02 = () => {
  const challengeData = {
    title: "Heróis Verdes, Guardiões de Parques e Florestas, Preparem-se!",
    bonusPoints: 10,
    description:
      "TORNA-TE ECOLÓGICO & MANTÉM TUDO LIMPO. Todos frequentamos espaços públicos, e todos temos o direito de os encontrar limpos e bem apresentados. Quando estiveres num parque ou numa floresta, sê como um escuteiro, e deixa o espaço melhor do que como o encontraste.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Difícil",
        title: "Torna-te num vigilante do desperdício!",
        points: 75,
        description:
          "Escolhe um dia da semana para te tornares um vigilante do desperdício. Para esta tarefa terás de apanhar todo o lixo (seguro e não-tóxico) que encontres ao longo do teu caminho (durante uma...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: "Queres beber? Pensa duas vezes!",
        points: 25,
        description:
          "Quando saíres com amigos ou família, leva uma garrafa grande de água contigo, que possas partilhar. Até porque, a este ponto, já deves ter sido capaz de convencer todos à tua volta a terem o...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Que ouriço!",
        points: 25,
        description:
          "Os ouriços ou porcos-espinho não são apenas queridos, são também valiosos controladores de pragas. Sabes o que podes fazer para os atrair para o teu jardim ou para um parque? Não removas...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Aproveita - liga o modo silencioso",
        points: 10,
        description:
          "Lembras-te do Capuchinho Vermelho? Ela falava com o Lobo Mau cara-a-cara. Tenta fazer o mesmo: desliga o teu telemóvel quando fores passear no parque ou na floresta, e talvez tenhas a...",
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

export default ChallengePublic02;
