import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TaskItem from "../../../../components/TaskItem";
import "./challenges.css";

import icon_1 from "../../../../assets/images/missions/mobility_mission/icons/icon-4.png";

const ChallengeMobility04 = () => {
  const challengeData = {
    title: "Em Viagem",
    bonusPoints: 120,
    description:
      "Uma pausa na ecologia??? Nem pensar! Mesmo viajando (quer seja por lazer ou por razões profissionais) podes tornar os teus hábitos mais sustentáveis.",
    progressPercentage: 0,
    tasks: [
      {
        id: 1,
        difficulty: "Médio",
        title: "Truque no controlo de segurança",
        points: 25,
        description:
          "Leva uma garrafa de água, uma garrafa de água reutilizável/caneca térmica numa viagem de avião. Bebe antes da verificação de segurança, enche a garrafa de água na zona livre com água da tornei...",
        link: "",
      },
      {
        id: 2,
        difficulty: "Fácil",
        title: "Mais toalhas não, obrigada",
        points: 10,
        description:
          "Usa um conjunto de toalhas durante toda a tua estadia num hotel. No hotel, utiliza as toalhas o máximo de tempo possível, caso não estejam sujas.",
        link: "",
      },
      {
        id: 3,
        difficulty: "Fácil",
        title: "Não limpe o meu quarto, por favor",
        points: 10,
        description:
          "Solicita a limpeza do quarto apenas uma vez durante a tua estadia no hotel, caso não seja realmente necessário mais do que isso. Uma política de hotel sustentável também significa poupança de...",
        link: "",
      },
      {
        id: 4,
        difficulty: "Fácil",
        title: "Tesouros do hotel",
        points: 10,
        description:
          "Não deites fora as pequenas embalagens de gel de duche que recebes de graça no hotel. Utiliza-as na tua próxima viagem. Enche-as com gel de duche, champô, loção ou o creme facial que usas tod...",
        link: "",
      },
      {
        id: 5,
        difficulty: "Médio",
        title: "Cabes numa mala pequena?",
        points: 25,
        description:
          "Tenta fazer a mala de forma minimalista e viajar com bagagem de mão. Reserva um bilhete em económica em vez de ires em executiva ou em primeira classe. Um bilhete de primeira classe num...",
        link: "",
      },
      {
        id: 6,
        difficulty: "Fácil",
        title: "Acabou-se o desperdício de papel",
        points: 10,
        description:
          "Quando viajares, utiliza a internet e as aplicações disponíveis. Não imprimas bilhetes, cartões de embarque, mapas, guias. Desta forma, reduzes o teu consumo de papel.",
        link: "",
      },
      {
        id: 7,
        difficulty: "Médio",
        title: "Alojamentos SLOW HOP",
        points: 25,
        description:
          "Antes de viajar, faz uma lista dos alojamentos locais com certificação ecológica. Consulta-a em https://slowhop.com/pl/ e escolhe acomodações pequenas e amigas do ambiente, em vez de...",
        link: "",
      },
      {
        id: 8,
        difficulty: "Médio",
        title: "Lembranças sustentáveis",
        points: 25,
        description:
          "Ao visitar os países de Sul, compra lembranças, alimentos, fruta aos produtores locais. Evita escolher carne de animais selvagens nos restaurantes. Verifica se as lembranças e se os produtos locais sã...",
        link: "",
      },
      {
        id: 9,
        difficulty: "Fácil",
        title: "Não exageres com a proteção",
        points: 10,
        description:
          "Limita a utilização excessiva de loções com proteção UV imediatamente antes de entrares no mar, oceano ou lago. Sabias que estás a desperdiçar o teu dinheiro e muita proteção solar e, além disso,...",
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

export default ChallengeMobility04;
