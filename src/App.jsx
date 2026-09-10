import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DocReader from './components/DocReader';
import CodePanel from './components/CodePanel';
import { q1Data } from './data/q1Data';

export default function App() {
  const [activeSection, setActiveSection] = useState('q1-api');
  const [activeTab, setActiveTab] = useState('docs');

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="portal-layout">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <DocReader activeSection={activeSection} />
        <CodePanel q1Data={q1Data} activeSection={activeSection} />
      </div>
    </div>
  );
}
