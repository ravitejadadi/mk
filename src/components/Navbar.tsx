import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Mic, FileText, Download, Search, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'హోమ్', labelEn: 'Home', icon: Home },
    { path: '/voice-input', label: 'వాయిస్ ఇన్‌పుట్', labelEn: 'Voice Input', icon: Mic },
    { path: '/document-guidance', label: 'డాక్యుమెంట్ గైడెన్స్', labelEn: 'Document Guidance', icon: FileText },
    { path: '/download-forms', label: 'ఫారమ్‌లు డౌన్‌లోడ్', labelEn: 'Download Forms', icon: Download },
    { path: '/tracking', label: 'ట్రాకింగ్', labelEn: 'Tracking', icon: Search },
    { path: '/contact', label: 'సంప్రదింపు', labelEn: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">గ్ర</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">GramaDigiID</h1>
                <p className="text-xs text-gray-600">గ్రామ డిజిటల్ గుర్తింపు</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden lg:block">{item.label}</span>
                  <span className="lg:hidden">{item.labelEn}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon size={20} />
                  <div>
                    <div>{item.label}</div>
                    <div className="text-xs text-gray-500">{item.labelEn}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;