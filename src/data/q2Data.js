export const q2Data = {
  id: 'q2-solana-staking',
  title: "Solana Staking Guide Audit & Master Guide",
  category: "GUIDES",
  subtitle: "Comprehensive 8-point critique of Liminal's existing Solana staking documentation, followed by a redesigned 3-step master guide for institutional vault operators powered by Figment validator node integration.",
  alert: {
    title: "Official Figment Validator Node Partnership",
    body: "Liminal Vaults natively integrates with Figment validator nodes for SOL staking. Yields average ~6.42% APY with a 2-day reward credit frequency and a 2-day unbonding cool-down period."
  },
  auditMatrix: [
    { num: 1, topic: "Rent-Exempt Reserve", gap: "Omits mandatory ~0.0023 SOL rent-exempt reserve requirement.", fix: "Add explicit Prerequisites Checklist detailing rent and gas buffers." },
    { num: 2, topic: "Epoch Warm-Up/Cool-Down", gap: "Lacks explanation of 2-day activation and 2-day unbonding periods.", fix: "Include visual Mermaid state machine diagram for SOL stake account lifecycle." },
    { num: 3, topic: "Multi-Sig Approval Workflow", gap: "Treats staking as a single-click action without cold/MPC quorum steps.", fix: "Detail Vaults Web initiator 2FA and Vaults Mobile App co-signer signoffs." },
    { num: 4, topic: "Validator Transparency", gap: "Lacks validator commission and Figment TOS agreement guidance.", fix: "Add explicit Figment TOS acceptance step during wallet enablement." },
    { num: 5, topic: "De-delegation & Withdrawals", gap: "Omits instructions for unstaking, cool-down, and withdrawing funds.", fix: "Add comprehensive section for de-delegation and principal/yield reclaim." },
    { num: 6, topic: "Authentic UI Visuals", gap: "Uses placeholder images instead of actual dashboard visuals.", fix: "Embed authentic Liminal Vaults UI screenshots fetched via MCP server." },
    { num: 7, topic: "Rewards Calculator Tool", gap: "No guidance on calculating estimated rewards prior to staking.", fix: "Add step-by-step guide for the Liminal Rewards Calculator tool." },
    { num: 8, topic: "Troubleshooting Matrix", gap: "No reference table for UI errors or pending quorum timeouts.", fix: "Include detailed Troubleshooting & FAQ matrix." }
  ],
  steps: [
    {
      step: "Step 1: Enable Staking for Solana Wallet",
      desc: "Log into Liminal Vaults > Staking > SOL > Start Staking > Select Solana wallet > Accept Figment Terms of Service > Enter 2FA code > Confirm.",
      img: "https://files.readme.io/efe9410f0a18eed444327b426b662aa4c4ba21852cacc40a3f163ad5db79cf81-image.png"
    },
    {
      step: "Step 2: Create an On-Chain Staking Account",
      desc: "Expand SOL > Create Account > Enter SOL transfer amount & transaction note > Sign > Complete multi-sig quorum approval via Vaults Web and Mobile App.",
      img: "https://files.readme.io/ca4961c033b673343b113f72d3e0af7810e9c605e20454557c43b53fc2c8678d-image.png",
      mobileImg: "https://files.readme.io/c9a133d02610f84a12e0474e72e659ed1d95b4afeeee7e32275a3fdc6c7983d9-Screenshot_20241028-155948.png"
    },
    {
      step: "Step 3: Stake Solana Assets (Delegate to Figment)",
      desc: "Expand SOL > Select Stake for the account > Enter note > Sign > 2FA > Multi-sig approval. Status displays as Activating for ~2 days before shifting to Active.",
      img: "https://files.readme.io/2f5f3b547bab9e009709c4e5adf90e85275b736393fd475a8063ac1ef3cf3b36-image.png"
    }
  ]
};
