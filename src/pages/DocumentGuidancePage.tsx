import React, { useState } from 'react';
import { Brain, FileText, Search, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const DocumentGuidancePage = () => {
  const [query, setQuery] = useState('');
  const [guidance, setGuidance] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const commonQueries = [
    {
      query: 'పట్టా పత్రం కోసం ఏ ఫారమ్ అవసరం?',
      queryEn: 'Which form is needed for Patta document?',
      category: 'Land Title'
    },
    {
      query: 'భూమి విక్రయం కోసం ఏ పత్రాలు కావాలి?',
      queryEn: 'What documents are needed for land sale?',
      category: 'Land Sale'
    },
    {
      query: 'వారసత్వ భూమి బదిలీ ప్రక్రియ ఏమిటి?',
      queryEn: 'What is the inheritance land transfer process?',
      category: 'Inheritance'
    },
    {
      query: 'సర్వే నంబర్ తనఖా కోసం ఏ పత్రాలు అవసరం?',
      queryEn: 'What documents are needed for survey number mortgage?',
      category: 'Mortgage'
    }
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    // TODO: Integrate with OpenAI API for real AI guidance
    setTimeout(() => {
      setGuidance({
        summary: 'పట్టా పత్రం పొందడానికి మీరు ఈ దశలను అనుసరించాలి:',
        summaryEn: 'To obtain a Patta document, you need to follow these steps:',
        steps: [
          {
            step: 1,
            title: 'అప్లికేషన్ ఫారమ్ పూరణ',
            titleEn: 'Complete Application Form',
            description: 'పట్టా అప్లికేషన్ ఫారమ్‌ను పూరణ చేసి అవసరమైన వివరాలను నింపండి',
            descriptionEn: 'Fill out the Patta application form with required details',
            status: 'required'
          },
          {
            step: 2,
            title: 'అవసరమైన పత్రాలు',
            titleEn: 'Required Documents',
            description: 'గుర్తింపు ప్రమాణం, చిరునామా ప్రూఫ్, భూమి పత్రాలు సిద్ధం చేసుకోండి',
            descriptionEn: 'Prepare identity proof, address proof, and land documents',
            status: 'required'
          },
          {
            step: 3,
            title: 'వల్లేజ్ రెవిన్యూ ఆఫీసర్‌కు దరఖాస్తు',
            titleEn: 'Submit to Village Revenue Officer',
            description: 'స్థానిక VRO కార్యాలయంలో దరఖాస్తు మరియు పత్రాలను సమర్పించండి',
            descriptionEn: 'Submit application and documents at local VRO office',
            status: 'required'
          }
        ],
        requiredForms: [
          { name: 'పట్టా అప్లికేషン్ ఫారమ్', nameEn: 'Patta Application Form', code: 'FORM-PA-01' },
          { name: 'భూమి వివరాల ఫారమ్', nameEn: 'Land Details Form', code: 'FORM-LD-02' }
        ],
        estimatedTime: '15-30 దినాలు / 15-30 days',
        fees: '₹500 - ₹1,500 (భూమి విస్తీర్ణం ప్రకారం)',
        feesEn: '₹500 - ₹1,500 (based on land area)'
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleQuerySelect = (selectedQuery: string) => {
    setQuery(selectedQuery);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            AI డాక్యుమెంట్ గైడెన్స్ / AI Document Guidance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            మీ భూమి పత్రాలకు సంబంధించిన ప్రశ్న అడగండి. మా AI సిస్టమ్ మీకు వివరమైన గైడెన్స్ అందిస్తుంది.
          </p>
          <p className="text-base text-gray-500">
            Ask questions about your land documents. Our AI system will provide detailed guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">మీ ప్రశ్న అడగండి</h2>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="తెలుగులో లేదా ఇంగ్లీష్‌లో మీ ప్రశ్న టైప్ చేయండి... / Type your question in Telugu or English..."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
                  />
                  <Search className="absolute top-4 right-4 text-gray-400" size={20} />
                </div>

                <button
                  onClick={handleSearch}
                  disabled={!query.trim() || isLoading}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>ప్రాసెస్ చేస్తోంది...</span>
                    </>
                  ) : (
                    <>
                      <Brain size={20} />
                      <span>AI గైడెన्స్ పొందండి</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* AI Guidance Results */}
            {guidance && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={24} />
                    <h3 className="text-2xl font-bold text-gray-800">AI గైడెన्స్ రెసల్ట్</h3>
                  </div>

                  {/* Summary */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">సారాంశం / Summary</h4>
                    <p className="text-blue-700 mb-2">{guidance.summary}</p>
                    <p className="text-blue-600 text-sm">{guidance.summaryEn}</p>
                  </div>

                  {/* Steps */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">దశలవారీ ప్రక్రియ / Step-by-Step Process</h4>
                    <div className="space-y-4">
                      {guidance.steps.map((step: any, index: number) => (
                        <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-800 mb-1">{step.title}</h5>
                            <p className="text-sm text-gray-500 mb-2">{step.titleEn}</p>
                            <p className="text-gray-700 mb-1">{step.description}</p>
                            <p className="text-gray-600 text-sm">{step.descriptionEn}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required Forms */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">అవసరమైన ఫారమ్‌లు / Required Forms</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {guidance.requiredForms.map((form: any, index: number) => (
                        <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="text-green-600" size={20} />
                            <span className="font-medium text-green-800">{form.name}</span>
                          </div>
                          <p className="text-green-700 text-sm mb-2">{form.nameEn}</p>
                          <p className="text-green-600 text-xs font-mono">{form.code}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Info className="text-yellow-600" size={20} />
                        <span className="font-medium text-yellow-800">అంచనా సమయం</span>
                      </div>
                      <p className="text-yellow-700">{guidance.estimatedTime}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Info className="text-blue-600" size={20} />
                        <span className="font-medium text-blue-800">అంచనా ఫీజు</span>
                      </div>
                      <p className="text-blue-700 mb-1">{guidance.fees}</p>
                      <p className="text-blue-600 text-sm">{guidance.feesEn}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Common Queries Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                సాధారణ ప్రశ్నలు / Common Queries
              </h3>
              <div className="space-y-3">
                {commonQueries.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuerySelect(item.query)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                    <p className="text-sm font-medium text-gray-800 mb-1">{item.query}</p>
                    <p className="text-xs text-gray-600">{item.queryEn}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <AlertTriangle size={20} />
                <span className="font-bold">సలహా / Advice</span>
              </div>
              <p className="text-sm mb-3">
                ఏదైనా చట్టపరమైన సలహా కోసం స్థానిక రెవిన్యూ అధికారులను లేదా న్యాయవాదిని సంప్రదించండి.
              </p>
              <p className="text-xs opacity-90">
                For any legal advice, consult local revenue officials or a lawyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGuidancePage;