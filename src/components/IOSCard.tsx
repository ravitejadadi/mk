import React from 'react';
import { ChevronRight } from 'lucide-react';

interface IOSCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showChevron?: boolean;
}

const IOSCard = ({ children, className = '', onClick, showChevron = false }: IOSCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className} ${
        onClick ? 'active:bg-gray-50 transition-colors duration-150' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative">
        {children}
        {showChevron && (
          <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        )}
      </div>
    </div>
  );
};

export default IOSCard;