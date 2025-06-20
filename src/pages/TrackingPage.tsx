import React, { useState } from 'react';
import { Search, CheckCircle, Clock, AlertCircle, User, Calendar, MapPin } from 'lucide-react';
import IOSNavbar from '../components/IOSNavbar';
import IOSCard from '../components/IOSCard';
import IOSButton from '../components/IOSButton';

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setTrackingResult({
        id: trackingId,
        applicantName: 'రాజేష్ కుమార్',
        applicantNameEn: 'Rajesh Kumar',
        formType: 'పట్టా అప్లికేషన్',
        formTypeEn: 'Patta Application',
        submissionDate: '2025-01-15',
        currentStatus: 'under_review',
        estimatedCompletion: '2025-02-10',
        office: 'వరంగల్ VRO కార్యాలయం',
        officeEn: 'Warangal VRO Office',
        timeline: [
          {
            status: 'submitted',
            statusTe: 'దాఖలు చేయబడింది',
            statusEn: 'Submitted',
            date: '2025-01-15',
            completed: true,
            description: 'అప్లికేషన్ విజయవంతంగా దాఖలు చేయబడింది'
          },
          {
            status: 'document_verification',
            statusTe: 'పత్రాల తనిఖీ',
            statusEn: 'Document Verification',
            date: '2025-01-18',
            completed: true,
            description: 'అవసరమైన పత్రాలు తనిఖీ చేయబడ్డాయి'
          },
          {
            status: 'under_review',
            statusTe: 'సమీక్షలో',
            statusEn: 'Under Review',
            date: '2025-01-22',
            completed: true,
            description: 'అప్లికేషన్ అధికారి సమీక్షలో ఉంది'
          },
          {
            status: 'field_verification',
            statusTe: 'క్షేత్ర తనిఖీ',
            statusEn: 'Field Verification',
            date: 'Pending',
            completed: false,
            description: 'భూమి క్షేత్ర తనిఖీ పెండింగ్‌లో ఉంది'
          }
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const sampleIds = ['GD2025001234', 'GD2025001198', 'GD2025001067'];

  return (
    <div className="min-h-screen">
      <IOSNavbar title="Application Tracking" titleTe="అప్లికేషన్ ట్రాకింగ్" showBack />
      
      <div className="px-4 py-6 space-y-6">
        {/* Tracking Input */}
        <IOSCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="text-blue-600" size={20} />
              <h2 className="text-lg font-bold text-gray-900">ట్రాకింగ్ ID ఎంటర్ చేయండి</h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="మీ ట్రాకింగ్ ID (ఉదా: GD2025001234)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center font-mono"
              />

              <IOSButton
                onClick={handleTrack}
                disabled={!trackingId.trim() || isLoading}
                fullWidth
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>ట్రాక్ చేస్తోంది...</span>
                  </div>
                ) : (
                  'స్థితి తనిఖీ చేయండి'
                )}
              </IOSButton>
            </div>

            {/* Sample IDs */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 mb-2">నమూనా IDs:</p>
              <div className="flex flex-wrap gap-2">
                {sampleIds.map((id, index) => (
                  <button
                    key={index}
                    onClick={() => setTrackingId(id)}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full active:bg-blue-100 transition-colors duration-150 font-mono"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </IOSCard>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="space-y-4">
            {/* Application Info */}
            <IOSCard className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">అప్లికేషన్ వివరాలు</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="text-blue-500" size={16} />
                    <div>
                      <p className="text-sm text-gray-500">దరఖాస్తుదారు</p>
                      <p className="font-medium text-gray-900">{trackingResult.applicantName}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="text-green-500" size={16} />
                    <div>
                      <p className="text-sm text-gray-500">దాఖలు చేసిన తేదీ</p>
                      <p className="font-medium text-gray-900">{trackingResult.submissionDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="text-purple-500" size={16} />
                    <div>
                      <p className="text-sm text-gray-500">కార్యాలయం</p>
                      <p className="font-medium text-gray-900">{trackingResult.office}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-600" size={16} />
                    <span className="text-sm font-medium text-blue-800">అంచనా పూర్తి తేదీ</span>
                  </div>
                  <p className="text-blue-700 font-medium mt-1">{trackingResult.estimatedCompletion}</p>
                </div>
              </div>
            </IOSCard>

            {/* Timeline */}
            <IOSCard className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">ప్రగతి టైమ్‌లైన్</h3>

              <div className="space-y-4">
                {trackingResult.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? 'bg-green-500 text-white' 
                          : index === trackingResult.timeline.findIndex((s: any) => !s.completed)
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <CheckCircle size={16} />
                        ) : index === trackingResult.timeline.findIndex((s: any) => !s.completed) ? (
                          <Clock size={16} />
                        ) : (
                          <AlertCircle size={16} />
                        )}
                      </div>
                      {index < trackingResult.timeline.length - 1 && (
                        <div className={`w-0.5 h-8 mt-1 ${
                          step.completed ? 'bg-green-300' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>

                    <div className="flex-1 pb-4">
                      <h4 className="font-semibold text-gray-900">{step.statusTe}</h4>
                      <p className="text-sm text-gray-500 mb-1">{step.statusEn}</p>
                      <p className="text-sm text-gray-600">{step.description}</p>
                      {step.date !== 'Pending' && (
                        <p className="text-xs text-gray-500 mt-1">📅 {step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </IOSCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;