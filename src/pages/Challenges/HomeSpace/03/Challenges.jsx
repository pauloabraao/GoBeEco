import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/home_mission/icons/icon-3.png";

const Challenges3 = () => {
  const challengeData = {
    title: "Cultivar um Mundo mais Verde",
    bonusPoints: 25,
    description:
      "Um ambiente protegido é uma benção - em qualquer pedaço de terra, seja ele numa varanda, num terraço, ou num jardim, podemos levar a cabo ações que ajudam a proteger a natureza, a garantir a biodiversidade e a poupar recursos.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Fácil",
        title: "Paraíso dos insetos em vez de um campo de golfe",
        points: 10,
        description:
          "Encontra um pedaço de terreno no teu jardim, jardim comunitário, ou varanda e planta flores silvestres. Mede a área e obtém sementes regionais de um jardineiro local. Sê...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Médio",
        title: "Aromatiza-o!",
        points: 25,
        description:
          "Encontra um lugar no teu jardim, terraço, varanda ou no parapeito da janela e planta um jardim de ervas. Descobre as ervas adequadas num centro de jardinagem local e...",
        link: "",
      },
      {
        id: 3,
        difficulty: "Difícil",
        title: "A autossuficiência sabe bem",
        points: 50,
        description:
          "Escolhe frutas e legumes da época, da tua região, e encontra uma forma de tu próprio os cultivares. Podes fazê-lo em casa ou, se não tiveres espaço suficiente, talvez na ca...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Médio",
        title: "Salva a rainha",
        points: 25,
        description:
          "Faz as tuas próprias bombas de sementes, amigas das abelhas, e coloca-as em parques ou oferece-as aos teus amigos. Não são precisas muitas (podem ser sementes de flor...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Médio",
        title: "Rega inteligente no jardim",
        points: 25,
        description:
          "Algumas pessoas andam à chuva, mas a partir de agora irás aproveitar a água da chuva sabiamente. Dependendo do espaço que tenhas no teu jardim ou varanda, coloca um...",
        link: "",
      },
      {
        id: 6,
        difficulty: "Difícil",
        title: "Constrói ou compra um compostor",
        points: 50,
        description:
          "Com um compostor em casa podes reduzir ainda mais a eliminação de resíduos, pois consegues dar uma nova utilidade aos teus resíduos orgânicos! Com um solo orgânico...",
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

export default Challenges3;
