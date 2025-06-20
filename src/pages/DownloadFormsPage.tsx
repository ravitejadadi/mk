import React, { useState } from 'react';
import { Download, FileText, Search, Filter, Star, ExternalLink } from 'lucide-react';

const DownloadFormsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'అన్నీ', nameEn: 'All' },
    { id: 'patta', name: 'పట్టా', nameEn: 'Patta' },
    { id: 'sale', name: 'అమ్మకం', nameEn: 'Sale' },
    { id: 'inheritance', name: 'వారసత్వం', nameEn: 'Inheritance' },
    { id: 'mortgage', name: 'తనఖా', nameEn: 'Mortgage' },
    { id: 'survey', name: 'సర్వే', nameEn: 'Survey' }
  ];

  const forms = [
    {
      id: 1,
      name: 'పట్టా అప్లికేషన్ ఫారమ్',
      nameEn: 'Patta Application Form',
      description: 'భూమి యాజమాన్య హక్కుల కోసం అప్లికేషన్ ఫారమ్',
      descriptionEn: 'Application form for land ownership rights',
      category: 'patta',
      code: 'TS-PATTA-001',
      language: 'Telugu & English',
      pages: 3,
      fileSize: '245 KB',
      downloads: 12500,
      isPopular: true,
      pdfUrl: '#' // TODO: Add actual PDF links
    },
    {
      id: 2,
      name: 'భूमि అమ్మకం ఫారమ్',
      nameEn: 'Land Sale Form',
      description: 'భూమి అమ్మకానికి అవసరమైన ఫారమ్',
      descriptionEn: 'Required form for land sale transactions',
      category: 'sale',
      code: 'TS-SALE-002',
      language: 'Telugu & English',
      pages: 5,
      fileSize: '380 KB',
      downloads: 9800,
      isPopular: true,
      pdfUrl: '#'
    },
    {
      id: 3,
      name: 'వారసత్వ బదిলీ ఫారమ్',
      nameEn: 'Inheritance Transfer Form',
      description: 'వారసత్వ భూమి బదిలీ కోసం ఫారమ్',
      descriptionEn: 'Form for inheritance land transfer',
      category: 'inheritance',
      code: 'TS-INHERIT-003',
      language: 'Telugu & English',
      pages: 4,
      fileSize: '320 KB',
      downloads: 7200,
      isPopular: false,
      pdfUrl: '#'
    },
    {
      id: 4,
      name: 'తనఖా అప్లికేషన్ ఫారమ్',
      nameEn: 'Mortgage Application Form',
      description: 'భూమి తనఖా కోసం అప్లికేషన్',
      descriptionEn: 'Application for land mortgage',
      category: 'mortgage',
      code: 'TS-MORTGAGE-004',
      language: 'Telugu & English',
      pages: 6,
      fileSize: '450 KB',
      downloads: 5600,
      isPopular: false,
      pdfUrl: '#'
    },
    {
      id: 5,
      name: 'సర్వే నంబర్ వెరిఫికేషన్ ఫారమ్',
      nameEn: 'Survey Number Verification Form',
      description: 'సర్వే నంబర్ తనిఖీ కోసం ఫారమ్',
      descriptionEn: 'Form for survey number verification',
      category: 'survey',
      code: 'TS-SURVEY-005',
      language: 'Telugu & English',
      pages: 2,
      fileSize: '180 KB',
      downloads: 4300,
      isPopular: false,
      pdfUrl: '#'
    },
    {
      id: 6,
      name: 'భूमि వివరాల ఫారమ్',
      nameEn: 'Land Details Form',
      description: 'భూమి వివరాలు నింపడానికి ఫారమ్',
      descriptionEn: 'Form to fill land details',
      category: 'patta',
      code: 'TS-DETAILS-006',
      language: 'Telugu & English',
      pages: 3,
      fileSize: '275 KB',
      downloads: 8900,
      isPopular: true,
      pdfUrl: '#'
    }
  ];

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.code.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (form: any) => {
    // TODO: Implement actual PDF download
    console.log(`Downloading form: ${form.name}`);
    // In production, this would link to actual PDF files
    window.open(form.pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            ఫారమ్‌లు డౌన్‌లోడ్ / Download Forms
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            భూమి పత్రాలకు అవసరమైన అధికారిక ఫారమ్‌లను డౌన్‌లోడ్ చేసుకోండి. అన్ని ఫారమ్‌లు తెలుగు మరియు ఇంగ్లీష్‌లో అందుబాటులో ఉన్నాయి.
          </p>
          <p className="text-base text-gray-500">
            Download official forms required for land documents. All forms are available in Telugu and English.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ఫారమ్ పేరు లేదా కోడ్ శోధించండి... / Search form name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64 relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} / {category.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">ఫలితాలు: {filteredForms.length} ఫారమ్‌లు</span>
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form) => (
            <div key={form.id} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="text-blue-600" size={20} />
                      {form.isPopular && (
                        <Star className="text-yellow-500 fill-current" size={16} />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {form.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {form.nameEn}
                    </p>
                    <p className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {form.code}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    {form.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {form.descriptionEn}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>భాష / Language:</span>
                    <span className="font-medium">{form.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>పేజీలు / Pages:</span>
                    <span className="font-medium">{form.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ఫైల్ సైజ్ / Size:</span>
                    <span className="font-medium">{form.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>డౌన్‌లోడ్‌లు:</span>
                    <span className="font-medium">{form.downloads.toLocaleString()}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(form)}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 group"
                >
                  <Download size={20} />
                  <span>డౌన్‌లోడ్ చేయండి</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              ఫారమ్‌లు కనుగొనబడలేదు
            </h3>
            <p className="text-gray-500">
              మీ శోధన ప్రమాణాలకు సరిపోలే ఫారమ్‌లు లేవు. దయచేసి వేరే కీవర్డ్‌తో ప్రయత్నించండి.
            </p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-blue-800">
              సహాయం కావాలా? / Need Help?
            </h3>
            <p className="text-blue-700 max-w-2xl mx-auto">
              ఫారమ్ పూరణలో సహాయం కావాలంటే మా డాక్యుమెంట్ గైడెన్స్ సేవను ఉపయోగించండి లేదా సపోర్ట్ టీమ్‌ను సంప్రదించండి.
            </p>
            <p className="text-blue-600 text-sm">
              For help with form completion, use our Document Guidance service or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                డాక్యుమెంట్ గైడెన్స్
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                సంప్రదించండి
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFormsPage;