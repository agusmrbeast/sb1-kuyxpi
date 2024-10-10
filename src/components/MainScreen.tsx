import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Users, Pickaxe, Coins, Settings, Gift, Zap, Trophy } from 'lucide-react';
import ConfigurationPopup from './ConfigurationPopup';
import PrizePopup from './PrizePopup';
import DailyRewardPopup from './DailyRewardPopup';
import BoostsPopup from './BoostsPopup';
import LeaderboardPopup from './LeaderboardPopup';

const StickFigure = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="38" stroke="black" strokeWidth="6"/>
    <line x1="100" y1="88" x2="100" y2="150" stroke="black" strokeWidth="6"/>
    <line x1="100" y1="150" x2="62" y2="188" stroke="black" strokeWidth="6"/>
    <line x1="100" y1="150" x2="138" y2="188" stroke="black" strokeWidth="6"/>
    <line x1="50" y1="112" x2="150" y2="112" stroke="black" strokeWidth="6"/>
  </svg>
);

const MainScreen: React.FC = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);
  const [showConfigPopup, setShowConfigPopup] = useState(false);
  const [showPrizePopup, setShowPrizePopup] = useState(false);
  const [showDailyRewardPopup, setShowDailyRewardPopup] = useState(false);
  const [showBoostsPopup, setShowBoostsPopup] = useState(false);
  const [showLeaderboardPopup, setShowLeaderboardPopup] = useState(false);

  useEffect(() => {
    const savedClicks = localStorage.getItem('dailyClicks');
    const lastClickDate = localStorage.getItem('lastClickDate');
    const today = new Date().toDateString();

    if (lastClickDate !== today) {
      localStorage.setItem('dailyClicks', '0');
      setClicks(0);
    } else if (savedClicks) {
      setClicks(parseInt(savedClicks, 10));
    }
  }, []);

  const handleClick = () => {
    if (clicks < 7) {
      setCoins(prevCoins => prevCoins + 100);
      setClicks(prevClicks => {
        const newClicks = prevClicks + 1;
        localStorage.setItem('dailyClicks', newClicks.toString());
        localStorage.setItem('lastClickDate', new Date().toDateString());
        return newClicks;
      });
      setShowCoinAnimation(true);
      setTimeout(() => setShowCoinAnimation(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between py-4 px-4 relative">
      <div className="w-full flex justify-between items-center mb-4">
        <button onClick={() => setShowConfigPopup(true)} className="p-2 bg-gray-200 rounded-full">
          <Settings size={24} />
        </button>
        <span className="font-bold">Username</span>
        <button onClick={() => navigate('/about-token')} className="p-2 bg-pink-500 text-white rounded-full">
          Token
        </button>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div className="absolute top-0 flex items-center mb-4">
          <Coins size={24} className="text-yellow-500 mr-2" />
          <span className="font-bold text-xl">{coins}</span>
        </div>
        <div onClick={handleClick} className="cursor-pointer mt-8">
          <StickFigure />
        </div>
        <div className="mt-4 font-bold text-lg">
          {clicks}/7 clicks today
        </div>
        {showCoinAnimation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-500 animate-bounce">
            +100
          </div>
        )}
        
        {/* Repositioned buttons */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <div className="flex flex-col items-start space-y-4 pointer-events-auto">
            <button onClick={() => setShowLeaderboardPopup(true)} className="bg-green-500 p-2 rounded-full">
              <Trophy size={24} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col items-end space-y-4 pointer-events-auto">
            <button onClick={() => setShowDailyRewardPopup(true)} className="bg-yellow-500 p-2 rounded-full">
              <Gift size={24} className="text-white" />
            </button>
            <button onClick={() => setShowBoostsPopup(true)} className="bg-purple-500 p-2 rounded-full">
              <Zap size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center">
        <button 
          onClick={() => setShowPrizePopup(true)} 
          className="w-full bg-pink-500 text-white py-2 rounded-lg mb-4 font-bold"
        >
          Participate for $1,000,000
        </button>
        <div className="w-full flex justify-between">
          <button onClick={() => navigate('/tasks')} className="flex flex-col items-center bg-gray-200 p-2 rounded-lg">
            <CheckSquare size={32} />
            <span>Tasks</span>
          </button>
          <button onClick={() => navigate('/mining')} className="flex flex-col items-center bg-gray-200 p-2 rounded-lg">
            <Pickaxe size={32} />
            <span>Mining</span>
          </button>
          <button onClick={() => navigate('/friends')} className="flex flex-col items-center bg-gray-200 p-2 rounded-lg">
            <Users size={32} />
            <span>Invite</span>
          </button>
        </div>
      </div>

      {showConfigPopup && <ConfigurationPopup onClose={() => setShowConfigPopup(false)} />}
      {showPrizePopup && <PrizePopup onClose={() => setShowPrizePopup(false)} />}
      {showDailyRewardPopup && <DailyRewardPopup onClose={() => setShowDailyRewardPopup(false)} />}
      {showBoostsPopup && <BoostsPopup onClose={() => setShowBoostsPopup(false)} />}
      {showLeaderboardPopup && <LeaderboardPopup onClose={() => setShowLeaderboardPopup(false)} />}
    </div>
  );
};

export default MainScreen;