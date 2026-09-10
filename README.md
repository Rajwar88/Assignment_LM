# Liminal Technical Writer Candidate Assignment Submission

This repository contains the complete technical writer assignment submission for **Liminal**, hosted as an interactive developer WebHelp site using **MkDocs** and **MkDocs Material**.

## 🚀 Live WebHelp Site
Once deployed to GitHub Pages, the site will be accessible at:  
👉 **`https://<your-username>.github.io/Assignment_LM/`**

---

## 📂 Project Structure

```
Assignment_LM/
├── mkdocs.yml                      # MkDocs configuration (Material theme, search, extensions)
├── README.md                       # Repository overview & local instructions
├── Technical Writer Assignment.pdf # Original Liminal assignment document
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Actions workflow for GitHub Pages
└── docs/
    ├── index.md                    # Landing Page & Executive Summary
    ├── q1-api-documentation.md     # Q1: /sendmanytransaction API Update (Cube3 Security Partner)
    ├── q2-solana-staking-guide.md  # Q2: Solana Staking Guide Audit & Rewritten Guide
    ├── q3-rest-api-redesign.md     # Q3: RESTful API Standardization & Redesign
    ├── q4-portfolio-samples.md     # Q4: Technical Writer Portfolio & Work Samples
    ├── deployment-guide.md         # Deployment & GitHub Pages Setup Guide
    └── stylesheets/
        └── extra.css               # Custom CSS (API badges, HTTP status pills, styling)
```

---

## 💻 Local Quickstart

### Prerequisites
- Python 3.10+
- `mkdocs` and `mkdocs-material`

### 1. Install Dependencies
```bash
pip install mkdocs mkdocs-material
```

### 2. Preview Site Locally
Run the local dev server:
```bash
mkdocs serve
```
Open your browser and navigate to **`http://127.0.0.1:8000`**.

### 3. Verify Site Build
To test the site build for broken links or syntax errors:
```bash
mkdocs build --strict
```

---

## 🌐 GitHub Pages Deployment

### Automatic Deployment (GitHub Actions)
1. Push this repository to GitHub on the `main` branch.
2. Go to **Settings > Pages** in your GitHub repository.
3. Set source branch to **`gh-pages`** (`/ (root)`).
4. GitHub Actions will automatically build and publish your site!

### Manual Deployment
```bash
mkdocs gh-deploy --clean
```

---

## 📋 Assignment Answers Summary

| Task | Topic | Deliverable Document |
| :--- | :--- | :--- |
| **Q1** | API Endpoint Update | [`docs/q1-api-documentation.md`](docs/q1-api-documentation.md) |
| **Q2** | Solana Staking Audit & Rewrite | [`docs/q2-solana-staking-guide.md`](docs/q2-solana-staking-guide.md) |
| **Q3** | RESTful API Redesign | [`docs/q3-rest-api-redesign.md`](docs/q3-rest-api-redesign.md) |
| **Q4** | Work Samples Portfolio | [`docs/q4-portfolio-samples.md`](docs/q4-portfolio-samples.md) |
