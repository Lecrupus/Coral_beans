# Coral Workforce Continuity Dashboard

A focused implementation dashboard demo for workforce continuity risk analysis using dummy data and Coral-style evidence tracking.

## Overview

This project is a static HTML/CSS/JavaScript dashboard that demonstrates how an intelligence system can analyze employee departure risk, surface critical insider signals, and suggest successor readiness based on mock Coral data.

The dashboard includes:
- dynamic employee selection to view risk profiles for different people
- knowledge concentration and departure impact scenarios
- insider risk signals and evidence ledger
- successor intelligence and readiness indicators
- Coral activity log showing mock tool calls and data joins
- responsive layout with a polished visual theme

## Files

- `index.html` — main dashboard page
- `styles.css` — visual styling and responsive layout
- `app.js` — dashboard logic and mock data rendering

## How to run

1. Open `index.html` directly in a browser.
2. Or serve the folder using a simple static server.

Example using Python:

```bash
cd Coral_beans
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Usage

- Select an employee from the dropdown at the top.
- The dashboard updates to show that employee's dummy risk summary, impact scenario data, and Coral-sourced evidence.
- The panels are intentionally implementation-focused and avoid architectural documentation.

## Notes

- This is a mock data demo, not a production system.
- The dataset is hard-coded in `app.js` for demonstration purposes.
- Coral is represented conceptually through tool tags and evidence-driven risk signals.
