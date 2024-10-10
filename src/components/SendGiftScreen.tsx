import React, { useState } from 'react';
import { ArrowLeft, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SendGiftScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSendGift = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Send a Gift</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
        <Gift size={64} className="mx-auto mb-4 text-blue-500" />
        <h2 className="text-2xl font-bold mb-4">Send a gift to a friend</h2>
        <p className="text-gray-600 mb-6">Get an extra 10 coins for sending your first gift!</p>
        <button
          onClick={handleSendGift}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold w-full"
        >
          Send Gift
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
            <h3 className="text-xl font-bold mb-4">Gift Sent!</h3>
            <p className="mb-4">Your gift has been sent successfully. You've earned 10 extra coins!</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendGiftScreen;