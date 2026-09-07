import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
const [, , input, output] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${input}`, { waitUntil: "networkidle" });
await page.pdf({ path: output, format: "A4", printBackground: true });
await browser.close();
console.log("pdf written");
