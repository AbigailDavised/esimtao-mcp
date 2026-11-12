#!/usr/bin/env node
console.log("EsimTao CLI v1.0.0 — Global Travel eSIM Data Calculator & Hardware Matrix");
console.log("Endpoint: https://esimtao.com/api/mcp");
console.log("Website: https://esimtao.com");
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("\nUsage: esimtao [options]");
  console.log("  --calculator   Calculate daily data requirements by app");
  console.log("  --compatibility Check phone eSIM support & regional locks");
  console.log("  --providers    Compare Airalo, Nomad, Ubigi & Holafly rates");
}
