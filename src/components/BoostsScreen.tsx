import React, { useState } from 'react';
import { ArrowLeft, Zap, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BoostsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('free');

  const renderContent = () => {
    switch (activeTab) {
      case 'free':
        return (
          <div className="space-y-4">
            <BoostItem name="Energy Boost" action="Watch Ad" />
            <BoostItem name="Double XP (30 min)" action="Invite Friend" />
            <BoostItem name="Task Skip" action="Share on Social" />
          </div>
        );
      case 'paid':
        return (
          <div className="space-y-4">
            <BoostItem name="Super Energy Boost" action="50 Coins" />
            <BoostItem name="Triple XP (1 hour)" action="100 Coins" />
            <BoostItem name="Instant Task Complete" action="75 Coins" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Boosts & Upgrades</h1>
      </div>
      
      <div className="flex justify-around mb-4">
        <TabButton icon={<Gift size={24} />} label="Free" active={activeTab === 'free'} onClick={() => setActiveTab('free')} />
        <TabButton icon={<Zap size={24} />} label="Paid" active={activeTab === 'paid'} onClick={() => setActiveTab('paid')} />
      </div>
      
      {renderContent()}
    </div>
  );
};

const TabButton: React.FC<{ icon: React.ReactNode; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button
    className={`flex flex-col items-center p-2 ${active ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm mt-1">{label}</span>
  </button>
);

const BoostItem: React.FC<{ name: string; action: string }> = ({ name, action }) => (
  <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
    <span className="font-semibold">{name}</span>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">{action}</button>
  </div>
);

export default BoostsScreen;