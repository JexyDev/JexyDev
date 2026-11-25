<p align="center">
  <img src="./assets/hero-command-center.svg" alt="Jeremy Darrell Andreas — JexyDev Command Center" width="100%"/>
</p>

<p align="center">
  <a href="https://jexydev.github.io/jexydev-3d-studio/"><img src="https://img.shields.io/badge/🌐%20Interactive%203D%20Studio-Live%20WebGL-38BDF8?style=for-the-badge&logo=three.js&logoColor=white&labelColor=0B1120" alt="Live 3D Studio"/></a>
  <a href="mailto:Jeremyddarell@gmail.com"><img src="https://img.shields.io/badge/🟢%20Status-Open%20to%20Opportunities-10B981?style=for-the-badge&labelColor=0B1120" alt="Open to Opportunities"/></a>
  <img src="https://img.shields.io/badge/📍%20Location-Bogor%20%2F%20Bandung%2C%20ID-F59E0B?style=for-the-badge&labelColor=0B1120" alt="Location"/>
  <img src="https://img.shields.io/badge/⚡%20Top%20Contributor%20%231-1%2C437%20Non--Merge%20Commits-06B6D4?style=for-the-badge&labelColor=0B1120" alt="Top Contributor"/>
  <img src="https://img.shields.io/badge/📦%20Monorepo%20Scale-302K%2B%20LoC-8B5CF6?style=for-the-badge&labelColor=0B1120" alt="Lines of Code"/>
</p>

---

## 👨‍💻 Executive Engineering Profile

I am **Jeremy Darrell Andreas** (`JexyDev`) — a Fullstack Software Engineer, Distributed Systems Builder, and Hardware IoT Developer from Indonesia (SMK Wikrama Bogor alumnus).

> **Engineering Philosophy:** `Vibing Code > Vibe Code.`  
> I engineer production software designed to survive real-world constraints: spotty field connectivity, concurrent race conditions, student GPS spoofing, and physical Modbus RS485 serial communication frames.

As lead developer at **PT. Makerindo Prima Solusi** in collaboration with **Universitas Komputer Indonesia (UNIKOM)**, I served as the **#1 Top Contributor** on the enterprise municipal platform **BERSEKA (`berseka.id`)**, authoring **1,437 non-merge commits (45.5% of total team output)** and **2,016+ total commits** across an active 302,189-line TypeScript monorepo.

---

## 🏛️ Production Systems At A Glance

### 1. BERSEKA — Municipal Smart Waste & Academic Field Lifecycle Platform (`berseka.id`)
> **Core Essence:** Smart city waste sorting governance integrated with university KKN Tematik field operations across Coblong District, Bandung, West Java.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ SCALE : 302,189 LoC │ 83 Prisma Models │ 659 REST APIs │ 3,333 Main Commits (4,119 Total)   │
│ IMPACT: Top Contributor #1 (1,437 Non-Merge Commits / 45.5% of Team) │ 2 Live VPS Nodes     │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

* **Anti-Mock GPS Geofencing:** Backend Haversine distance verification with 15m dynamic buffers, client-server timestamp skew auditing, and velocity checks to eliminate field attendance spoofing.
* **Asynchronous E-Certificates:** BullMQ + Redis background workers rendering vector PDFs with unauthenticated dynamic QR verification (`/verify/:id`).
* **Streaming Dataset Ingestion:** Chunked XLSX streaming parser with row-by-row Zod schema validation and atomic `prisma.$transaction` rollback (0 orphaned records).
* **Cryptographic Audit Trail:** SHA-256 hash-chained mutation history preventing retroactive data tampering.
* **Stack:** `TypeScript Strict` · `Node.js 22 LTS` · `Express.js` · `React 19` · `Prisma ORM` · `PostgreSQL 15` · `Redis 7` · `BullMQ` · `Docker` · `Nginx`
* **Artifacts & Proof:** [👉 Read Complete Architectural Case Study (BERSEKA_CASE_STUDY.md)](./BERSEKA_CASE_STUDY.md) · [Live Production (berseka.id)](https://berseka.id) · [C4 Architecture Diagram](./assets/berseka-architecture.png)

---

### 2. Bitanic — Vocational Precision Agriculture LMS & Industrial IoT Workstation
> **Core Essence:** Vocational smart farming LMS (ATPH 4.0) with real-time laboratory Trainer Kit hardware control (`BITANIC-TK-01` to `06`).

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ HARDWARE: Modbus RS485 RTU │ CRC16 Checksum │ 7-in-1 Soil Sensor │ 4 Actuator Relays        │
│ BACKEND : 37 Eloquent Models │ 41 Migrations │ Pessimistic Row Locking (`lockForUpdate`)    │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

* **Industrial Hardware Protocol:** Direct serial communication via **Modbus RS485 RTU** with strict **CRC16** frame validation.
* **Multi-Parameter Sensor Acquisition:** Continuous telemetry ingestion for soil pH, Electrical Conductivity (EC), Moisture, Temperature, Nitrogen (N), Phosphorus (P), and Potassium (K).
* **Actuator Control Logic:** Automated relay switching for irrigation valves, mist generators, and dual nutrient dosing pumps.
* **Concurrency Protection:** PostgreSQL pessimistic row locking (`lockForUpdate`) eliminating hardware double-booking conflicts.
* **Stack:** `Laravel 12` · `PHP 8.2+` · `PostgreSQL 17` · `Tailwind CSS v4` · `Docker`

---

### 3. Bogor Tolo — Hyperlocal SME Digital Marketplace
> **Core Essence:** Regional e-commerce mobile application and administration portal empowering local merchants in Bogor, West Java.

* **Client Platforms:** Cross-platform **Flutter** (iOS & Android) mobile application utilizing **Riverpod** state management.
* **Backend Services:** Decoupled **Laravel REST API** backend with token-based authentication and administrative inventory portal.
* **Stack:** `Flutter` · `Dart` · `Riverpod` · `Laravel` · `PHP` · `MySQL / PostgreSQL` · `REST API`

---

### 4. Interactive 3D WebGL Systems Studio
> **Core Essence:** An interactive 3D WebGL spatial visualizer engineered with Three.js and React Three Fiber to visualize distributed micro-architectures and state machines in real time.

<p align="center">
  <a href="https://jexydev.github.io/jexydev-3d-studio/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20ENTER%20INTERACTIVE%203D%20STUDIO-jexydev.github.io%2Fjexydev--3d--studio-38BDF8?style=for-the-badge&labelColor=0B1120&color=38BDF8" alt="Enter JexyDev 3D Studio"/>
  </a>
</p>

* **Stack:** `Vite` · `React 18` · `TypeScript Strict` · `Three.js` · `@react-three/fiber` · `@react-three/drei` · Deployed on **[GitHub Pages](https://jexydev.github.io/jexydev-3d-studio/)**.

---

## 🛠️ Specialized Technical Skills Matrix

### 1. Distributed Backend Engineering & High-Throughput APIs
* **High-Throughput RESTful API Architecture** (Express.js, TypeScript Strict, Route-Controller-Service pattern)
* **Enterprise MVC & Action-Domain-Responder** (Laravel 12, PHP 8.2+)
* **Event-Driven Asynchronous Queues & Worker Pools** (BullMQ, Redis 7)
* **Strict Schema Contracts & Payload Sanitization** (Zod, Type Guards, Joi)
* **Defensive Rate Limiting & Multi-Tier RBAC** (14-Role dynamic permission gates, JWT rotation)

### 2. Database Architecture & Concurrency Control
* **Relational Data Modeling & Spatial Indices** (PostgreSQL 15/17)
* **Enterprise ORM & Migration Management** (Prisma ORM, Eloquent ORM)
* **Pessimistic Concurrency Locking** (`lockForUpdate`, race condition mitigation)
* **ACID Transactional Integrity & Rollback Guards** (`prisma.$transaction`, atomic batch rollbacks)
* **In-Memory Caching & Session Stores** (Redis 7)

### 3. Modern Reactive Client Systems & Cross-Platform Mobile
* **Reactive Single-Page Applications (SPA)** (React 18/19, Vite, TypeScript)
* **Cross-Platform Mobile Application Development** (Flutter, Dart, Riverpod State Management)
* **Geospatial Data Engineering & GIS Mapping** (Leaflet.js, OpenStreetMap, GeoJSON, Turf.js)
* **Utility-First Styling & Design Systems** (Tailwind CSS v4)
* **Client-Side Media Compression & Resilient Offline State** (Zustand, LocalStorage, Canvas processing)

### 4. Industrial IoT, Telemetry & Hardware Protocol Engineering
* **Industrial Serial Communication Protocols** (Modbus RS485 RTU)
* **Hardware Telemetry Ingestion & Packet Verification** (CRC16 Frame Checksums)
* **Multi-Parameter Sensor Acquisition** (7-in-1 Soil Chemistry: pH, EC, Temp, Moisture, N, P, K)
* **Actuator Automation & Relay Switching Logic** (Irrigation, Misting, Nutrient Dosing)

### 5. Systems Reliability, Security & Heuristics
* **Geospatial Anti-Spoofing Heuristics** (Haversine Great-Circle validation, Mock Provider detection)
* **Cryptographic Audit Trails & Tamper Detection** (SHA-256 Hash Chaining)
* **Automated Testing & Static Analysis** (Vitest, Jest, PHPUnit, ESLint, TypeScript Compiler)
* **Defensive Architecture Standards** (Zero-IDOR horizontal privilege protection, SQL injection prevention)

### 6. Cloud Infrastructure, Linux Systems & Automated CI/CD
* **Containerization & Reproducible Environments** (Docker, Docker Compose)
* **Linux Server Administration & Process Supervision** (Ubuntu VPS, PM2 Cluster Mode, Nginx Reverse Proxy, SSL)
* **Automated Multi-Tier CI/CD Workflows** (GitHub Actions Staging & Production Continuous Deployment)
* **Monorepo Governance & Branching Strategies** (3-Tier Git branching: `dev → staging → main`, NPM Workspaces)

---

## 📊 Verified Engineering Telemetry & Activity

<!-- TELEMETRY:START -->
```
╔═══════════════════════════════════════════════════════════════════════════════════════╗
║                   JEXYDEV // SYSTEM TELEMETRY & WORKSPACE PULSE                       ║
╠═══════════════════════════════════════════════════════════════════════════════════════╣
║  Last Synchronized : 25 Nov 2026, 07:39:47 UTC │ 25 Nov 2026, 14:39:47 WIB            ║
║  Lifecycle Velocity: 3,700+ Production Commits Across Repositories (Full Performance) ║
║  Codebase Scale    : 302,189 LoC · 83 Prisma Models · 659 API Endpoints (berseka.id)  ║
║  Hardware Telemetry: Modbus RS485 RTU · CRC16 · 4 Relays Automated (Bitanic)          ║
║  Workspace Status  : ALL PRODUCTION REPOSITORIES SYNCHRONIZED & OPERATIONAL           ║
╚═══════════════════════════════════════════════════════════════════════════════════════╝
```
<!-- TELEMETRY:END -->

---

## 🤝 Professional Contact & Opportunities

I am actively open to **Software Engineering Roles (Fullstack / Backend / Mobile)**, mission-critical contract projects, and high-impact engineering teams.

<p align="center">
  <a href="mailto:Jeremyddarell@gmail.com">
    <img src="https://img.shields.io/badge/Email-Jeremyddarell%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0B1120" alt="Email"/>
  </a>
  <a href="https://github.com/JexyDev">
    <img src="https://img.shields.io/badge/GitHub-JexyDev-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0B1120" alt="GitHub"/>
  </a>
  <a href="https://jexydev.github.io/jexydev-3d-studio/">
    <img src="https://img.shields.io/badge/3D%20Studio-Live%20Showcase-38BDF8?style=for-the-badge&logo=three.js&logoColor=white&labelColor=0B1120" alt="3D Studio"/>
  </a>
  <a href="https://www.linkedin.com/in/jeremy-darrell-andreas/">
    <img src="https://img.shields.io/badge/LinkedIn-Jeremy%20Darrell-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0B1120" alt="LinkedIn"/>
  </a>
</p>

<p align="center">
  <sub>© 2026 Jeremy Darrell Andreas (JexyDev) · SMK Wikrama Bogor · PT. Makerindo Prima Solusi · UNIKOM</sub>
</p>
