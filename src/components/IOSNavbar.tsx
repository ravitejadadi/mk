import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface IOSNavbarProps {
  title: string;
  titleTe: string;
  showBack?: boolean;
}

const IOSNavbar = ({ title, titleTe, showBack = false }: IOSNavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="w-8">
        {showBack && location.pathname !== '/' && (
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 font-medium"
          >
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      
      <div className="flex-1 text-center">
        <h1 className="text-lg font-semibold text-gray-900">{titleTe}</h1>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
      
      <div className="w-8 flex justify-end">
        <button className="text-blue-500">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default IOSNavbar;