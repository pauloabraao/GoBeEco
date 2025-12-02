// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MissionsHome from "./pages/Missions/HomeSpace/Mission";
import MissionsPublic from "./pages/Missions/PublicSpace/Mission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mission/1" element={<MissionsPublic />} />
        <Route path="/mission/2" element={<MissionsHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
