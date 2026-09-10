# Liminal Model Context Protocol (MCP) AI Integration Guide

!!! summary "AI-Native Developer Tooling"
    **Protocol**: Model Context Protocol (MCP) HTTP Endpoint  
    **MCP Endpoint**: `https://docs.lmnl.app/mcp`  
    **Use Case**: Enables AI coding assistants (Google Antigravity, Claude Desktop, Cursor) to dynamically query Liminal API specifications, wallet schemas, and custody documentation in real time.

---

## Overview

Liminal provides a native **Model Context Protocol (MCP)** server endpoint at `https://docs.lmnl.app/mcp`. 

By connecting your AI coding assistant or IDE agent to Liminal's MCP server, developers can ask natural language questions (e.g. *"What parameters are required for sendmanytransaction on Solana?"*) and receive contextually accurate, real-time responses sourced directly from Liminal's live documentation infrastructure.

---

## Connecting Liminal MCP Server to AI Clients

### 1. Configuration File Format

Create or update your workspace configuration file (`.agents/mcp_config.json` or `mcp_config.json`):

```json
{
  "mcpServers": {
    "liminal-docs": {
      "type": "http",
      "url": "https://docs.lmnl.app/mcp"
    }
  }
}
```

---

### 2. Client Setup Instructions

=== "Google Antigravity / Gemini Agent"

    Add the config to your workspace root `.agents/mcp_config.json`:
    ```json
    {
      "mcpServers": {
        "liminal-docs": {
          "type": "http",
          "url": "https://docs.lmnl.app/mcp"
        }
      }
    }
    ```
    Restart your session or reload customizations. The agent will automatically gain access to query Liminal docs tools.

=== "Claude Desktop"

    Edit your `claude_desktop_config.json` file:
    - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

    ```json
    {
      "mcpServers": {
        "liminal-docs": {
          "command": "npx",
          "args": ["-y", "@modelcontextprotocol/server-fetch", "https://docs.lmnl.app/mcp"]
        }
      }
    }
    ```

=== "Cursor / VS Code"

    Add to `.cursor/mcp.json`:
    ```json
    {
      "mcpServers": {
        "liminal-docs": {
          "url": "https://docs.lmnl.app/mcp"
        }
      }
    }
    ```

---

## Capability Matrix

Connecting the Liminal MCP server enables the following capabilities in your AI tools:

| MCP Tool / Capability | Description | Example Prompt |
| :--- | :--- | :--- |
| `search_docs` | Real-time semantic search across Liminal documentation | *"Search Liminal docs for Solana stake account creation fees."* |
| `get_api_spec` | Retrieve exact OpenAPI 3.0 schemas for endpoints | *"Get the request schema for POST /api/wallet/send-many-transaction."* |
| `validate_payload` | Validate client JSON request bodies against live schemas | *"Check if this sendmanytransaction payload matches Liminal's required fields."* |

---

## Verification & Connection Testing

To verify that your MCP connection is active, ask your AI assistant:
> *"Query the Liminal MCP server at https://docs.lmnl.app/mcp and summarize the required parameters for Send Many Transaction."*
