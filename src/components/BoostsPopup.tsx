import React from 'react';
import { X, Zap } from 'lucide-react';

interface BoostsPopupProps {
  onClose: () => void;
}

const BoostsPopup: React.FC<BoostsPopupProps> = ({ onClose }) => {
  const boosts = [
    { name: '2x Coins', duration: '1 hour', price: 100 },
    { name: 'Auto-Click', duration: '30 minutes', price: 150 },
    { name: 'Super Speed', duration: '15 minutes', price: 200 },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Boosts</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        
        <div className="space-y-4">
          {boosts.map((boost, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              <div>
                <p className="font-semibold">{boost.name}</p>
                <p className="text-sm text-gray-600">{boost.duration}</p>
              </div>
              <button className="bg-purple-500 text-white px-3 py-1 rounded-lg flex items-center">
                <Zap size={16} className="mr-1" />
                {boost.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoostsPopup;