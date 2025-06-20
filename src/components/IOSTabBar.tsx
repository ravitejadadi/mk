import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Mic, FileText, Download, Search } from 'lucide-react';

const IOSTabBar = () => {
  const location = useLocation();

  const tabs = [
    { path: '/', icon: Home, label: 'హోమ్', labelEn: 'Home' },
    { path: '/voice-input', icon: Mic, label: 'వాయిస్', labelEn: 'Voice' },
    { path: '/document-guidance', icon: FileText, label: 'గైడెన్స్', labelEn: 'Guide' },
    { path: '/download-forms', icon: Download, label: 'ఫారమ్‌లు', labelEn: 'Forms' },
    { path: '/tracking', icon: Search, label: 'ట్రాకింగ్', labelEn: 'Track' },
  ];

  return (
    <div className="bg-white border-t border-gray-200 px-2 py-1 safe-area-bottom">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              <Icon size={24} className={isActive ? 'text-blue-500' : 'text-gray-400'} />
              <span className="text-xs font-medium mt-1">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default IOSTabBar;