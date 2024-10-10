import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ConfigurationPopupProps {
  onClose: () => void;
}

const ConfigurationPopup: React.FC<ConfigurationPopupProps> = ({ onClose }) => {
  const [usdtAddress, setUsdtAddress] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    // Save the configuration
    localStorage.setItem('usdtAddress', usdtAddress);
    localStorage.setItem('language', language);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Configuration</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value="Username"
            disabled
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">USDT BEP20 Address</label>
          <input
            type="text"
            value={usdtAddress}
            onChange={(e) => setUsdtAddress(e.target.value)}
            placeholder="Enter USDT BEP20 address"
            className="w-full p-2 border rounded-md"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ConfigurationPopup;