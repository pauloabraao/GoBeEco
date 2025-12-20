// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";

import MissionsHome from "./pages/Missions/HomeSpace/Mission";
import MissionsPublic from "./pages/Missions/PublicSpace/Mission";
import MissionsConsumption from "./pages/Missions/ConsumptionMission/Mission";
import MissionsWork from "./pages/Missions/WorkMission/Mission";
import MissionsMobility from "./pages/Missions/MobilityMission/Mission";

import Challenges1 from "./pages/Challenges/HomeSpace/01/Challenges";
import Challenges2 from "./pages/Challenges/HomeSpace/02/Challenges";
import Challenges3 from "./pages/Challenges/HomeSpace/03/Challenges";
import Challenges4 from "./pages/Challenges/HomeSpace/04/Challenges";
import Challenges5 from "./pages/Challenges/HomeSpace/05/Challenges";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mission/1" element={<MissionsPublic />} />
        <Route path="/mission/2" element={<MissionsHome />} />
        <Route path="/mission/3" element={<MissionsConsumption />} />
        <Route path="/mission/4" element={<MissionsWork />} />
        <Route path="/mission/5" element={<MissionsMobility />} />

        <Route path="/challenges/1" element={<Challenges1 />} />
        <Route path="/challenges/2" element={<Challenges2 />} />
        <Route path="/challenges/3" element={<Challenges3 />} />
        <Route path="/challenges/4" element={<Challenges4 />} />
        <Route path="/challenges/5" element={<Challenges5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
