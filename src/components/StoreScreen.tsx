import React, { useState } from 'react';
import { ArrowLeft, Coins, Zap, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StoreScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('coins');

  const renderContent = () => {
    switch (activeTab) {
      case 'coins':
        return (
          <div className="space-y-4">
            <StoreItem name="100 Coins" price="$0.99" />
            <StoreItem name="500 Coins" price="$4.99" />
            <StoreItem name="1000 Coins" price="$9.99" />
          </div>
        );
      case 'boosts':
        return (
          <div className="space-y-4">
            <StoreItem name="Energy Boost" price="50 Coins" />
            <StoreItem name="Double XP (1 hour)" price="100 Coins" />
            <StoreItem name="Task Skip" price="75 Coins" />
          </div>
        );
      case 'packs':
        return (
          <div className="space-y-4">
            <StoreItem name="Starter Pack" price="$4.99" />
            <StoreItem name="Pro Pack" price="$9.99" />
            <StoreItem name="Ultimate Pack" price="$19.99" />
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
        <h1 className="text-2xl font-bold ml-4">Store</h1>
      </div>
      
      <div className="flex justify-around mb-4">
        <TabButton icon={<Coins size={24} />} label="Coins" active={activeTab === 'coins'} onClick={() => setActiveTab('coins')} />
        <TabButton icon={<Zap size={24} />} label="Boosts" active={activeTab === 'boosts'} onClick={() => setActiveTab('boosts')} />
        <TabButton icon={<Package size={24} />} label="Packs" active={activeTab === 'packs'} onClick={() => setActiveTab('packs')} />
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

const StoreItem: React.FC<{ name: string; price: string }> = ({ name, price }) => (
  <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
    <span className="font-semibold">{name}</span>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">{price}</button>
  </div>
);

export default StoreScreen;