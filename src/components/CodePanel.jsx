import React, { useState } from 'react';
import { Copy, Check, Play, ChevronDown } from 'lucide-react';

export default function CodePanel({ q1Data, activeSection }) {
  const [lang, setLang] = useState('curl');
  const [status, setStatus] = useState('201');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyRes = () => {
    navigator.clipboard.writeText(getResponseJson());
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 2000);
  };

  const renderCodeWithLineNumbers = (codeText) => {
    const lines = codeText.split('\n');
    return (
      <div className="numbered-code-wrapper">
        <div className="line-numbers-col">
          {lines.map((_, i) => (
            <div key={i} className="line-num">{i + 1}</div>
          ))}
        </div>
        <pre className="code-lines-col">
          <code>{codeText}</code>
        </pre>
      </div>
    );
  };

  return (
    <aside className="code-pane-col">
      {/* Request Card */}
      <div className="interactive-card">
        <div className="card-top-bar">
          <div className="lang-selector">
            <span className="card-title-pill">cURL Request <ChevronDown size={12} style={{ display: 'inline', marginLeft: 2 }} /></span>
            <div className="lang-tab-group">
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
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="card-title-pill">Examples <ChevronDown size={12} style={{ display: 'inline', marginLeft: 2 }} /></span>
            <button className="copy-btn" onClick={handleCopyCode} title="Copy Code">
              {copiedCode ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <div className="credentials-box">
          <span className="auth-label">BASIC AUTH</span>
          <div className="auth-inputs">
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
        </div>

        <div className="code-box">
          {renderCodeWithLineNumbers(getCodeSnippet())}
        </div>

        <div className="card-footer-bar">
          <button className="try-it-btn">
            <span>Try It!</span>
          </button>
        </div>
      </div>

      {/* Response Card */}
      <div className="interactive-card" style={{ marginTop: '20px' }}>
        <div className="response-header-bar">
          <div className="status-dropdown-wrapper">
            <span className={`status-pill status-${status}`}>
              ● {status} <ChevronDown size={12} style={{ display: 'inline', marginLeft: 2 }} />
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="status-toggle">
              <button
                className={`status-btn ${status === '201' ? 'active-201' : ''}`}
                onClick={() => setStatus('201')}
              >
                201
              </button>
              <button
                className={`status-btn ${status === '422' ? 'active-422' : ''}`}
                onClick={() => setStatus('422')}
              >
                422
              </button>
              <button
                className={`status-btn ${status === '400' ? 'active-400' : ''}`}
                onClick={() => setStatus('400')}
              >
                400
              </button>
            </div>

            <button className="copy-btn" onClick={handleCopyRes} title="Copy Response">
              {copiedRes ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <div className="code-box">
          {renderCodeWithLineNumbers(getResponseJson())}
        </div>
      </div>
    </aside>
  );
}

