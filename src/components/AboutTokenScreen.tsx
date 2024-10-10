import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutTokenScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">About Token</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">RaccooN Token</h2>
        <p className="mb-4">
          RaccooN Token is the native cryptocurrency of the RaccooN ecosystem. It's designed to reward users for their engagement and participation in the RaccooN app.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Earn tokens through daily tasks and mining</li>
          <li>Use tokens to purchase in-game items and boosts</li>
          <li>Trade tokens with other users</li>
          <li>Stake tokens for additional rewards</li>
        </ul>
        <p className="mb-4">
          The total supply of RaccooN Tokens is limited to ensure scarcity and maintain value over time.
        </p>
        <p className="text-sm text-gray-600">
          Note: RaccooN Tokens have no monetary value and are for in-game use only.
        </p>
      </div>
    </div>
  );
};

export default AboutTokenScreen;