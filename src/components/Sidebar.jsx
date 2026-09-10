import React from 'react';

export default function Sidebar({ activeSection, setActiveSection }) {
  const groups = [
    {
      title: "OVERVIEW & SETUP",
      items: [
        { id: "home", label: "Liminal Overview & Landing" },
        { id: "deployment", label: "Deployment & Setup Guide" }
      ]
    },
    {
      title: "ASSIGNMENT SUBMISSION",
      items: [
        { id: "q1-api", label: "Create transaction requests", method: "POST" },
        { id: "q2-solana-staking", label: "Solana Staking Master Guide" },
        { id: "q3-rest-redesign", label: "RESTful API Redesign (v2)" },
        { id: "q4-portfolio", label: "Work Samples & Portfolio" }
      ]
    },
    {
      title: "API REFERENCES",
      items: [
        { id: "q1-api", label: "Send Many Transaction", method: "POST" },
        { id: "q3-transfers-get", label: "Retrieve Transfers List", method: "GET" },
        { id: "q3-batch-post", label: "Create Batch Transfer", method: "POST" },
        { id: "q3-balance-get", label: "Retrieve Wallet Balances", method: "GET" }
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
