
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ReportForm from './components/ReportForm';
import SuccessScreen from './components/SuccessScreen';
import Dashboard from './components/Dashboard';
import { CrimeReport } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'report' | 'dashboard'>('home');
  const [lastReport, setLastReport] = useState<CrimeReport | null>(null);
  const [reports, setReports] = useState<CrimeReport[]>([]);

  const handleReportSubmit = (report: CrimeReport) => {
    setReports(prev => [report, ...prev]);
    setLastReport(report);
    setActiveTab('home'); // Show success logic through modal or state
  };

  const handleCompleteSuccess = () => {
    setLastReport(null);
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} onNavigate={setActiveTab} />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        {activeTab === 'home' && !lastReport && (
          <LandingPage onStartReport={() => setActiveTab('report')} />
        )}
        
        {activeTab === 'report' && (
          <ReportForm onSubmit={handleReportSubmit} onCancel={() => setActiveTab('home')} />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard reports={reports} />
        )}

        {lastReport && (
          <SuccessScreen report={lastReport} onDismiss={handleCompleteSuccess} />
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <div className="container mx-auto">
          <p className="mb-2 font-semibold text-slate-300">Nigeria Police Force - RePolice Initiative</p>
          <p>&copy; {new Date().getFullYear()} Official Digital Response Unit. For emergencies, call 112 or 911.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
