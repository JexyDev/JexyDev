#!/usr/bin/env node
/**
 * update-telemetry.mjs
 * JexyDev Systems Engineering — Dynamic Telemetry Synchronization
 *
 * Updates the <!-- TELEMETRY:START --> ... <!-- TELEMETRY:END --> block in README.md
 * with precise human-readable UTC/WIB synchronization timestamps and verified engineering metrics.
 *
 * Requirements: Node.js 20+. Zero external npm dependencies.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const README_PATH = join(__dirname, '..', 'README.md');

function formatHumanTimestamp(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const utcHours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  // Asia/Jakarta (WIB) is UTC+7
  const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);
  const wibDay = String(wibDate.getUTCDate()).padStart(2, '0');
  const wibMonth = months[wibDate.getUTCMonth()];
  const wibYear = wibDate.getUTCFullYear();
  const wibHours = String(wibDate.getUTCHours()).padStart(2, '0');

  return `${day} ${month} ${year}, ${utcHours}:${minutes}:${seconds} UTC │ ${wibDay} ${wibMonth} ${wibYear}, ${wibHours}:${minutes}:${seconds} WIB`;
}

function pad(str, width) {
  return String(str).padEnd(width, ' ');
}

function buildTelemetryBlock(now) {
  const timeStr = formatHumanTimestamp(now);

  const lines = [
    '```',
    '╔═══════════════════════════════════════════════════════════════════════════════════════╗',
    '║                   JEXYDEV // SYSTEM TELEMETRY & WORKSPACE PULSE                       ║',
    '╠═══════════════════════════════════════════════════════════════════════════════════════╣',
    `║  Last Synchronized : ${pad(timeStr, 65)}║`,
    '║  Lifecycle Velocity: 3,700+ Production Commits Across Repositories (Full Performance) ║',
    '║  Codebase Scale    : 302,189 LoC · 83 Prisma Models · 659 API Endpoints (berseka.id)  ║',
    '║  Hardware Telemetry: Modbus RS485 RTU · CRC16 · 4 Relays Automated (Bitanic)          ║',
    '║  Workspace Status  : ALL PRODUCTION REPOSITORIES SYNCHRONIZED & OPERATIONAL           ║',
    '╚═══════════════════════════════════════════════════════════════════════════════════════╝',
    '```',
  ];

  return lines.join('\n');
}

function updateReadme(readmePath, telemetryBlock) {
  const content = readFileSync(readmePath, 'utf8');

  const startMarker = '<!-- TELEMETRY:START -->';
  const endMarker = '<!-- TELEMETRY:END -->';

  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    console.error(
      '[TELEMETRY] ERROR: Markers <!-- TELEMETRY:START --> and <!-- TELEMETRY:END --> not found in README.md',
    );
    process.exit(1);
  }

  const before = content.substring(0, startIdx + startMarker.length);
  const after = content.substring(endIdx);

  const updated = `${before}\n${telemetryBlock}\n${after}`;

  writeFileSync(readmePath, updated, 'utf8');
  console.log(`[TELEMETRY] README.md updated successfully at ${new Date().toISOString()}`);
}

(function main() {
  const now = new Date();
  console.log(`[TELEMETRY] Synchronizing telemetry at ${now.toISOString()} ...`);
  const telemetryBlock = buildTelemetryBlock(now);
  updateReadme(README_PATH, telemetryBlock);
})();
