import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

const IOSStatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-sm font-medium">
      <div className="flex items-center space-x-1">
        <span>{currentTime}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Signal size={16} />
        <Wifi size={16} />
        <Battery size={16} />
        <span className="text-xs">100%</span>
      </div>
    </div>
  );
};

export default IOSStatusBar;