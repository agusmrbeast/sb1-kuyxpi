import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cat } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 3000); // Automatically navigate after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="mb-8 text-4xl font-bold text-center">
        <Cat size={64} className="mx-auto mb-4" />
        RaccooN
      </div>
      <div className="w-32 h-32 relative">
        <div className="w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          5
        </div>
      </div>
      <div className="mt-8 text-xl font-semibold">
        Tokens: 100
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;