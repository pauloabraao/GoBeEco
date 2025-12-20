import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/home_mission/icons/icon-1.png";

const Challenges1 = () => {
  const challengeData = {
    title: "Sustentavelmente Delicioso",
    bonusPoints: 100,
    description:
      "Todos comemos e bebemos várias vezes ao dia. A forma como comemos, onde o fazemos, e os alimentos que escolhemos são tudo fatores com um grande impacto na nossa saúde mas também nas emissões de gases de efeito estufa e na sustentabilidade.",
    progressPercentage: 25,
    tasks: [
      {
        id: 1,
        difficulty: "Médio",
        title: '"Consumir de preferência antes de..." ou data de validade',
        points: 10,
        description:
          'Limpa o teu frigorífico e o armário e verifica a data de validade dos alimentos. Coloca uma caixa de "comer primeiro" na cozinha, e põe nela os alimentos a que deves dar prioridade.',
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Cozinha tu mesmo!",
        points: 10,
        description:
          "Procura na internet receitas de fazer picles, secagem, conserva ou fermentação. Assim, poderás fazer as tuas próprias compotas, chutneys, óleos, xaropes ou mesmo ketchup - e criar uma...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Fácil",
        title: "Ignora a carne!",
        points: 25,
        description:
          "Começa novas rotinas no que diz respeito aos teus hábitos de alimentação, e reduz a carne que comes! Começa por uma refeição diária - em vez de uma fatia de salame, podes barrar queijo crem...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Quarta-feira Vegetariana",
        points: 75,
        description:
          "Escolhe um dia da semana para comeres apenas produtos vegetarianos (sem carne ou peixe!). Se quiseres ir mais longe, podes adotar, em vez disso, a Quarta-feira Vegan, e, para além de não comeres carne ou peixe, deves abdicar também de outros produtos de origem animal, como q...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Médio",
        title: "A água pela qual esperas",
        points: 75,
        description:
          "Queres usufruir da água e proteger o ambiente ao mesmo tempo? Então bebe água da torneira. Começa por verificar a qualidade da mesma e, se preferires água com gás, aprende a fazer um...",
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

export default Challenges1;
