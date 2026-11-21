# BERSEKA — Technical Architecture & Engineering Case Study
### Enterprise Smart City Waste Management & Multi-Tier Field Research System

> **Production System:** [berseka.id](https://berseka.id) · **Staging:** [staging.berseka.id](https://staging.berseka.id)  
> **Repository:** [github.com/JexyDev/Pilah-Sampah-Cerdas](https://github.com/JexyDev/Pilah-Sampah-Cerdas)  
> **Lead Architect & Developer:** Jeremy Darrell Andreas (`JexyDev`)  
> **Project Context:** High-stakes Vocational Internship (PKL) / Capstone deployed for Kota Bandung municipal governance and university KKN Tematik operations  
> **Engineering Duration:** July 2026 – November 2026 (Active Lifecycle)  

---

## 1. Executive Summary

Most software projects built in educational or internship settings are disposable CRUD proofs-of-concept. **BERSEKA (Bersih, Sehat, Kampung Asri)** was built under the exact opposite philosophy: **high-stakes production readiness from day one.**

Faced with the challenge of unifying Kota Bandung's fragmented municipal waste sorting protocols with field operations of 100+ university KKN Tematik students and local citizen participation across dozens of Rukun Warga (RW), the engineering team delivered an enterprise-grade monorepo containing:
- **83 relational domain models** in Prisma ORM (1,967 schema lines).
- **659 documented REST API endpoints** distributed over 54 domain route controllers.
- **302,189 lines of strict TypeScript** spanning backend services, background workers, and a 67-view React 18 client.
- **4,119 Git commits** managed through a rigorous 3-tier branch strategy (`dev → staging → main`) with zero-downtime VPS CI/CD pipelines.

---

## 2. Verified Scale & Forensic Engineering Metrics

Every number below is extracted directly from production repositories and verified through git logs and static code analysis:

| Architecture Metric | Verified Production Value | Technical Significance |
|:---|:---|:---|
| **Total Git Commits** | **4,119 commits** | Extreme velocity over a 5-month sprint (avg. 28+ commits/day) |
| **Personal Contribution (`JexyDev`)** | **~1,949 commits (37%+)** | Lead architect, lead API designer, and primary code reviewer |
| **Prisma Relational Models** | **83 models** | Cross-linked relational schema with foreign key integrity and indexes |
| **Database Columns** | **951+ columns** | 5-tier spatial hierarchies, multi-tenant scopes, financial ledgers |
| **REST API Endpoints** | **659 endpoints** | Scoped across 54 route modules with middleware validation |
| **Source Code Volume** | **302,189 lines of code** | 563 total TypeScript/TSX source files (307 API, 256 Web) |
| **Web Dashboard Views** | **67 discrete pages** | Role-gated dashboards (Admin, Petugas, Warga, Mahasiswa, Dosen) |
| **Automated Test Matrix** | **73 Vitest test suites** | Unit, integration, middleware, and domain invariant tests |
| **Deployment Environments** | **2 active live VPS nodes** | Staging (`staging.berseka.id`) + Production (`berseka.id`) |
| **Peak Day Velocity** | **135 commits (Sep 17, 2026)** | High-throughput deployment during core KKN rollout |

---

## 3. High-Level System Architecture

BERSEKA is structured as an NPM Workspaces monorepo enforcing **Clean Architecture** principles across two decoupled tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT PRESENTATION TIER                        │
│   React 18 + Vite (67 Pages) │ Leaflet & Turf.js GIS │ ZXing QR Engine │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / WSS / JWT
┌───────────────────────────────────▼────────────────────────────────────┐
│                        GATEWAY & MIDDLEWARE TIER                       │
│    Rate Limiting │ RBAC Permission Matrix │ Data-Scope Scoping Guard   │
│         Audit Trail Dispatcher │ File Upload Security & Magic Bytes     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Express.js (Node.js 20 LTS)
┌───────────────────────────────────▼────────────────────────────────────┐
│                         CORE APPLICATION LAYER                         │
│   54 Route Controllers │ 62 Services │ Domain Entities & Interfaces    │
└─────────────┬─────────────────────┬──────────────────────┬─────────────┘
              │                     │                      │
┌─────────────▼──────────┐ ┌────────▼──────────┐ ┌─────────▼─────────────┐
│  DATA PERSISTENCE TIER │ │ ASYNC WORKER TIER │ │ EXTERNAL INTEGRATIONS │
│  PostgreSQL 15 (Docker)│ │ BullMQ + Redis 7  │ │ Firebase Admin SDK    │
│  Prisma ORM (83 Models)│ │ Scheduled Crons   │ │ Computer Vision AI    │
│  Read/Write Connection │ │ Audit Archival    │ │ CH4 IoT Telemetry Hub │
└────────────────────────┘ └───────────────────┘ └───────────────────────┘
```

---

## 4. The 12 Domain Verticals

The 83 Prisma models map directly to 12 production domain areas:

1. **Identity, Auth & Dynamic RBAC:** JWT authentication, refresh token rotation, phone OTP verification, and granular permission switches across 5 primary roles.
2. **5-Tier Geospatial Hierarchy:** Geographic boundary management down to the block level: `Provinsi → Kabupaten → Kecamatan → Kelurahan → RW → RT`.
3. **Core Waste Lifecycle:** Bin provisioning, QR batch generation, automated deposit logging, manual weigh-in audits, and contamination tracking.
4. **Academic KKN Fieldwork Platform:** Period scheduling, team allocation, student assignment, geolocation-tagged presence logs, and electronic logbook workflows.
5. **Academic Grading & Certification:** 4-scale rubric grading, peer reviews, final group thesis report verification, and dynamic E-Certificate generation.
6. **AI Computer Vision & Dataset Engine:** In-browser and server-assisted waste image classification (`@zxing/browser` + image optimization pipeline).
7. **Incentive Economy & Gamification:** Centralized anti-leak point ledger, community leaderboards, achievement tiers, and recycling rewards.
8. **Empirical Survey & Research Pipeline:** Baseline vs. Endline surveys capturing neighborhood waste composition, processing capacity, and key actors.
9. **Financial & Bank Sampah Accounting:** Double-entry ledger tracking citizen balances, cash-out requests, and waste buyer settlements.
10. **Facility & Logistics Operations:** Municipal waste processing plants (TPS3R, Bank Sampah Induk), processing logs, and collection fleet dispatch.
11. **Regulatory Compliance & Tamper-Evident Audit:** Append-only audit trails, user action history cutoffs, violation tracking, and archival cron jobs.
12. **Content Management & Public Communication:** Neighborhood guides, educational feeds, announcement broadcast channels, and mobile push notifications.

---

## 5. Key Engineering Challenges & Critical Solutions

### Challenge 1: Multi-Tenant Data Leakage & IDOR Prevention
- **Problem:** A Camat (District Head), Lurah (Subdistrict Head), RW Leader, and student intern all access the same API endpoints, but must only view records within their exact administrative boundary.
- **Solution:** Implemented `dataScopeMiddleware.ts` and `camatLurahScoping` guards that dynamically inject geographic filters (`kelurahanId`, `rwId`, `schoolId`) directly into Prisma query predicates at the infrastructure layer, making horizontal privilege escalation structurally impossible.

### Challenge 2: Concurrency & Double-Spend in Citizen Point Allocations
- **Problem:** High-volume waste deposits at community centers could trigger race conditions, allowing citizens to duplicate point claims before ledger commits.
- **Solution:** Designed a centralized, transactional point service (`centralizedPoints.ts`) leveraging PostgreSQL isolation levels and strict database-level unique constraints. All point movements record immutable debit/credit entries in `BankSampahLedger`.

### Challenge 3: Heavy Background Job Offloading
- **Problem:** Generating PDF activity certificates, processing spatial turf calculations, and archiving audit logs degraded API response times under high concurrency.
- **Solution:** Integrated **BullMQ with Redis 7** to process resource-intensive tasks asynchronously. The API returns immediate HTTP 202 status codes while background workers handle computation with retry exponential backoff.

### Challenge 4: Resilient Offline & Low-Bandwidth Field Operations
- **Problem:** University students and field waste collectors frequently operate in low-connectivity environments where network dropouts are frequent.
- **Solution:** Built client-side caching with Zustand and local storage, paired with automatic request retries and client-side image compression (`browser-image-compression`) before multipart uploads, reducing cellular payload sizes by over 80%.

---

## 6. Engineering Standards & Quality Culture

- **Strict Type Safety:** Zero `any` policy enforced through TypeScript strict mode and shared domain contracts.
- **Schema Contracts:** All API payloads strictly validated with **Zod** before hitting service layers.
- **Automated Testing:** 73 Vitest test suites covering authentication, scoping middleware, point math, and bin lifecycle operations.
- **ISO/IEC 12207 Documentation:** Complete PRD, SRS, SDD, and deployment runbooks authored and maintained directly in the repository `/docs/` folder.
- **Zero-Downtime CI/CD:** GitHub Actions workflows executing typechecking, test suites, and SSH deployment scripts targeting live Linux VPS nodes.

---

## 7. The Takeaway

BERSEKA is tangible proof of **engineering maturity under pressure**. Built not with ivory-tower abstractions, but with pragmatic, resilient code that solves real-world human problems at municipal scale.

```
"Good code is not defined by how clever it looks on paper. 
It is defined by whether it stays up when real people depend on it."
— Jeremy Darrell Andreas
```
