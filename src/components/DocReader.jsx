import React from 'react';
import { Shield, AlertCircle, CheckCircle, ExternalLink, Award, Sparkles } from 'lucide-react';
import { q1Data } from '../data/q1Data';
import { q2Data } from '../data/q2Data';
import { q3Data } from '../data/q3Data';
import { q4Data } from '../data/q4Data';

export default function DocReader({ activeSection }) {
  if (activeSection === 'q2-solana-staking') {
    return (
      <main className="doc-reader-col">
        <h1 className="doc-title">{q2Data.title}</h1>
        <p className="doc-subtitle">{q2Data.subtitle}</p>

        <div className="info-alert">
          <div className="info-alert-title">
            <Sparkles size={16} />
            <span>{q2Data.alert.title}</span>
          </div>
          <div className="info-alert-body">{q2Data.alert.body}</div>
        </div>

        <h2 className="section-title">Part A: In-Depth Audit Matrix (8 Identified Gaps)</h2>
        <table className="param-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Improvement Area</th>
              <th>Identified Gap in Original Guide</th>
              <th>Recommended Remedy</th>
            </tr>
          </thead>
          <tbody>
            {q2Data.auditMatrix.map((item) => (
              <tr key={item.num}>
                <td><strong>{item.num}</strong></td>
                <td><strong style={{ color: '#818cf8' }}>{item.topic}</strong></td>
                <td style={{ color: '#cbd5e1' }}>{item.gap}</td>
                <td style={{ color: '#10b981' }}>{item.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="section-title">Part B: Rewritten Solana Staking Master Guide</h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          {q2Data.steps.map((s, idx) => (
            <div key={idx} className="feature-card">
              <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '8px' }}>{s.step}</h3>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '14px' }}>{s.desc}</p>
              {s.img && (
                <img
                  src={s.img}
                  alt={s.step}
                  style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--border-color)' }}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (activeSection === 'q3-rest-redesign' || activeSection === 'q3-transfers-get' || activeSection === 'q3-batch-post' || activeSection === 'q3-balance-get') {
    return (
      <main className="doc-reader-col">
        <h1 className="doc-title">{q3Data.title}</h1>
        <p className="doc-subtitle">{q3Data.subtitle}</p>

        <div className="info-alert">
          <div className="info-alert-title">
            <AlertCircle size={16} />
            <span>{q3Data.alert.title}</span>
          </div>
          <div className="info-alert-body">{q3Data.alert.body}</div>
        </div>

        <h2 className="section-title">Redesigned RESTful Endpoint Mapping</h2>
        <table className="param-table">
          <thead>
            <tr>
              <th>Legacy RPC Endpoint</th>
              <th>Redesigned REST Resource</th>
              <th>Verb</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {q3Data.mappingTable.map((row, idx) => (
              <tr key={idx}>
                <td style={{ color: '#f87171', fontFamily: 'var(--font-code)' }}>{row.legacy}</td>
                <td style={{ color: '#10b981', fontFamily: 'var(--font-code)', fontWeight: 600 }}>{row.redesigned}</td>
                <td><span className={`badge-${row.verb.toLowerCase()}`}>{row.verb}</span></td>
                <td style={{ color: '#cbd5e1' }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="section-title">OpenAPI 3.0 Specification</h2>
        <pre className="code-box" style={{ borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          {q3Data.openapiJson}
        </pre>
      </main>
    );
  }

  if (activeSection === 'q4-portfolio') {
    return (
      <main className="doc-reader-col">
        <h1 className="doc-title">{q4Data.title}</h1>
        <p className="doc-subtitle">{q4Data.subtitle}</p>

        <div className="info-alert">
          <div className="info-alert-title">
            <Award size={16} />
            <span>Senior Technical Writer Portfolio — {q4Data.author.name}</span>
          </div>
          <div className="info-alert-body">
            Explore Prakash Chand Rajwar's live portfolio, resume, skills, and freight audit integration documentation:
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <a
                href={q4Data.author.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Live Portfolio Site <ExternalLink size={14} />
              </a>
              <a
                href={q4Data.author.resumeUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Resume & Experience <ExternalLink size={14} />
              </a>
              <a
                href={q4Data.author.workSamplesUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Freight Audit & Pay Guide <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <h2 className="section-title">Featured Work Samples & Technical Deliverables</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {q4Data.samples.map((item, idx) => (
            <div key={idx} className="feature-card">
              <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '12px' }}>{item.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.72rem', backgroundColor: '#242740', color: '#818cf8', padding: '2px 8px', borderRadius: '4px' }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Open Work Sample <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // Default: Q1 API Reference
  return (
    <main className="doc-reader-col">
      <div className="endpoint-header-box">
        <span className="endpoint-method">{q1Data.method}</span>
        <span className="endpoint-url-text">{q1Data.endpoint}</span>
      </div>

      <h1 className="doc-title">{q1Data.title}</h1>
      <p className="doc-subtitle">{q1Data.subtitle}</p>

      <div className="info-alert">
        <div className="info-alert-title">
          <Shield size={16} />
          <span>{q1Data.alert.title}</span>
        </div>
        <div className="info-alert-body">{q1Data.alert.body}</div>
      </div>

      <h2 className="section-title">Request Body Parameters</h2>
      <table className="param-table">
        <thead>
          <tr>
            <th>Parameter Path</th>
            <th>Type</th>
            <th>Requirement</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {q1Data.parameters.map((p, idx) => (
            <tr key={idx}>
              <td className="param-name">{p.name}</td>
              <td style={{ fontFamily: 'var(--font-code)', color: '#a78bfa' }}>{p.type}</td>
              <td>
                {p.req ? <span className="req-pill">Required</span> : <span className="opt-pill">Optional</span>}
              </td>
              <td style={{ color: '#cbd5e1' }}>{p.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
