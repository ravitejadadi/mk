import React, { useState } from 'react';
import { Mic, MicOff, Upload, Play, Pause, Volume2, FileAudio, CheckCircle } from 'lucide-react';
import IOSNavbar from '../components/IOSNavbar';
import IOSCard from '../components/IOSCard';
import IOSButton from '../components/IOSButton';

const VoiceInputPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setTranscript('ఇది నమూనా టెక్స్ట్. నేను నా భూమి పత్రాలకు సంబంధించిన సమస్యకు పరిష్కారం కావాలి.');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      setTranscript('');
    }
  };

  const processAudio = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setTranscript('నేను నా భూమికి సంబంధించిన పట్టా పత్రం కావాలి. దానికి ఏ ఫారమ్ వేయాలో తెలియజేయండి.');
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <IOSNavbar title="Voice Input" titleTe="వాయిస్ ఇన్‌పుట్" showBack />
      
      <div className="px-4 py-6 space-y-6">
        {/* Recording Section */}
        <IOSCard className="p-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mic className="text-green-600" size={20} />
              <h2 className="text-lg font-bold text-gray-900">లైవ్ రికార్డింగ్</h2>
            </div>

            <div className="relative flex justify-center">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform transition-all duration-300 ${
                  isRecording
                    ? 'bg-red-500 scale-110 animate-pulse'
                    : 'bg-green-500 active:scale-95'
                }`}
              >
                {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
              </button>
              
              {isRecording && (
                <div className="absolute -inset-2 rounded-full border-2 border-red-300 animate-ping"></div>
              )}
            </div>

            <div className="space-y-1">
              <p className="font-medium text-gray-700">
                {isRecording ? 'రికార్డింగ్ చేస్తోంది...' : 'రికార్డింగ్ ప్రారంభించండి'}
              </p>
              <p className="text-sm text-gray-500">
                {isRecording ? 'Recording in progress...' : 'Tap to start recording'}
              </p>
            </div>
          </div>
        </IOSCard>

        {/* File Upload Section */}
        <IOSCard className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Upload className="text-blue-600" size={20} />
              <h2 className="text-lg font-bold text-gray-900">ఫైల్ అప్‌లోడ్</h2>
            </div>

            <label className="block">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 active:bg-gray-50 transition-colors duration-150">
                <FileAudio size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="font-medium text-gray-700">ఆడియో ఫైల్ అప్‌లోడ్ చేయండి</p>
                <p className="text-sm text-gray-500">MP3, WAV, M4A supported</p>
              </div>
            </label>

            {audioFile && (
              <div className="bg-green-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm font-medium text-green-700">
                    {audioFile.name}
                  </span>
                </div>
                
                <IOSButton
                  onClick={processAudio}
                  disabled={isProcessing}
                  fullWidth
                  size="small"
                >
                  {isProcessing ? 'ప్రాసెస్ చేస్తోంది...' : 'ప్రాసెస్ చేయండి'}
                </IOSButton>
              </div>
            )}
          </div>
        </IOSCard>

        {/* Transcript Section */}
        {transcript && (
          <IOSCard className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileAudio className="text-green-600" size={20} />
                <h3 className="text-lg font-bold text-gray-900">ట్రాన్‌స్క్రిప్ట్</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 leading-relaxed mb-3">
                  {transcript}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>ట్రాన్‌స్క्रिప్షన్ పూర్తయ్యింది</span>
                </div>
              </div>

              <div className="space-y-2">
                <IOSButton fullWidth>
                  AI గైడెన్స్ పొందండి
                </IOSButton>
                <IOSButton variant="secondary" fullWidth>
                  కొత్త రికార్డింగ్
                </IOSButton>
              </div>
            </div>
          </IOSCard>
        )}

        {/* Tips */}
        <IOSCard className="p-4 bg-blue-50">
          <div className="flex items-start space-x-3">
            <Volume2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="text-sm font-medium text-blue-800 mb-1">సలహా:</p>
              <p className="text-sm text-blue-700">
                స్పష్టంగా మరియు నెమ్మదిగా మాట్లాడండి. మీ సమస్యను వివరంగా చెప్పండి.
              </p>
            </div>
          </div>
        </IOSCard>
      </div>
    </div>
  );
};

export default VoiceInputPage;