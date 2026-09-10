export const q4Data = {
  id: 'q4-portfolio',
  title: "Technical Writer Work Samples & Portfolio",
  category: "PORTFOLIO",
  subtitle: "Curated work samples and live documentation sites authored by Prakash Chand Rajwar (Senior Technical Writer).",
  author: {
    name: "Prakash Chand Rajwar",
    role: "Senior Technical Writer",
    portfolioUrl: "https://prakash92.netlify.app/",
    resumeUrl: "https://prakash92.netlify.app/resume/",
    skillsUrl: "https://prakash92.netlify.app/skills_certs/",
    workSamplesUrl: "https://prakash92.netlify.app/work-samples/fap-guide/introduction_to_freight_audit_and_pay/"
  },
  samples: [
    {
      title: "Freight Audit and Pay (FAP) Master Guide",
      link: "https://prakash92.netlify.app/work-samples/fap-guide/introduction_to_freight_audit_and_pay/",
      tech: ["MkDocs Material", "Mermaid.js Data Flows", "PlantUML", "Markdown"],
      desc: "Designed and authored the complete enterprise documentation suite for Freight Audit & Pay systems, covering Rate & Pay, Match & Pay, Execute & Pay data flow architectures, and UI/Audit functional flows."
    },
    {
      title: "Technical Integration & Automation (EDI 210/310 & Python Scripts)",
      link: "https://prakash92.netlify.app/work-samples/fap-guide/invoice_create_json/",
      tech: ["Python Automation", "X12 EDI 210/310", "IBM Sterling B2B Integrator", "JSON Schemas"],
      desc: "Authored developer integration guides for Python invoice JSON creation scripts, X12 EDI 210/310 loop/segment mapping matrices, and IBM Sterling Layer communication channel configuration."
    },
    {
      title: "CarrierGo Platform User Guide",
      link: "https://prakash92.netlify.app/work-samples/carriergo-guide/IntroductiontoCarrierGo/",
      tech: ["User Manuals", "Onboarding Workflows", "Change Control Logs"],
      desc: "Created operational manuals and change control tracking documentation for CarrierGo, a multi-modal freight booking platform."
    },
    {
      title: "The Tech Writer as an Engineer — Automated Docs-as-Code Pipeline",
      link: "https://prakash92.netlify.app/#the-tech-writer-as-an-engineer-automated-docs-pipeline",
      tech: ["Git/GitHub Actions CI/CD", "MkDocs Material", "PyMdown Extensions", "Python", "Custom CSS"],
      desc: "Engineered a complete Docs-as-Code automated CI/CD pipeline using GitHub Actions, Markdown linters, custom responsive CSS badges, and automated webhelp site deployment."
    }
  ]
};
