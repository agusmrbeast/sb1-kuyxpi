import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FriendsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Invite Friends</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Get 20% of your friends' earnings!</h2>
        <p className="text-gray-600 mb-6">Invite your friends and earn a percentage of their in-game earnings. The more friends you invite, the more you earn!</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center w-full">
          <Share2 size={24} className="mr-2" />
          Invite Friend
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Share via:</h3>
        <div className="flex justify-around">
          <SocialButton name="WhatsApp" color="bg-green-500" />
          <SocialButton name="Messenger" color="bg-blue-600" />
          <SocialButton name="Telegram" color="bg-blue-400" />
        </div>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <button className={`${color} text-white px-4 py-2 rounded-lg`}>
    {name}
  </button>
);

export default FriendsScreen;