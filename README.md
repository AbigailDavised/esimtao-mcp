# EsimTao — Global Travel eSIM Data Calculator, Advisor & Device Checker (`com.esimtao/mcp`)

[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.esimtao%2Fmcp-emerald)](https://registry.modelcontextprotocol.io/v0.1/servers/com.esimtao%2Fmcp/versions/latest)
[![Website](https://img.shields.io/badge/Website-esimtao.com-blue)](https://esimtao.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Official **Model Context Protocol (MCP)** remote `streamable-http` server and **Open Agent Skill** for [**EsimTao (esimtao.com)**](https://esimtao.com).

Exposes deterministic travel data calculations and phone hardware compatibility verification to **Claude Desktop**, **Cursor**, **Windsurf**, **Cline**, and **ChatGPT** with zero API keys required.

---

## 🔧 Available MCP Tools

### `calculate_esim_data_usage`
Calculate daily and total gigabyte (GB) data consumption for international travel based on trip duration, map navigation, video streaming, social media, and hotspot tethering.

### `check_device_esim_support`
Check whether a specific smartphone or tablet model supports digital eSIM, including hardware differences between US eSIM-only models, mainland China dual physical SIM models, and Japanese/European variants.

### `recommend_travel_esim_plan`
Recommend the optimal travel eSIM plan tier (Daily High-Speed Reset vs Total Data Bucket vs True Unlimited) for 180+ global travel destinations with local tier-1 carrier coverage.

### `lookup_esim_regional_coverage`
Resolve regional travel eSIM bundles (Europe 33, Southeast Asia 8, Latin America, North America, Global) to determine included countries, border-crossing roaming handoffs, and shared GB pools.

### `get_esim_installation_guide`
Provide step-by-step QR code scanning, manual SM-DP+ Address / Activation Code entry, and Data Roaming switch settings for iOS (Settings -> Cellular) and Android (Settings -> Network).

### `compare_travel_esim_pricing`
Benchmark standard fair market prices per Gigabyte (USD/GB) across Japan, USA, Europe, Southeast Asia, and worldwide to evaluate prepaid eSIM value.


---

## 🚀 Claude Desktop Configuration

```json
{
  "mcpServers": {
    "esimtao": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everything"],
      "env": {},
      "url": "https://esimtao.com/api/mcp"
    }
  }
}
```

## 📄 License

MIT © [EsimTao](https://esimtao.com)
