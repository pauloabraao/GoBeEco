import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>Escolher uma missão</h1>

      <div className="missions-grid">
        <Link to="/mission/1" className="mission-card">
          <span>Missão 1</span>
          <h3>Espaço público - responsabilidade individual</h3>
        </Link>

        <Link to="/mission/2" className="mission-card">
          <span>Missão 2</span>
          <h3>A tua casa - a tua decisão</h3>
        </Link>

        {/* <Link to="/mission/3" className="mission-card">
          <span>Missão 3</span>
          <h3>Obter e usar bens de consumo</h3>
        </Link>

        <Link to="/mission/4" className="mission-card">
          <span>Missão 4</span>
          <h3>Hábitos no local de trabalho</h3>
        </Link>

        <Link to="/mission/5" className="mission-card">
          <span>Missão 5</span>
          <h3>No Caminho Verde</h3>
        </Link> */}
      </div>
    </main>
  );
};

export default Dashboard;
