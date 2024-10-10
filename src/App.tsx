import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';
import StoreScreen from './components/StoreScreen';
import DailyBonusScreen from './components/DailyBonusScreen';
import BoostsScreen from './components/BoostsScreen';
import FriendsScreen from './components/FriendsScreen';
import TasksScreen from './components/TasksScreen';
import NewLevelPopup from './components/NewLevelPopup';
import SendGiftScreen from './components/SendGiftScreen';
import AboutTokenScreen from './components/AboutTokenScreen';
import MiningScreen from './components/MiningScreen';

function App() {
  const [showNewLevelPopup, setShowNewLevelPopup] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/store" element={<StoreScreen />} />
          <Route path="/daily-bonus" element={<DailyBonusScreen />} />
          <Route path="/boosts" element={<BoostsScreen />} />
          <Route path="/friends" element={<FriendsScreen />} />
          <Route path="/tasks" element={<TasksScreen />} />
          <Route path="/send-gift" element={<SendGiftScreen />} />
          <Route path="/about-token" element={<AboutTokenScreen />} />
          <Route path="/mining" element={<MiningScreen />} />
        </Routes>
        {showNewLevelPopup && <NewLevelPopup onClose={() => setShowNewLevelPopup(false)} />}
      </div>
    </Router>
  );
}

export default App;