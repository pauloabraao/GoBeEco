// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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

import ChallengesPublic01 from "./pages/Challenges/PublicSpace/01/Challenges";
import ChallengesPublic02 from "./pages/Challenges/PublicSpace/02/Challenges";
import ChallengesPublic03 from "./pages/Challenges/PublicSpace/03/Challenges";
import ChallengesPublic04 from "./pages/Challenges/PublicSpace/04/Challenges";

import ChallengesConsumption01 from "./pages/Challenges/Consumption/01/Challenges";
import ChallengesConsumption02 from "./pages/Challenges/Consumption/02/Challenges";
import ChallengesConsumption03 from "./pages/Challenges/Consumption/03/Challenges";
import ChallengesConsumption04 from "./pages/Challenges/Consumption/04/Challenges";

import ChallengeWork01 from "./pages/Challenges/WorkSpace/01/Challenges";
import ChallengeWork02 from "./pages/Challenges/WorkSpace/02/Challenges";
import ChallengeWork03 from "./pages/Challenges/WorkSpace/03/Challenges";
import ChallengeWork04 from "./pages/Challenges/WorkSpace/04/Challenges";

import ChallengeMobility01 from "./pages/Challenges/Mobility/01/Challenges";
import ChallengeMobility02 from "./pages/Challenges/Mobility/02/Challenges";
import ChallengeMobility03 from "./pages/Challenges/Mobility/03/Challenges";
import ChallengeMobility04 from "./pages/Challenges/Mobility/04/Challenges";

import Dashboard from "./pages/dashboard/page";
import Account from "./pages/Account/Account";
import Ranking from "./pages/Ranking/Ranking";
import GoBeEcoGame from "./pages/GoBeEcoGame/GoBeEcoGame";
import Login from "./pages/Login/Login";

import ChallengeStep from "./pages/challenge/page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoBeEcoGame />} />
        <Route path="/mission/1" element={<MissionsPublic />} />
        <Route path="/mission/2" element={<MissionsHome />} />
        <Route path="/mission/3" element={<MissionsConsumption />} />
        <Route path="/mission/4" element={<MissionsWork />} />
        <Route path="/mission/5" element={<MissionsMobility />} />

        <Route path="/challenges/home/1" element={<Challenges1 />} />
        <Route path="/challenges/home/2" element={<Challenges2 />} />
        <Route path="/challenges/home/3" element={<Challenges3 />} />
        <Route path="/challenges/home/4" element={<Challenges4 />} />
        <Route path="/challenges/home/5" element={<Challenges5 />} />

        <Route path="/challenges/public/1" element={<ChallengesPublic01 />} />
        <Route path="/challenges/public/2" element={<ChallengesPublic02 />} />
        <Route path="/challenges/public/3" element={<ChallengesPublic03 />} />
        <Route path="/challenges/public/4" element={<ChallengesPublic04 />} />

        <Route
          path="/challenges/consumption/1"
          element={<ChallengesConsumption01 />}
        />
        <Route
          path="/challenges/consumption/2"
          element={<ChallengesConsumption02 />}
        />
        <Route
          path="/challenges/consumption/3"
          element={<ChallengesConsumption03 />}
        />
        <Route
          path="/challenges/consumption/4"
          element={<ChallengesConsumption04 />}
        />

        <Route path="/challenges/work/1" element={<ChallengeWork01 />} />
        <Route path="/challenges/work/2" element={<ChallengeWork02 />} />
        <Route path="/challenges/work/3" element={<ChallengeWork03 />} />
        <Route path="/challenges/work/4" element={<ChallengeWork04 />} />

        <Route
          path="/challenges/mobility/1"
          element={<ChallengeMobility01 />}
        />
        <Route
          path="/challenges/mobility/2"
          element={<ChallengeMobility02 />}
        />
        <Route
          path="/challenges/mobility/3"
          element={<ChallengeMobility03 />}
        />
        <Route
          path="/challenges/mobility/4"
          element={<ChallengeMobility04 />}
        />

        <Route
          path="/account"
          element={<Account />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />} />
        <Route
          path="/ranking"
          element={<Ranking />}
        />

        <Route
          path="/gobeeco-game"
          element={<GoBeEcoGame />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/challenge/:missionId/:stepId"
          element={<ChallengeStep />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
