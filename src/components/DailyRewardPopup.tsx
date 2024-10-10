import React from 'react';
import { X, Gift } from 'lucide-react';

interface DailyRewardPopupProps {
  onClose: () => void;
}

const DailyRewardPopup: React.FC<DailyRewardPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Daily Reward</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        
        <div className="text-center mb-6">
          <Gift size={64} className="mx-auto text-yellow-500 mb-4" />
          <p className="text-lg font-semibold">Your daily reward is ready!</p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold"
        >
          Claim Reward
        </button>
      </div>
    </div>
  );
};

export default DailyRewardPopup;