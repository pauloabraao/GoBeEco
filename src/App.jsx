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

import Challenges from "./pages/Challenges/HomeSpace/Challenges";

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

        <Route path="/challenges/1" element={<Challenges />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
