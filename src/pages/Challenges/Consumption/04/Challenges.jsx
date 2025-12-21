import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/consumption_mission/icons/icon-4.png";

const ChallengeConsumption04 = () => {
  const challengeData = {
    title: "Vamos Transformar-te num Especialista do Zero Desperdício!",
    bonusPoints: 100,
    description:
      "Aqui, irás aprender como os nossos hábitos podem contribuir para a acumulação de desperdício e poluição, e verás como pequenos gestos levam a grandes mudanças.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "O meu produto, as minhas regras!",
        points: 10,
        description:
          "Nesta tarefa, deves levar o teu próprio recipiente da próxima vez que fores comprar um produto que seja servido numa embalagem de uso único. Podes, por exemplo, pedir o café no teu próprio copo,...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: "Detox Digital - analógico vs digital, antigo vs novo",
        points: 25,
        description:
          "É altura de escolheres novos hábitos para esta semana! Vai a uma loja de aluguer de filmes e escolhe um para veres. Ou escolhe um livro da tua estante ou da biblioteca local e assinala dois dias para...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Médio",
        title: "Hora de reciclar!",
        points: 25,
        description:
          "Encontra espaços na tua zona onde seja possível entregar garrafas de vidro, aparelhos eletrónicos, baterias velhas ou óleo alimentar usado. Partilha esta informação com os teus vizinhos e amigos.",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Verifica os teus medicamentos!",
        points: 10,
        description:
          "Organiza o teu armário dos medicamentos, e entrega na farmácia ou num ponto de recolha aqueles cuja validade já acabou. Nunca deites medicamentos no lixo comum, ou, pior, na sanita!",
        link: "",
      },
      {
        id: 5,
        difficulty: "Fácil",
        title: "Cuida de ti - e das árvores!",
        points: 10,
        description:
          "Troca a tua esponja de plástico por uma alternativa mais sustentável, como uma tolha. Além disso, tenta procurar alternativas mais ecológicas ao papel higiênico que normalmente usas. Para além...",
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

export default ChallengeConsumption04;
