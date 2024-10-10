import React, { useState, useEffect } from 'react';
import { X, Check, Instagram, Youtube, Twitter } from 'lucide-react';

interface PrizePopupProps {
  onClose: () => void;
}

const PrizePopup: React.FC<PrizePopupProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [requirements, setRequirements] = useState({
    instagram: false,
    tiktok: false,
    twitter: false,
    youtube: false,
    usdtAddress: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        let newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else if (newTime.minutes > 0) {
          newTime.minutes--;
          newTime.seconds = 59;
        } else if (newTime.hours > 0) {
          newTime.hours--;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (newTime.days > 0) {
          newTime.days--;
          newTime.hours = 23;
          newTime.minutes = 59;
          newTime.seconds = 59;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleRequirement = (req: keyof typeof requirements) => {
    setRequirements(prev => ({ ...prev, [req]: !prev[req] }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">$1,000,000 Prize</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        
        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Time Left to Participate:</h3>
          <div className="flex justify-around">
            <div>
              <span className="text-2xl font-bold">{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div>
              <span className="text-2xl font-bold">{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div>
              <span className="text-2xl font-bold">{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
            <div>
              <span className="text-2xl font-bold">{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
        <div className="space-y-2">
          <RequirementItem
            icon={<Instagram size={20} />}
            text="Follow on Instagram"
            completed={requirements.instagram}
            onClick={() => toggleRequirement('instagram')}
          />
          <RequirementItem
            icon={<span className="text-xl">🎵</span>}
            text="Follow on TikTok"
            completed={requirements.tiktok}
            onClick={() => toggleRequirement('tiktok')}
          />
          <RequirementItem
            icon={<Twitter size={20} />}
            text="Follow on Twitter"
            completed={requirements.twitter}
            onClick={() => toggleRequirement('twitter')}
          />
          <RequirementItem
            icon={<Youtube size={20} />}
            text="Subscribe on YouTube"
            completed={requirements.youtube}
            onClick={() => toggleRequirement('youtube')}
          />
          <RequirementItem
            icon={<span className="text-xl">💰</span>}
            text="Set USDT BEP20 Address"
            completed={requirements.usdtAddress}
            onClick={() => toggleRequirement('usdtAddress')}
          />
        </div>
      </div>
    </div>
  );
};

const RequirementItem: React.FC<{ icon: React.ReactNode; text: string; completed: boolean; onClick: () => void }> = ({ icon, text, completed, onClick }) => (
  <div className="flex items-center justify-between bg-gray-100 p-2 rounded" onClick={onClick}>
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
    {completed ? <Check size={20} className="text-green-500" /> : <X size={20} className="text-red-500" />}
  </div>
);

export default PrizePopup;