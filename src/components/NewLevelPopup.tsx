import React from 'react';
import { Cat, X } from 'lucide-react';

interface NewLevelPopupProps {
  onClose: () => void;
}

const NewLevelPopup: React.FC<NewLevelPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-end">
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Level Up!</h2>
        <div className="flex justify-center mb-4">
          <Cat size={64} className="text-blue-500" />
        </div>
        <p className="text-center text-lg mb-6">Congratulations! You've reached a new level!</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NewLevelPopup;