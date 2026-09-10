import React from 'react';
import { Search, ExternalLink } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="portal-header">
      <div className="brand-container">
        <img
          src="https://files.readme.io/da7b2dc64d4a666d8005c028e556f4c61f76b151b06819bdf2ecd62c52e31b56-small-image_65_1.jpg"
          alt="Liminal Vaults"
          className="brand-logo"
        />
        <select className="version-select">
          <option>Wallet v1</option>
          <option>Wallet v2 (REST)</option>
        </select>
      </div>

      <nav className="header-nav">
        <span
          className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </span>
        <span
          className={`nav-link ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('q1-api')}
        >
          Documentation
        </span>
        <span
          className={`nav-link ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => setActiveTab('q1-api')}
        >
          API Reference
        </span>
        <span
          className={`nav-link ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('q4-portfolio')}
        >
          Portfolio
        </span>
        <a
          href="https://prakash92.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Live Portfolio <ExternalLink size={14} />
        </a>

        <button className="search-btn">
          <Search size={14} />
          <span>Search</span>
          <kbd className="kbd-badge">⌘K</kbd>
        </button>
      </nav>
    </header>
  );
}
