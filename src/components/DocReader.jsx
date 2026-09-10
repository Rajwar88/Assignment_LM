import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { rawDocs } from '../data/rawDocs';

export default function DocReader({ activeSection }) {
  const content = rawDocs[activeSection] || rawDocs['q1-api'];

  return (
    <main className="doc-reader-col markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          table: ({ node, ...props }) => (
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table className="param-table" {...props} />
            </div>
          ),
          img: ({ node, ...props }) => (
            <img
              {...props}
              style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--border-color)', margin: '16px 0' }}
              alt={props.alt || ''}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
