import React from 'react';

export default function Sidebar({ activeSection, setActiveSection }) {
  const groups = [
    {
      title: "ASSIGNMENT TASKS (Q1 - Q4)",
      items: [
        { id: "q1-api", label: "Q1: /send-many-transaction Update", method: "POST" },
        { id: "q2-solana-staking", label: "Q2: Solana Staking Audit & Guide" },
        { id: "q3-rest-redesign", label: "Q3: RESTful API Redesign (v2)", method: "GET" },
        { id: "q4-portfolio", label: "Q4: Work Samples & Portfolio" }
      ]
    }
  ];

  return (
    <aside className="sidebar-col">
      {groups.map((group, idx) => (
        <div className="nav-group" key={idx}>
          <div className="nav-group-title">{group.title}</div>
          {group.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className={`tree-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span>{item.label}</span>
              {item.method && (
                <span className={`badge-${item.method.toLowerCase()}`}>
                  {item.method}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
