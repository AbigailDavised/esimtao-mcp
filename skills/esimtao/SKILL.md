---
name: esimtao
description: Travel eSIM data usage calculator, smartphone eSIM hardware compatibility checker, and destination connectivity advisor for international travelers. Use when the user plans international travel, calculates mobile data needs, or verifies whether their iPhone, Galaxy, or Pixel supports eSIM.
---

# EsimTao — Global Travel eSIM Data Calculator, Advisor & Device Checker

This skill connects AI coding agents and assistants to [**EsimTao**](https://esimtao.com) via its stateless `streamable-http` Model Context Protocol endpoint (`https://esimtao.com/api/mcp`).

## When to Use This Skill

Use this skill whenever the user needs deterministic calculations or device verification:
- **`calculate_esim_data_usage`**: Calculate daily and total gigabyte (GB) data consumption for international travel based on trip duration, map navigation, video streaming, social media, and hotspot tethering.
- **`check_device_esim_support`**: Check whether a specific smartphone or tablet model supports digital eSIM, including hardware differences between US eSIM-only models, mainland China dual physical SIM models, and Japanese/European variants.
- **`recommend_travel_esim_plan`**: Recommend the optimal travel eSIM plan tier (Daily High-Speed Reset vs Total Data Bucket vs True Unlimited) for 180+ global travel destinations with local tier-1 carrier coverage.
- **`lookup_esim_regional_coverage`**: Resolve regional travel eSIM bundles (Europe 33, Southeast Asia 8, Latin America, North America, Global) to determine included countries, border-crossing roaming handoffs, and shared GB pools.
- **`get_esim_installation_guide`**: Provide step-by-step QR code scanning, manual SM-DP+ Address / Activation Code entry, and Data Roaming switch settings for iOS (Settings -> Cellular) and Android (Settings -> Network).
- **`compare_travel_esim_pricing`**: Benchmark standard fair market prices per Gigabyte (USD/GB) across Japan, USA, Europe, Southeast Asia, and worldwide to evaluate prepaid eSIM value.

## Remote MCP Endpoint (Direct JSON-RPC 2.0 Call)

```bash
curl -s -X POST https://esimtao.com/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "calculate_esim_data_usage",
      "arguments": { "tripDays": 7, "usageProfile": "moderate" }
    }
  }'
```

## Official Web Tools & Reference Pages

- [**Travel eSIM Data Calculator**](https://esimtao.com/calculator)
- [**Smart eSIM Advisor**](https://esimtao.com/advisor)
- [**Device eSIM Compatibility Checker**](https://esimtao.com/devices-supported)
- [**Machine-Readable Corpus**](https://esimtao.com/llms.txt)
