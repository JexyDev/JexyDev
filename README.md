<p align="center">
  <img src="./assets/hero-command-center.svg" alt="Jeremy Darrell Andreas — JexyDev Command Center" width="100%"/>
</p>

---

## Executive Engineering Profile

I am **Jeremy Darrell Andreas** (`JexyDev`) — a Fullstack Engineer and Autonomous AI Systems Architect based in Bogor / Bandung, Indonesia. I architect and deliver end-to-end engineering solutions spanning Web, Mobile, REST and GraphQL APIs, relational and document databases, and 24/7 Autonomous AI Engineering Pipelines. My systems run continuously under multi-agent orchestration, enabling high-throughput software delivery at any scale.

**Core Disciplines:** Fullstack Product Engineering · IoT Integration · Multi-Tenant SaaS Architecture · AI-Driven Autonomous Pipelines · DevOps & Continuous Delivery · Engineering Documentation (PRD / SRS / SDD / API Specification)

---

## 24/7 Autonomous Engineering Studio Architecture

The studio operates on a continuous autonomous loop governed by **Hermes** (Lead Orchestrator), routing tasks across specialized agents through the full engineering lifecycle:

<p align="center">
  <img src="./assets/autonomous-pipeline.svg" alt="JexyDev Autonomous Agent Pipeline Architecture" width="100%"/>
</p>

### Autonomous Agent Roster

| Agent | Primary Responsibility | Core Stack | Quality Gate |
|---|---|---|---|
| **Hermes** *(Lead Orchestrator & Planner)* | Decomposes engineering specifications into sprint queues; routes all tasks via `9Router`; governs the full `DISCOVER → PLAN → IMPLEMENT → VERIFY → AUDIT → DEPLOY` lifecycle loop. | Custom Orchestration Engine · 9Router · Task Queue | Full lifecycle governance — no task exits Hermes without routing metadata and acceptance criteria. |
| **Frontend Agent** | Delivers responsive, performant user interfaces across Web and Mobile platforms; manages component architecture, state trees, and cross-platform design systems. | React · Next.js · TypeScript · Flutter · Tailwind CSS | UI snapshot regression, accessibility audit, Lighthouse performance gate ≥ 90. |
| **Backend Agent** | Architects and implements scalable REST and GraphQL APIs; designs relational and document database schemas; enforces authentication, authorization, and data integrity contracts. | Laravel · Node.js · Express · PostgreSQL · Prisma ORM · MongoDB | Schema migration dry-run, PHPUnit / Jest integration tests, zero N+1 policy. |
| **QA / QC Agent** | Executes unit, integration, regression, and edge-case test suites; performs static analysis; enforces quality gates before merge approval. | PHPUnit · Jest · Vitest · ESLint · PHP CS Fixer / Pint | Zero merge without passing test matrix; mandatory coverage floor. |
| **DevOps & Docs Agent** | Maintains containerized infrastructure, CI/CD pipelines, staging and production deployment automation, and formal documentation artifacts (PRD, SRS, SDD, API Specification). | Docker · Podman · GitHub Actions · Nginx · Supervisor · Markdown / OpenAPI | Pipeline green-gate required; all documentation artifacts validated before release. |

---

## Featured Production Systems

### BERSEKA — Pilah Sampah Cerdas (`berseka.id`)
> *Intelligent Waste Classification & Community Environmental Management Platform*

**Domain:** Smart city waste management integrated with university KKN Tematik programs and AI-powered Computer Vision waste classification for Kelurahan/RW-level environmental governance in Kota Bandung.

**Architecture:** TypeScript Monorepo (NPM Workspaces) — Express.js (Node.js) REST API backend with Prisma ORM + React 18 / Vite multi-role web portal frontend. Deployed on VPS with automated CI/CD pipelines via GitHub Actions.

| Metric | Verified Value |
|---|---|
| Prisma ORM Models | **83** |
| PostgreSQL Columns | **951** |
| API Endpoints | **727** |
| Git Commits | **3,158+** |
| Live Environments | Staging (`staging.berseka.id`) · Production (`berseka.id`) |

**Tech Stack:** `Node.js 20` · `Express.js` · `TypeScript` · `Prisma ORM` · `PostgreSQL 15` · `React 18` · `Vite` · `Redis` · `Docker` · `GitHub Actions` · `Computer Vision (AI Classification)`

---

### Bitanic — Smart Precision Agriculture LMS & IoT Workstation
> *Vocational Smart Farming Education Platform with Industrial-Grade IoT Integration*

**Domain:** An integrated Learning Management System for ATPH 4.0 (Agribisnis Tanaman Pangan dan Hortikultura) vocational curriculum, directly connected to a fleet of IoT Trainer Kit workstations (`BITANIC-TK-01` through `BITANIC-TK-06`). Reads 7-in-1 soil sensor data via Modbus RS485 RTU (pH, EC, Moisture, Temperature, NPK) and controls 4 actuator relays with precision.

**Architecture:** Laravel 12 monolithic application with Action-Service-Controller pattern; strict multi-tenant isolation per `school_id`; real-time telemetry ingestion API; collision-free scheduling via pessimistic row locking.

| Metric | Verified Value |
|---|---|
| Eloquent Models | **37** |
| Database Migrations | **41** |
| IoT Protocol | Modbus RS485 RTU |
| Sensor Parameters | 7-in-1 (pH, EC, Moisture, Temp, N, P, K) |
| Multi-Tenancy | Zero-IDOR enforced at query layer |

**Tech Stack:** `Laravel 12` · `PHP 8.2+` · `PostgreSQL 17` · `Tailwind CSS v4` · `Vite` · `PHPUnit` · `Docker` · `GitHub Actions`

---

### Bogor Tolo — Digital Marketplace for Local SMEs
> *Flutter-Powered Mobile + Laravel Backend Digital Commerce for Bogor's Local Merchants*

**Domain:** A digital marketplace platform enabling local merchants and SMEs in Bogor to establish online storefronts, manage inventory, process orders, and reach customers across the region.

**Architecture:** Flutter (iOS + Android) mobile client communicating with a Laravel RESTful API backend with admin portal.

| Metric | Verified Value |
|---|---|
| Client Platforms | iOS · Android (Flutter) |
| Backend | Laravel REST API + Admin Panel |
| Target Market | Local Merchants & SMEs, Bogor, West Java |

**Tech Stack:** `Flutter` · `Dart` · `Laravel` · `PHP` · `MySQL / PostgreSQL` · `REST API`

---

## Technical Stack Matrix

| Domain | Technologies |
|---|---|
| **Frontend & Web** | React 18 · Next.js · TypeScript · Vite · Tailwind CSS v4 · Shadcn/ui · Zustand · React Query |
| **Mobile** | Flutter · Dart · Provider · Riverpod |
| **Backend & APIs** | Laravel 12 · Node.js 20 · Express.js · REST · GraphQL · Sanctum / Passport |
| **Databases** | PostgreSQL · MySQL · SQLite · MongoDB · Redis · Prisma ORM · Eloquent ORM |
| **AI & Orchestration** | Autonomous Agent Pipelines · 9Router Orchestration · Computer Vision Integration |
| **IoT & Hardware** | Modbus RS485 RTU · Telemetry Ingestion APIs · Sensor Calibration · Actuator Control |
| **Infrastructure & DevOps** | Docker · Podman · GitHub Actions · Nginx · Supervisor · Linux VPS · SSH Hardening |
| **Quality & Testing** | PHPUnit · Pest · Jest · Vitest · ESLint · PHP CS Fixer / Pint · CodeQL · gitleaks |
| **Documentation** | OpenAPI 3.x · PRD · SRS · SDD · ISO/IEC 12207 Workflow Standards |

---

## Live 3D Showcase

<p align="center">
  <a href="https://jexydev.github.io/jexydev-3d-studio/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20ENTER%20AUTONOMOUS%203D%20STUDIO-jexydev.github.io%2Fjexydev--3d--studio-38BDF8?style=for-the-badge&labelColor=0B1120&color=38BDF8" alt="Enter JexyDev 3D Studio"/>
  </a>
</p>

> Experience the autonomous engineering pipeline as an interactive 3D scene — observe Hermes orchestrate agents in real time, dispatch custom tasks, and inspect each agent's live telemetry. Live production deployment: **[jexydev.github.io/jexydev-3d-studio](https://jexydev.github.io/jexydev-3d-studio/)**

---

## Dynamic Telemetry

<!-- TELEMETRY:START -->
```
╔══════════════════════════════════════════════════════╗
║          JEXYDEV AUTONOMOUS STUDIO — TELEMETRY       ║
╠══════════════════════════════════════════════════════╣
║  Last Synchronized : 2026-11-19T06:00:59Z          ║
║  Local Time (WIB)  : 2026-11-19T13:00:59+07:00     ║
║  Studio Status     : AUTONOMOUS 24/7 — OPERATIONAL  ║
║  Active Agents     : 5 / 5 ONLINE                   ║
║  Pipeline Phase    : DISCOVER                      ║
╚══════════════════════════════════════════════════════╝
```
<!-- TELEMETRY:END -->

---

<p align="center">
  <sub>Jeremy Darrell Andreas · JexyDev · Bogor / Bandung, Indonesia · Asia/Jakarta UTC+07:00</sub><br/>
  <sub>Autonomous Engineering Studio — Online 24/7</sub>
</p>
