import React, { useState, useEffect } from 'react';
import { ArrowLeft, Pickaxe, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MiningScreen: React.FC = () => {
  const navigate = useNavigate();
  const [hourlyIncome, setHourlyIncome] = useState(0);

  useEffect(() => {
    const savedHourlyIncome = localStorage.getItem('hourlyIncome');
    if (savedHourlyIncome) {
      setHourlyIncome(parseInt(savedHourlyIncome, 10));
    }
  }, []);

  const handlePurchase = () => {
    if (hourlyIncome === 0) {
      setHourlyIncome(10);
      localStorage.setItem('hourlyIncome', '10');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Mining</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <MiningOption
          title="Basic Miner"
          income={10}
          purchased={hourlyIncome >= 10}
          onPurchase={handlePurchase}
        />
        <MiningOption
          title="Advanced Miner"
          income={50}
          locked
        />
        <MiningOption
          title="Super Miner"
          income={100}
          locked
        />
        <MiningOption
          title="Mega Miner"
          income={500}
          locked
        />
      </div>
    </div>
  );
};

interface MiningOptionProps {
  title: string;
  income: number;
  locked?: boolean;
  purchased?: boolean;
  onPurchase?: () => void;
}

const MiningOption: React.FC<MiningOptionProps> = ({ title, income, locked, purchased, onPurchase }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${locked ? 'opacity-50' : ''}`}>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="mb-2">+{income} coins/hr</p>
      {locked ? (
        <div className="flex items-center justify-center bg-gray-200 p-2 rounded">
          <Lock size={20} className="mr-2" />
          <span>Locked</span>
        </div>
      ) : purchased ? (
        <div className="bg-green-500 text-white p-2 rounded text-center">Purchased</div>
      ) : (
        <button
          onClick={onPurchase}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Purchase
        </button>
      )}
    </div>
  );
};

export default MiningScreen;