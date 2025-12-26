import { Link } from "react-router-dom";
import Navbar from "../../components/NavbarDasgboard";
import Footer from "../../components/Footer";
import styles from "./styles/dashboard.module.css";
import React from "react";
import { FaLeaf } from "react-icons/fa";

import missao1 from "@/assets/Missoes/m1-thumb-md.jpg";
import missao2 from "@/assets/Missoes/m2-thumb-md.jpg";
import missao3 from "@/assets/Missoes/m3-thumb-md.jpg";
import missao4 from "@/assets/Missoes/m4-thumb-md.jpg";
import missao5 from "@/assets/Missoes/m5-thumb-md.jpg";

const missions = [
  {
    id: 1,
    label: "Missão 1",
    title: "Espaço público – responsabilidade individual",
    image: missao1,
    color: styles.yellow,
  },
  {
    id: 2,
    label: "Missão 2",
    title: "A tua casa – a tua decisão",
    image: missao2,
    color: styles.green,
  },
  {
    id: 3,
    label: "Missão 3",
    title: "Obter e usar bens de consumo",
    image: missao3,
    color: styles.purple,
  },
  {
    id: 4,
    label: "Missão 4",
    title: "Hábitos no local de trabalho",
    image: missao4,
    color: styles.blue,
  },
  {
    id: 5,
    label: "Missão 5",
    title: "No Caminho Verde",
    image: missao5,
    color: styles.gold,
  },
];

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.header}>
            <h1>Vamos lá, torna-te ECO connosco!</h1>

            <p>
              Bem-vindo/a à web app GoBeEco.
              <br />
              Convidamos-te a utilizar a web app GoBeEco e a tornares-te mais
              consciente do impacto ecológico da tua vida quotidiana.
            </p>

            <Link to="/about" className={styles.cta}>
              Descobre mais sobre a app →
            </Link>
          </section>

          <section className={styles.missions}>
            {missions.map((mission) => (
              <Link
                key={mission.id}
                to={`/mission/${mission.id}`}
                className={`${styles.card} ${mission.color}`}
              >
                <img src={mission.image} alt={mission.title} />

                <div className={styles.overlay}>
                  <span>{mission.label}</span>
                  <h3>{mission.title}</h3>
                </div>
              </Link>
            ))}
          </section>

       <section className={styles.special}>
  

  <svg
    className={styles.specialMark}
    viewBox="0 0 100 100"
    aria-hidden
  >

  </svg>

  <h4>Missão especial</h4>

  <p>
    Completa todas as missões para desbloqueares a missão especial
    e desafios adicionais.
  </p>
</section>




        </div>
      </main>

      <Footer />
    </>
  );
}
