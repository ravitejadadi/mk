import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">గ్ర</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GramaDigiID</h3>
                <p className="text-sm text-gray-400">గ్రామ డిజిటల్ గుర్తింపు</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              గ్రామీణ తెలంగాణ పౌరులకు భూమి యాజమాన్య పత్రాలను డిజిటల్‌గా నిర్వహించడంలో సహాయపడుతోంది.
            </p>
            <p className="text-gray-400 text-xs">
              Empowering rural Telangana citizens with digital land document management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">త్వరిత లింక్‌లు</h4>
            <div className="space-y-2">
              <a href="/voice-input" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                వాయిస్ ఇన్‌పుట్ / Voice Input
              </a>
              <a href="/document-guidance" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                డాక్యుమెంట్ గైడెన్స్ / Document Guidance
              </a>
              <a href="/download-forms" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                ఫారమ్‌లు డౌన్‌లోడ్ / Download Forms
              </a>
              <a href="/tracking" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                ట్రాకింగ్ / Tracking
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">సంప్రదింపు వివరాలు</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">తెలంగాణ, భారతదేశం</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@gramadigid.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 GramaDigiID. సమస్త హక్కులు రక్షించబడ్డాయి.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>తెలంగాణ గ్రామాలకు</span>
              <Heart size={16} className="text-red-500" />
              <span>తో రూపొందించబడింది</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;