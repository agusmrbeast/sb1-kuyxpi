import React from 'react';
import { X, Trophy } from 'lucide-react';

interface LeaderboardPopupProps {
  onClose: () => void;
}

const LeaderboardPopup: React.FC<LeaderboardPopupProps> = ({ onClose }) => {
  const leaderboard = [
    { rank: 1, name: 'Player1', score: 10000 },
    { rank: 2, name: 'Player2', score: 9500 },
    { rank: 3, name: 'Player3', score: 9000 },
    { rank: 4, name: 'Player4', score: 8500 },
    { rank: 5, name: 'Player5', score: 8000 },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Leaderboard</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        
        <div className="space-y-2">
          {leaderboard.map((player) => (
            <div key={player.rank} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <div className="flex items-center">
                <span className="font-bold mr-2">{player.rank}</span>
                <span>{player.name}</span>
              </div>
              <div className="flex items-center">
                <Trophy size={16} className="text-yellow-500 mr-1" />
                <span>{player.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPopup;