import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, FileText, Download, Search, ArrowRight, Users, Shield, Zap } from 'lucide-react';
import IOSNavbar from '../components/IOSNavbar';
import IOSCard from '../components/IOSCard';
import IOSButton from '../components/IOSButton';

const HomePage = () => {
  const features = [
    {
      icon: Mic,
      title: 'వాయిస్ ఇన్‌పుట్',
      titleEn: 'Voice Input',
      description: 'తెలుగులో మాట్లాడండి',
      descriptionEn: 'Speak in Telugu',
      link: '/voice-input',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'డాక్యుమెంట్ గైడెన్స్',
      titleEn: 'Document Guidance',
      description: 'AI సహాయం పొందండి',
      descriptionEn: 'Get AI assistance',
      link: '/document-guidance',
      color: 'bg-blue-500'
    },
    {
      icon: Download,
      title: 'ఫారమ్‌లు డౌన్‌లోడ్',
      titleEn: 'Download Forms',
      description: 'అధికారిక ఫారమ్‌లు',
      descriptionEn: 'Official forms',
      link: '/download-forms',
      color: 'bg-purple-500'
    },
    {
      icon: Search,
      title: 'అప్లికేషన్ ట్రాకింగ్',
      titleEn: 'Application Tracking',
      description: 'స్థితి తనిఖీ చేయండి',
      descriptionEn: 'Check status',
      link: '/tracking',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'వినియోగదారులు', labelEn: 'Users' },
    { icon: FileText, value: '25K+', label: 'దస్త్రాలు', labelEn: 'Documents' },
    { icon: Shield, value: '99.9%', label: 'సురక్షితం', labelEn: 'Secure' },
  ];

  return (
    <div className="min-h-screen">
      <IOSNavbar title="GramaDigiID" titleTe="గ్రామ డిజిటల్ గుర్తింపు" />
      
      <div className="px-4 py-6 space-y-6">
        {/* Hero Section */}
        <IOSCard className="p-6 bg-gradient-to-br from-green-500 to-blue-600 text-white">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold">గ్ర</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">గ్రామ డిజిటల్ గుర్తింపు</h1>
              <p className="text-green-100 text-sm mt-1">GramaDigiID Platform</p>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              భూమి పత్రాలను డిజిటల్‌గా నిర్వహించండి
            </p>
            <Link to="/voice-input">
              <IOSButton variant="secondary" fullWidth>
                <div className="flex items-center justify-center space-x-2">
                  <Mic size={20} />
                  <span>వాయిస్‌తో ప్రారంభించండి</span>
                </div>
              </IOSButton>
            </Link>
          </div>
        </IOSCard>

        {/* Features Grid */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 px-2">మా సేవలు</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link}>
                  <IOSCard className="p-4 h-32 active:scale-95 transition-transform duration-150">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-xs text-gray-500">{feature.titleEn}</p>
                      </div>
                    </div>
                  </IOSCard>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <IOSCard className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">మా విజయ గాథ</h3>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </IOSCard>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 px-2">త్వరిత చర్యలు</h3>
          <div className="space-y-2">
            <Link to="/voice-input">
              <IOSCard className="p-4" showChevron>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mic size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">వాయిస్ రికార్డింగ్</h4>
                    <p className="text-sm text-gray-500">తెలుగులో మాట్లాడండి</p>
                  </div>
                </div>
              </IOSCard>
            </Link>
            
            <Link to="/tracking">
              <IOSCard className="p-4" showChevron>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Search size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">అప్లికేషన్ ట్రాకింగ్</h4>
                    <p className="text-sm text-gray-500">స్థితి తనిఖీ చేయండి</p>
                  </div>
                </div>
              </IOSCard>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;