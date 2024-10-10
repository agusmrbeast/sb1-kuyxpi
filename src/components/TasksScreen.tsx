import React from 'react';
import { ArrowLeft, Instagram, Twitter, Facebook, Twitch, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TasksScreen: React.FC = () => {
  const navigate = useNavigate();

  const tasks = [
    { icon: <Instagram size={24} />, name: 'Follow on Instagram', reward: 50 },
    { icon: <Twitter size={24} />, name: 'Follow on Twitter', reward: 40 },
    { icon: <Facebook size={24} />, name: 'Like Facebook Page', reward: 30 },
    { icon: <Twitch size={24} />, name: 'Follow on Twitch', reward: 60 },
    { icon: <Users size={24} />, name: 'Invite a Friend', reward: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-2xl font-bold ml-4">Tasks</h1>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskItem key={index} icon={task.icon} name={task.name} reward={task.reward} />
        ))}
      </div>
    </div>
  );
};

const TaskItem: React.FC<{ icon: React.ReactNode; name: string; reward: number }> = ({ icon, name, reward }) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
    <div className="flex items-center">
      {icon}
      <span className="ml-3 font-semibold">{name}</span>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
      <span className="mr-2">+{reward}</span>
      {name.includes('Invite') ? 'Invite' : 'Follow'}
    </button>
  </div>
);

export default TasksScreen;