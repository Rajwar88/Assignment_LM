export const q3Data = {
  id: 'q3-rest-redesign',
  title: "RESTful API Standardization & Redesign",
  category: "ARCHITECTURE",
  subtitle: "Architectural redesign mapping non-REST RPC endpoints (/gettransfers, /sendmanytransaction, /getwalletbalance) into clean, pluralized REST resources (/v2/transfers, /v2/transfers/batch, /v2/wallets/{id}/balances).",
  alert: {
    title: "RFC 7807 Problem Details & Idempotency Header",
    body: "All /v2/ REST endpoints adopt standard RFC 7807 problem details error responses (including HTTP 422 for threat blocks) and mandate Idempotency-Key headers for batch payout safety."
  },
  mappingTable: [
    { legacy: "POST /api/wallet/get-transfer-list", redesigned: "GET /v2/transfers", verb: "GET", desc: "Retrieve paginated collection of historical fund transfers with cursor pagination." },
    { legacy: "POST /api/wallet/send-many-transaction", redesigned: "POST /v2/transfers/batch", verb: "POST", desc: "Create atomic multi-destination batch transfer with Idempotency-Key header." },
    { legacy: "POST /api/wallet/balance", redesigned: "GET /v2/wallets/{wallet_id}/balances", verb: "GET", desc: "Fetch multi-asset balances via standard REST sub-resource hierarchy." }
  ],
  openapiJson: `{
  "openapi": "3.0.0",
  "info": {
    "title": "Liminal REST API v2",
    "version": "2.0.0"
  },
  "paths": {
    "/v2/transfers": {
      "get": {
        "summary": "Retrieve Transfers Collection",
        "parameters": [
          { "name": "wallet_id", "in": "query", "schema": { "type": "string" } },
          { "name": "status", "in": "query", "schema": { "type": "string" } },
          { "name": "limit", "in": "query", "schema": { "type": "integer", "default": 50 } }
        ]
      }
    },
    "/v2/transfers/batch": {
      "post": {
        "summary": "Create Batch Transfer",
        "parameters": [
          { "name": "Idempotency-Key", "in": "header", "required": true, "schema": { "type": "string", "format": "uuid" } }
        ]
      }
    },
    "/v2/wallets/{wallet_id}/balances": {
      "get": {
        "summary": "Retrieve Wallet Balances"
      }
    }
  }
}`
};
