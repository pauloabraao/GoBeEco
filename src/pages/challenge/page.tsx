import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles/styles.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function ChallengeStep() {
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.content}>
          <Link to="/mission/1" className={styles.back}>
            ← Voltar ao desafio
          </Link>

          <div className={styles.levels}>
            <span className={styles.active}>Fácil</span>
            <span>Médio</span>
            <span>Difícil</span>
          </div>

          <h1>O meu lixo - o meu problema</h1>

          <div className={styles.card}>
            <p>
              Quando regressares de um passeio, de uma viagem, de uma caminhada,
              traz de volta tudo aquilo que levaste contigo. Como? Coloca todo o
              lixo e desperdício num saco com fecho e trá-lo de volta para casa,
              para que o possas reciclar.
            </p>

            <p>
              Garante que o fazes sempre que estiveres num espaço público, pelo
              menos durante 7 dias. É tentador recorrer aos caixotes do lixo,
              mas normalmente eles não te permitem separar o papel do plástico
              e de outros tipos de lixo. Em casa, poderás reciclar o teu
              desperdício de forma correta.
            </p>

            <span className={styles.readMore}>Lê mais →</span>

            <div className={styles.steps}>
              <span className={styles.stepActive}></span>
              <span className={styles.stepActive}></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.points}>
              <span>10</span>
              <small>pontos</small>
            </div>

            {!completed && (
              <>
                <FaCheckCircle className={styles.icon} />

                <button
                  className={styles.button}
                  onClick={() => setCompleted(true)}
                >
                  Concluí este passo
                </button>
              </>
            )}

            {completed && (
              <p className={styles.completedText}>
                Passo concluído. Volta amanhã para continuar!
              </p>
            )}

            <small className={styles.note}>
              Podes realizar apenas um passo por dia. Volta amanhã!
            </small>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
