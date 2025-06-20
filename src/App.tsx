import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IOSStatusBar from './components/IOSStatusBar';
import IOSTabBar from './components/IOSTabBar';
import HomePage from './pages/HomePage';
import VoiceInputPage from './pages/VoiceInputPage';
import DocumentGuidancePage from './pages/DocumentGuidancePage';
import DownloadFormsPage from './pages/DownloadFormsPage';
import TrackingPage from './pages/TrackingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 max-w-sm mx-auto relative overflow-hidden">
        {/* iOS Status Bar */}
        <IOSStatusBar />
        
        {/* Main Content */}
        <main className="pb-20 pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/voice-input" element={<VoiceInputPage />} />
            <Route path="/document-guidance" element={<DocumentGuidancePage />} />
            <Route path="/download-forms" element={<DownloadFormsPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* iOS Tab Bar */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <IOSTabBar />
        </div>
      </div>
    </Router>
  );
}

export default App;