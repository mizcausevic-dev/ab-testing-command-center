# A/B Testing Command Center

> **React + TypeScript portfolio project** demonstrating experiment portfolio visibility, segment lift interpretation, rollout decisioning, KPI guardrails, and executive-friendly experimentation workflow design.

**Recruiter takeaway:** *"This person understands experimentation as an operating system for growth decisions, not just charts about uplift."*

---

## Project Overview

| Attribute | Detail |
|---|---|
| **Frontend Stack** | React 19 + Vite + TypeScript |
| **Domain** | Experimentation, rollout decisioning, growth operations |
| **Audience** | Growth, product, lifecycle, revenue operations, executive stakeholders |
| **Signal Areas** | Variant lift · rollout confidence · segment impact · guardrail holds |
| **Portfolio Role** | Frontend proof of experimentation control-surface product thinking |
| **Validation** | Vitest + Testing Library |

---

## Executive Summary

A/B Testing Command Center is a recruiter-ready frontend project built to feel like a real internal experimentation workspace. Instead of treating experimentation as isolated charts or a stats export, it turns hypotheses, segment lift, guardrail holds, and rollout recommendations into one command surface that operators and leaders can read together.

This repo is designed to show that experimentation becomes more valuable when it helps teams decide what to ship, what to hold, and what to rerun with confidence.

---

## Business Problem

Experimentation programs break down when lift analysis, segment insights, rollout decisions, and guardrail review all live in separate places. That creates predictable failure modes:

- winning variants wait too long for decisions
- weak experiments get rerun without cleaner audience logic
- commercial and lifecycle tests compete for attention with no common queue
- leadership can see activity, but not which experiments actually deserve rollout

Teams need a control surface that translates test results into operational decisions.

---

## Solution

This project reframes experimentation as an operator-grade product surface for:

- test portfolio visibility
- segment-level lift interpretation
- guardrail and hold decisions
- rollout and rerun recommendations
- executive-readable experiment posture

---

## Architecture

```mermaid
flowchart LR
    A["Experiment portfolio"] --> B["Typed frontend data model"]
    C["Lift and KPI signals"] --> B
    D["Guardrail and rollout decisions"] --> B
    B --> E["Experiment command shell"]
    E --> F["Portfolio trend view"]
    E --> G["Executive spotlight cards"]
    E --> H["Experiment snapshot cards"]
    E --> I["Segment lift analysis"]
    E --> J["Decision queue"]
```

### Workspace Flow

1. Teams land on one experimentation posture view.
2. Trend and spotlight sections show how fast wins are shipping and where pressure is building.
3. Experiment cards make hypotheses and confidence readable at a glance.
4. Segment lift analytics show where gains are actually concentrated.
5. The decision queue turns analysis into ship, hold, expand, or rerun actions.

---

## Screenshots

### Hero Capture

![A/B testing command center hero](screenshots/01-hero.png)

### Experiment Trend and Executive Spotlight

![Experiment trend and executive spotlight](screenshots/02-trend.png)

### Portfolio and Segment Lift

![Portfolio and segment lift](screenshots/03-portfolio.png)

### Validation Proof

![Validation proof](screenshots/04-proof.png)

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Command-center framing** | Makes the repo feel like a real experimentation operating system instead of a reporting view |
| **Portfolio + queue combination** | Connects strategic overview with operational decision-making |
| **Segment-lift emphasis** | Shows the business nuance behind uplift rather than generic top-line wins |
| **Static data model** | Keeps the repo easy to run while preserving product realism |
| **Distinct experimentation visual theme** | Gives the project its own identity separate from attribution, forecasting, and AI tools |

---

## What An Engineering Leader Sees Here

- frontend execution grounded in experimentation workflow reality
- product thinking around rollout decisions, not just metrics display
- internal-tool UX that supports cross-functional growth operations
- broader portfolio credibility across growth, revenue, AI, identity, compliance, and executive systems

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/mizcausevic-dev/ab-testing-command-center.git
cd ab-testing-command-center
npm install
cp .env.example .env
npm run dev
```

Open:

- `http://localhost:5173`

### Run Tests

```bash
npm test
```

### Build

```bash
npm run build
```

---

## What This Demonstrates

- experimentation workflow understanding
- rollout and rerun decision product design
- executive-facing growth systems UX
- React + TypeScript delivery with production-minded repo hygiene
- portfolio range beyond backend analytics and isolated dashboards

---

## Future Enhancements

- experiment dependency mapping
- deeper cohort drilldowns
- feature-flag and phased-rollout overlays
- notes and decision-log timelines
- experiment velocity forecasting

---

## Tech Stack

[![React](https://img.shields.io/badge/React-19-231813?style=for-the-badge&logo=react&logoColor=67E8F9&labelColor=231813&color=3A231B)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-231813?style=for-the-badge&logo=vite&logoColor=FCD34D&labelColor=231813&color=7C2D12)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-231813?style=for-the-badge&logo=typescript&logoColor=white&labelColor=231813&color=2563EB)](https://www.typescriptlang.org/)
[![Recharts](https://img.shields.io/badge/Recharts-Growth_Analytics-231813?style=for-the-badge&logo=chartdotjs&logoColor=white&labelColor=231813&color=F97316)](https://recharts.org/en-US/)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-231813?style=for-the-badge&logo=vitest&logoColor=white&labelColor=231813&color=34D399)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-231813?style=for-the-badge&logo=open-source-initiative&logoColor=white&labelColor=231813&color=84CC16)](https://opensource.org/license/mit)

### Portfolio Links

- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Skills Page](https://mizcausevic.com/skills/)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)

---

*Part of [mizcausevic-dev's GitHub portfolio](https://github.com/mizcausevic-dev) — demonstrating experimentation systems design, operator-facing rollout decisioning, and executive-readable growth workflow UX.*
