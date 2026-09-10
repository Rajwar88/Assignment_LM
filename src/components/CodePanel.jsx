import React, { useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';

export default function CodePanel({ q1Data, activeSection }) {
  const [lang, setLang] = useState('curl');
  const [status, setStatus] = useState('201');
  const [copied, setCopied] = useState(false);

  const getCodeSnippet = () => {
    if (activeSection === 'q1-api') {
      return q1Data.snippets[lang] || q1Data.snippets.curl;
    }
    if (activeSection === 'q3-transfers-get' || activeSection === 'q3-rest-redesign') {
      return `curl --request GET \\
  --url https://docs.lmnl.app/v2/transfers?wallet_id=vlt_892341029384&limit=50 \\
  --header 'Authorization: Bearer your_api_token'`;
    }
    if (activeSection === 'q3-batch-post') {
      return `curl --request POST \\
  --url https://docs.lmnl.app/v2/transfers/batch \\
  --header 'Authorization: Bearer your_api_token' \\
  --header 'Idempotency-Key: 7b9e4a12-8c3d-4f5e-9a1b-2c3d4e5f6a7b' \\
  --header 'Content-Type: application/json' \\
  --data '{"wallet_id": "vlt_892341029384", "recipients": [{"destination_address": "0x71C76...", "amount": "1.5"}]}'`;
    }
    return q1Data.snippets.curl;
  };

  const getResponseJson = () => {
    if (activeSection === 'q1-api') {
      return q1Data.responses[status] || q1Data.responses['201'];
    }
    return `{
  "object": "list",
  "data": [
    {
      "id": "trsf_90812349120",
      "wallet_id": "vlt_892341029384",
      "amount": "1.500000",
      "asset": "ETH",
      "status": "COMPLETED"
    }
  ]
}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="code-pane-col">
      <div className="interactive-card">
        <div className="card-top-bar">
          <div className="lang-selector">
            <button
              className={`lang-tab ${lang === 'curl' ? 'active' : ''}`}
              onClick={() => setLang('curl')}
            >
              cURL
            </button>
            <button
              className={`lang-tab ${lang === 'node' ? 'active' : ''}`}
              onClick={() => setLang('node')}
            >
              Node
            </button>
            <button
              className={`lang-tab ${lang === 'python' ? 'active' : ''}`}
              onClick={() => setLang('python')}
            >
              Python
            </button>
            <button
              className={`lang-tab ${lang === 'go' ? 'active' : ''}`}
              onClick={() => setLang('go')}
            >
              Go
            </button>
          </div>

          <button className="copy-btn" onClick={handleCopy}>
            {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="credentials-box">
          <span style={{ color: '#94a3b8', fontWeight: 600 }}>BASIC AUTH</span>
          <input
            className="input-field"
            type="text"
            placeholder="api_key_username"
            defaultValue="kishor_family1office"
          />
          <input
            className="input-field"
            type="password"
            placeholder="api_secret"
            defaultValue="••••••••••••"
          />
        </div>

        <div className="code-box">{getCodeSnippet()}</div>

        <button className="try-it-btn">
          <Play size={14} />
          <span>Try It Out!</span>
        </button>
      </div>

      <div className="interactive-card">
        <div className="response-header-bar">
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
            RESPONSE PAYLOADS
          </span>

          <div className="status-toggle">
            <button
              className={`status-btn ${status === '201' ? 'active-201' : ''}`}
              onClick={() => setStatus('201')}
            >
              201 Created
            </button>
            <button
              className={`status-btn ${status === '422' ? 'active-422' : ''}`}
              onClick={() => setStatus('422')}
            >
              422 Threat Blocked
            </button>
            <button
              className={`status-btn ${status === '400' ? 'active-400' : ''}`}
              onClick={() => setStatus('400')}
            >
              400 Bad Request
            </button>
          </div>
        </div>

        <div className="code-box">{getResponseJson()}</div>
      </div>
    </aside>
  );
}
