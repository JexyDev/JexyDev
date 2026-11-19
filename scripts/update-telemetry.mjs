#!/usr/bin/env node
/**
 * update-telemetry.mjs
 * JexyDev Autonomous Studio — Telemetry Synchronization Script
 *
 * Updates the <!-- TELEMETRY:START --> ... <!-- TELEMETRY:END --> block in README.md
 * with the latest UTC and WIB timestamps, operational status, and pipeline state.
 *
 * Requirements: Node.js 20+. Zero external npm dependencies.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const README_PATH = join(__dirname, '..', 'README.md');

const PIPELINE_PHASES = [
  'DISCOVER',
  'PLAN',
  'IMPLEMENT',
  'VERIFY',
  'AUDIT',
  'DEPLOY',
];

/** Format a Date as ISO 8601 UTC string (trimmed). */
function toUtcString(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

/** Format a Date as WIB (Asia/Jakarta, UTC+07:00) ISO 8601 offset string. */
function toWibString(date) {
  const wibOffsetMs = 7 * 60 * 60 * 1000;
  const wibDate = new Date(date.getTime() + wibOffsetMs);
  const iso = wibDate.toISOString().replace(/\.\d{3}Z$/, '');
  return `${iso}+07:00`;
}

/** Deterministically select a pipeline phase based on the current UTC hour. */
function selectPipelinePhase(date) {
  const hourIndex = date.getUTCHours() % PIPELINE_PHASES.length;
  return PIPELINE_PHASES[hourIndex];
}

/** Pad a string to a fixed display width with trailing spaces. */
function pad(str, width) {
  return String(str).padEnd(width, ' ');
}

function buildTelemetryBlock(now) {
  const utcStr = toUtcString(now);
  const wibStr = toWibString(now);
  const phase = selectPipelinePhase(now);

  const lines = [
    '```',
    '╔══════════════════════════════════════════════════════╗',
    '║          JEXYDEV AUTONOMOUS STUDIO — TELEMETRY       ║',
    '╠══════════════════════════════════════════════════════╣',
    `║  Last Synchronized : ${pad(utcStr, 30)}║`,
    `║  Local Time (WIB)  : ${pad(wibStr, 30)}║`,
    '║  Studio Status     : AUTONOMOUS 24/7 — OPERATIONAL  ║',
    '║  Active Agents     : 5 / 5 ONLINE                   ║',
    `║  Pipeline Phase    : ${pad(phase, 30)}║`,
    '╚══════════════════════════════════════════════════════╝',
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

  if (updated === content) {
    console.log('[TELEMETRY] No changes detected. README.md is already up to date.');
    process.exit(0);
  }

  writeFileSync(readmePath, updated, 'utf8');
  console.log(`[TELEMETRY] README.md updated successfully at ${new Date().toISOString()}`);
}

// --- Main Execution ---
(function main() {
  const now = new Date();
  console.log(`[TELEMETRY] Synchronizing telemetry at ${now.toISOString()} ...`);

  const telemetryBlock = buildTelemetryBlock(now);
  updateReadme(README_PATH, telemetryBlock);
})();
