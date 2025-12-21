import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/mobility_mission/icons/icon-1.png";

const ChallengeMobility01 = () => {
  const challengeData = {
    title: "A Forma como te Moves",
    bonusPoints: 175,
    description:
      "Muda a forma como te deslocas - procura alternativas a usar o carro e descobre as vantagens dos transportes públicos, da partilha de veículos, das bicicletas, scooters ou de caminhar.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Médio",
        title: "10 000 pequenos passos",
        points: 25,
        description:
          "Pequeno enigma: O que é que simultaneamente diminui a pressão arterial, equilibra os níveis de glucose, reduz o stress e o peso corporal, e reduz as emissões de CO2 para a atmosfera? A respost...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Difícil",
        title: "Um encontro numa scooter",
        points: 50,
        description:
          "Já pensaste em comprar uma scooter elétrica mas são muito caras? Em muitas cidades grandes, já podes alugar uma! Podes ir dar um passeio e levar contigo um amigo ou um parceiro romântico!",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Reúne o teu gangue!",
        points: 25,
        description:
          "Conduzir um carro sozinho é chato, certo? A viagem diária para o trabalho pode ser bastante aborrecida. Não há ninguém para conversar e não é assim tão bom cantar sozinho no carro,...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Bla bla no carro",
        points: 25,
        description:
          "Gostas de conversar no carro? Então dá uma olhada ao site: https://www.blablacar.co.uk/ Se fores fazer uma longa viagem, cria uma conta no BlaBlaCar e prepara-te para ofereceres boleia a outras...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Difícil",
        title: "Trânsito mal-cheiroso",
        points: 50,
        description:
          "Não gostas de andar de transportes públicos porque por vezes o cheiro é desgradável? Achas que é muito melhor no teu carro? Se calhar não tens noção de que ele também emite maus cheiros! Tenta...",
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
            <a href="/mission/5" className="back-link">
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

export default ChallengeMobility01;
