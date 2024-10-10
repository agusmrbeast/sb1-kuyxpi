import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DailyBonusScreen: React.FC = () => {
  const navigate = useNavigate();

  const renderCalendar = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`aspect-square flex items-center justify-center rounded-full ${
              day <= 7 ? 'bg-green-200' : day % 7 === 0 ? 'bg-yellow-200 border-2 border-yellow-400' : 'bg-gray-200'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Daily Bonuses</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <Calendar size={24} className="mb-2" />
        {renderCalendar()}
      </div>
      
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">
        Claim Today's Bonus
      </button>
    </div>
  );
};

export default DailyBonusScreen;