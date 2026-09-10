import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DocReader from './components/DocReader';
import CodePanel from './components/CodePanel';
import { q1Data } from './data/q1Data';

export default function App() {
  const [activeSection, setActiveSection] = useState('q1-api');
  const [activeTab, setActiveTab] = useState('docs');

  // Resizable Column Widths (px)
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [codeWidth, setCodeWidth] = useState(440);

  const isResizingSidebar = useRef(false);
  const isResizingCode = useRef(false);

  const handleMouseDownSidebar = () => {
    isResizingSidebar.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const handleMouseDownCode = () => {
    isResizingCode.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (isResizingSidebar.current) {
      const newWidth = Math.min(Math.max(180, e.clientX), 450);
      setSidebarWidth(newWidth);
    }
    if (isResizingCode.current) {
      const windowWidth = window.innerWidth;
      const newWidth = Math.min(Math.max(280, windowWidth - e.clientX), 650);
      setCodeWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingSidebar.current = false;
    isResizingCode.current = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  };

  return (
    <div
      className="app-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div
        className="portal-layout"
        style={{
          gridTemplateColumns: `${sidebarWidth}px 8px 1fr 8px ${codeWidth}px`
        }}
      >
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        <div
          className="resizer-handle"
          onMouseDown={handleMouseDownSidebar}
          title="Drag to resize sidebar"
        />

        <DocReader activeSection={activeSection} />

        <div
          className="resizer-handle"
          onMouseDown={handleMouseDownCode}
          title="Drag to resize code panel"
        />

        <CodePanel q1Data={q1Data} activeSection={activeSection} />
      </div>
    </div>
  );
}
