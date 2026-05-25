(() => {
  document.documentElement.classList.add("js");

  const revealElements = document.querySelectorAll("[data-reveal]");
  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  const profiles = {
    "Sarah Johnson": {
      name: "Sarah Johnson",
      role: "Principal Engineer",
      summary:
        "Sarah Johnson owns 4 critical systems, 847 unreviewed code segments, and holds sole knowledge of three production runbooks. Insider risk elevated to 71 (mock data).",
      stats: { toolCount: 18, joinCount: 42, evidenceCount: 23, agentCount: 6 },
      impactScenarios: {
        immediate: [
          { label: "Deploy velocity", pct: 85, tone: "accent" },
          { label: "Incident response", pct: 72, tone: "accent" },
          { label: "Sprint throughput", pct: 65, tone: "warn" },
          { label: "Review coverage", pct: 91, tone: "accent" },
          { label: "On-call coverage", pct: 80, tone: "accent" },
        ],
        "30day": [
          { label: "Deploy velocity", pct: 52, tone: "warn" },
          { label: "Incident response", pct: 44, tone: "warn" },
          { label: "Sprint throughput", pct: 38, tone: "teal" },
          { label: "Review coverage", pct: 60, tone: "warn" },
          { label: "On-call coverage", pct: 50, tone: "warn" },
        ],
        fullkt: [
          { label: "Deploy velocity", pct: 22, tone: "teal" },
          { label: "Incident response", pct: 18, tone: "teal" },
          { label: "Sprint throughput", pct: 15, tone: "teal" },
          { label: "Review coverage", pct: 28, tone: "teal" },
          { label: "On-call coverage", pct: 20, tone: "teal" },
        ],
        teamloss: [
          { label: "Deploy velocity", pct: 95, tone: "accent" },
          { label: "Incident response", pct: 98, tone: "accent" },
          { label: "Sprint throughput", pct: 92, tone: "accent" },
          { label: "Review coverage", pct: 100, tone: "accent" },
          { label: "On-call coverage", pct: 96, tone: "accent" },
        ],
      },
      risks: [
        { name: "Sarah Johnson", role: "Principal Engineer", score: 91, tone: "accent", initials: "SJ", target: true },
        { name: "Marcus Chen", role: "Staff SRE", score: 78, tone: "warn", initials: "MC" },
        { name: "Priya Nair", role: "Lead Architect", score: 74, tone: "warn", initials: "PN" },
        { name: "Tom Adeyemi", role: "Senior Data Eng", score: 61, tone: "teal", initials: "TA" },
        { name: "Zoe Larsson", role: "Security Lead", score: 58, tone: "teal", initials: "ZL" },
      ],
      successors: [
        { rank: 1, name: "Marcus Chen", dept: "Platform SRE", overlap: "78%", readiness: "Partial", tone: "warn", initials: "MC" },
        { rank: 2, name: "Priya Nair", dept: "Architecture", overlap: "64%", readiness: "Low", tone: "accent", initials: "PN" },
        { rank: 3, name: "David Park", dept: "Backend Eng", overlap: "51%", readiness: "Low", tone: "teal", initials: "DP" },
      ],
      evidence: [
        { score: "92", title: "Sole owner of payment gateway deployment", source: "GitHub + Jira + Confluence", tag: "risk" },
        { score: "87", title: "847 PRs awaiting single reviewer", source: "GitHub reviews, last 30d", tag: "bottleneck" },
        { score: "81", title: "No backup runbook owner for auth service", source: "Confluence gap analysis", tag: "gap" },
        { score: "74", title: "Dormant IAM role accessed after 180d", source: "IAM + SIEM correlation", tag: "signal" },
      ],
      activity: [
        { tool: "github_get_employee_ownership", meta: "Mapped 11 repos, 3 critical paths for Sarah", status: "joined" },
        { tool: "slack_get_knowledge_map", meta: "Detected 4 decision threads and 2 private channels", status: "joined" },
        { tool: "iam_get_access_exposure", meta: "Identified 2 dormant prod roles she owns", status: "alert" },
        { tool: "run_continuity_simulation", meta: "Scenario: 30-day notice, velocity impact -42%", status: "modeled" },
        { tool: "find_successor_candidates", meta: "Ranked 8 successors, top overlap 78%", status: "ranked" },
        { tool: "generate_transfer_plan", meta: "Generated 23-step transfer plan for Sarah", status: "plan" },
      ],
      message: "Sarah Johnson owns 4 critical systems, 847 unreviewed code segments, and holds sole knowledge of three production runbooks. Insider risk elevated to 71 (mock data).",
    },
    "Marcus Chen": {
      name: "Marcus Chen",
      role: "Staff SRE",
      summary:
        "Marcus Chen is flagged for elevated infrastructure ownership risk, with 5 high-risk credential paths and limited backup handoff coverage. Coral marks the platform SRE cluster as vulnerable.",
      stats: { toolCount: 16, joinCount: 38, evidenceCount: 18, agentCount: 5 },
      impactScenarios: {
        immediate: [
          { label: "Deploy velocity", pct: 74, tone: "warn" },
          { label: "Incident response", pct: 68, tone: "warn" },
          { label: "Sprint throughput", pct: 59, tone: "teal" },
          { label: "Review coverage", pct: 66, tone: "warn" },
          { label: "On-call coverage", pct: 70, tone: "warn" },
        ],
        "30day": [
          { label: "Deploy velocity", pct: 48, tone: "warn" },
          { label: "Incident response", pct: 38, tone: "warn" },
          { label: "Sprint throughput", pct: 32, tone: "teal" },
          { label: "Review coverage", pct: 50, tone: "warn" },
          { label: "On-call coverage", pct: 44, tone: "warn" },
        ],
        fullkt: [
          { label: "Deploy velocity", pct: 25, tone: "teal" },
          { label: "Incident response", pct: 22, tone: "teal" },
          { label: "Sprint throughput", pct: 18, tone: "teal" },
          { label: "Review coverage", pct: 35, tone: "teal" },
          { label: "On-call coverage", pct: 28, tone: "teal" },
        ],
        teamloss: [
          { label: "Deploy velocity", pct: 85, tone: "accent" },
          { label: "Incident response", pct: 88, tone: "accent" },
          { label: "Sprint throughput", pct: 81, tone: "accent" },
          { label: "Review coverage", pct: 94, tone: "accent" },
          { label: "On-call coverage", pct: 90, tone: "accent" },
        ],
      },
      risks: [
        { name: "Marcus Chen", role: "Staff SRE", score: 78, tone: "warn", initials: "MC", target: true },
        { name: "Sarah Johnson", role: "Principal Engineer", score: 91, tone: "accent", initials: "SJ" },
        { name: "Priya Nair", role: "Lead Architect", score: 74, tone: "warn", initials: "PN" },
        { name: "Tom Adeyemi", role: "Senior Data Eng", score: 61, tone: "teal", initials: "TA" },
        { name: "Zoe Larsson", role: "Security Lead", score: 58, tone: "teal", initials: "ZL" },
      ],
      successors: [
        { rank: 1, name: "Priya Nair", dept: "Architecture", overlap: "64%", readiness: "Low", tone: "accent", initials: "PN" },
        { rank: 2, name: "David Park", dept: "Backend Eng", overlap: "51%", readiness: "Low", tone: "teal", initials: "DP" },
        { rank: 3, name: "Zoe Larsson", dept: "Security", overlap: "46%", readiness: "Low", tone: "teal", initials: "ZL" },
      ],
      evidence: [
        { score: "89", title: "No secondary SRE owner for K8s cluster", source: "Terraform state and cluster logs", tag: "gap" },
        { score: "84", title: "5 critical runbooks only owned by Marcus", source: "Confluence handoff review", tag: "risk" },
        { score: "79", title: "Credential rotation gaps in prod credentials", source: "IAM audit", tag: "signal" },
        { score: "72", title: "High-change service alerts with single responder", source: "PagerDuty logs", tag: "bottleneck" },
      ],
      activity: [
        { tool: "github_get_employee_ownership", meta: "Mapped 8 infra repos and 3 critical ops paths", status: "joined" },
        { tool: "slack_get_knowledge_map", meta: "Found 2 private on-call channels and 1 escalation path", status: "joined" },
        { tool: "iam_get_access_exposure", meta: "Detected stale prod role bindings for Marcus", status: "alert" },
        { tool: "run_continuity_simulation", meta: "Scenario: 30-day notice, on-call impact -38%", status: "modeled" },
        { tool: "generate_transfer_plan", meta: "Created 18-step SRE transfer checklist", status: "plan" },
      ],
      message:
        "Marcus Chen is flagged for elevated infrastructure ownership risk, with 5 high-risk credential paths and limited backup handoff coverage. Coral marks the platform SRE cluster as vulnerable.",
    },
    "Priya Nair": {
      name: "Priya Nair",
      role: "Lead Architect",
      summary:
        "Priya Nair owns architecture strategy for two core services and has 6 design decisions without fallback owners. Coral highlights architecture concentration risk and backlog dependency exposure.",
      stats: { toolCount: 14, joinCount: 35, evidenceCount: 20, agentCount: 5 },
      impactScenarios: {
        immediate: [
          { label: "Deploy velocity", pct: 81, tone: "warn" },
          { label: "Incident response", pct: 69, tone: "warn" },
          { label: "Sprint throughput", pct: 62, tone: "warn" },
          { label: "Review coverage", pct: 72, tone: "warn" },
          { label: "On-call coverage", pct: 67, tone: "warn" },
        ],
        "30day": [
          { label: "Deploy velocity", pct: 43, tone: "teal" },
          { label: "Incident response", pct: 34, tone: "teal" },
          { label: "Sprint throughput", pct: 31, tone: "teal" },
          { label: "Review coverage", pct: 46, tone: "teal" },
          { label: "On-call coverage", pct: 39, tone: "teal" },
        ],
        fullkt: [
          { label: "Deploy velocity", pct: 20, tone: "teal" },
          { label: "Incident response", pct: 16, tone: "teal" },
          { label: "Sprint throughput", pct: 14, tone: "teal" },
          { label: "Review coverage", pct: 25, tone: "teal" },
          { label: "On-call coverage", pct: 22, tone: "teal" },
        ],
        teamloss: [
          { label: "Deploy velocity", pct: 89, tone: "accent" },
          { label: "Incident response", pct: 92, tone: "accent" },
          { label: "Sprint throughput", pct: 85, tone: "accent" },
          { label: "Review coverage", pct: 97, tone: "accent" },
          { label: "On-call coverage", pct: 91, tone: "accent" },
        ],
      },
      risks: [
        { name: "Priya Nair", role: "Lead Architect", score: 74, tone: "warn", initials: "PN", target: true },
        { name: "Sarah Johnson", role: "Principal Engineer", score: 91, tone: "accent", initials: "SJ" },
        { name: "Marcus Chen", role: "Staff SRE", score: 78, tone: "warn", initials: "MC" },
        { name: "Tom Adeyemi", role: "Senior Data Eng", score: 61, tone: "teal", initials: "TA" },
        { name: "Zoe Larsson", role: "Security Lead", score: 58, tone: "teal", initials: "ZL" },
      ],
      successors: [
        { rank: 1, name: "Zoe Larsson", dept: "Security", overlap: "56%", readiness: "Partial", tone: "teal", initials: "ZL" },
        { rank: 2, name: "David Park", dept: "Backend Eng", overlap: "49%", readiness: "Low", tone: "teal", initials: "DP" },
        { rank: 3, name: "Tom Adeyemi", dept: "Data Eng", overlap: "46%", readiness: "Low", tone: "teal", initials: "TA" },
      ],
      evidence: [
        { score: "88", title: "Two core design decisions without fallback ownership", source: "Architecture review", tag: "gap" },
        { score: "83", title: "Architecture runbooks only reviewed by Priya", source: "Confluence audit", tag: "risk" },
        { score: "77", title: "Dependency map shows three single-owner services", source: "Service catalog", tag: "signal" },
        { score: "70", title: "Platform-to-app handoff lacks coverage for key APIs", source: "Jira backlog", tag: "bottleneck" },
      ],
      activity: [
        { tool: "github_get_employee_ownership", meta: "Mapped 6 design repos and 2 architecture docs", status: "joined" },
        { tool: "slack_get_knowledge_map", meta: "Found 5 architecture discussion threads", status: "joined" },
        { tool: "iam_get_access_exposure", meta: "Detected broad access to design artifacts", status: "alert" },
        { tool: "run_continuity_simulation", meta: "Scenario: 30-day notice, architecture risk -34%", status: "modeled" },
        { tool: "generate_transfer_plan", meta: "Created 16-step architecture handoff plan", status: "plan" },
      ],
      message:
        "Priya Nair owns architecture strategy for two core services and has 6 design decisions without fallback owners. Coral highlights architecture concentration risk and backlog dependency exposure.",
    },
  };

  const tones = {
    accent: "#e05a2f",
    warn: "#f2c14e",
    teal: "#0f8a8f",
    gold: "#d4a843",
  };

  const employeeSelect = document.querySelector("#employee-select");
  const employeeNameEl = document.querySelector("[data-employee-name]");
  const employeeSummaryEl = document.querySelector("[data-employee-summary]");
  const employeeBadgeEl = document.querySelector("[data-employee-badge]");
  const queryTextEl = document.querySelector("[data-query-text]");
  const riskList = document.querySelector("[data-risk-list]");
  const successorList = document.querySelector("[data-successor-list]");
  const activityLog = document.querySelector("[data-activity-log]");
  const evidenceList = document.querySelector("[data-evidence-list]");
  const toolCountEl = document.querySelector("[data-tool-count]");
  const joinCountEl = document.querySelector("[data-join-count]");
  const evidenceCountEl = document.querySelector("[data-evidence-count]");
  const agentCountEl = document.querySelector("[data-agent-count]");
  const impactSection = document.querySelector("[data-impact-section]");
  const impactTabs = impactSection ? Array.from(impactSection.querySelectorAll("[data-impact-tab]")) : [];
  const impactBars = impactSection ? impactSection.querySelector("[data-impact-bars]") : null;

  let activeImpactKey = "immediate";
  let currentProfile = profiles[employeeSelect?.value || "Sarah Johnson"];

  const renderImpact = (profile, key) => {
    if (!impactBars || !profile) return;
    const data = profile.impactScenarios[key] || profile.impactScenarios.immediate;
    impactBars.innerHTML = data
      .map(
        (item) => `
          <div class="impact-row">
            <div class="impact-label">${item.label}</div>
            <div class="impact-track">
              <div class="impact-fill" style="background:${tones[item.tone]};width:0%" data-pct="${item.pct}"></div>
            </div>
            <div class="impact-pct" style="color:${tones[item.tone]}">${item.pct}%</div>
          </div>
        `
      )
      .join("");

    requestAnimationFrame(() => {
      impactBars.querySelectorAll(".impact-fill").forEach((bar) => {
        bar.style.width = `${bar.dataset.pct}%`;
      });
    });
  };

  const renderRiskList = (items) => {
    if (!riskList) return;
    const toneMap = {
      accent: { color: "#e05a2f", background: "rgba(224, 90, 47, 0.16)" },
      warn: { color: "#f2c14e", background: "rgba(242, 193, 78, 0.18)" },
      teal: { color: "#0f8a8f", background: "rgba(15, 138, 143, 0.16)" },
    };

    riskList.innerHTML = items
      .map((item) => {
        const tone = toneMap[item.tone] || toneMap.warn;
        const targetClass = item.target ? "risk-row is-target" : "risk-row";
        const targetTag = item.target ? `<span class="risk-target">Target</span>` : "";
        return `
          <div class="${targetClass}">
            <div class="risk-avatar" style="background:${tone.background};color:${tone.color}">${item.initials}</div>
            <div>
              <div class="risk-name">${item.name}</div>
              <div class="risk-role">${item.role}</div>
            </div>
            <div class="risk-bar-track">
              <div class="risk-bar-fill" style="width:${item.score}%;background:${tone.color}"></div>
            </div>
            <div class="risk-score" style="color:${tone.color}">${item.score}</div>
            ${targetTag}
          </div>
        `;
      })
      .join("");
  };

  const renderSuccessorList = (items) => {
    if (!successorList) return;
    const toneMap = {
      accent: { color: "#e05a2f", background: "rgba(224, 90, 47, 0.16)" },
      warn: { color: "#f2c14e", background: "rgba(242, 193, 78, 0.18)" },
      teal: { color: "#0f8a8f", background: "rgba(15, 138, 143, 0.16)" },
    };

    successorList.innerHTML = items
      .map((item) => {
        const tone = toneMap[item.tone] || toneMap.teal;
        return `
          <div class="successor-item">
            <div class="successor-rank">#${item.rank}</div>
            <div class="successor-avatar" style="background:${tone.background};color:${tone.color}">${item.initials}</div>
            <div>
              <div class="successor-name">${item.name}</div>
              <div class="successor-dept">${item.dept} · ${item.overlap} overlap</div>
            </div>
            <div class="readiness-badge" style="background:${tone.background};color:${tone.color};border-color:${tone.color}">
              ${item.readiness}
            </div>
          </div>
        `;
      })
      .join("");
  };

  const renderActivityLog = (items) => {
    if (!activityLog) return;
    activityLog.innerHTML = items
      .map(
        (item, idx) => `
          <div class="activity-item">
            <div class="activity-time">${idx + 1}m ago</div>
            <div>
              <div class="activity-tool">${item.tool}</div>
              <div class="activity-meta">${item.meta}</div>
            </div>
            <div class="activity-status">${item.status}</div>
          </div>
        `
      )
      .join("");
  };

  const renderEvidence = (items) => {
    if (!evidenceList) return;
    evidenceList.innerHTML = items
      .map(
        (item) => `
          <div class="evidence-item">
            <div class="evidence-score">${item.score}</div>
            <div>
              <div class="evidence-title">${item.title}</div>
              <div class="evidence-source">${item.source}</div>
            </div>
            <div class="evidence-tag">${item.tag}</div>
          </div>
        `
      )
      .join("");
  };

  const updateStats = (stats) => {
    if (!stats) return;
    if (toolCountEl) toolCountEl.textContent = stats.toolCount;
    if (joinCountEl) joinCountEl.textContent = stats.joinCount;
    if (evidenceCountEl) evidenceCountEl.textContent = stats.evidenceCount;
    if (agentCountEl) agentCountEl.textContent = stats.agentCount;
  };

  const setActiveImpactTab = (key) => {
    activeImpactKey = key;
    impactTabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.impactTab === key);
    });
    renderImpact(currentProfile, key);
  };

  const renderProfile = (profile) => {
    if (!profile) return;
    currentProfile = profile;
    if (employeeNameEl) employeeNameEl.textContent = profile.name;
    if (employeeSummaryEl) employeeSummaryEl.textContent = profile.message;
    if (employeeBadgeEl) employeeBadgeEl.textContent = profile.name;
    if (queryTextEl)
      queryTextEl.innerHTML = `"What happens if <span class=\"query-highlight\">${profile.name}</span> leaves in 30 days?"`;

    renderRiskList(profile.risks);
    renderSuccessorList(profile.successors);
    renderActivityLog(profile.activity);
    renderEvidence(profile.evidence);
    updateStats(profile.stats);
    setActiveImpactTab(activeImpactKey);
  };

  if (impactTabs.length) {
    impactTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveImpactTab(tab.dataset.impactTab);
      });
    });
  }

  if (employeeSelect) {
    employeeSelect.addEventListener("change", () => {
      const profile = profiles[employeeSelect.value];
      renderProfile(profile);
    });
    renderProfile(profiles[employeeSelect.value] || profiles["Sarah Johnson"]);
  } else {
    renderProfile(profiles["Sarah Johnson"]);
  }

  const heatmap = document.querySelector("[data-heatmap]");
  if (heatmap) {
    const areas = [
      ["API Core", 95],
      ["Auth", 88],
      ["DB Layer", 42],
      ["CI/CD", 67],
      ["Payments", 91],
      ["K8s Ops", 74],
      ["Data Pipe", 55],
      ["Monitoring", 38],
      ["Mobile", 29],
      ["Search", 81],
      ["ML Infra", 88],
      ["IAM", 70],
      ["Gateway", 93],
      ["Cache", 45],
      ["Queue", 60],
      ["CDN", 22],
    ];

    const hexToRgb = (hex) => {
      const clean = hex.replace("#", "");
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16),
      };
    };

    const mix = (a, b, t) => ({
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t),
    });

    const start = hexToRgb("#0f8a8f");
    const end = hexToRgb("#e05a2f");

    heatmap.innerHTML = areas
      .map(([label, score]) => {
        const t = Math.min(Math.max(score / 100, 0), 1);
        const color = mix(start, end, t);
        const background = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.25 + t * 0.55})`;
        const text = t > 0.6 ? "#ffffff" : "#213036";
        return `
          <div class="heat-cell" style="background:${background};color:${text}" title="${label}: ${score}">${score}</div>
        `;
      })
      .join("");
  }

  const lastSyncEl = document.querySelector("[data-last-sync]");
  if (lastSyncEl) {
    const syncStart = Date.now() - 120000;
    const updateSync = () => {
      const delta = Math.max(0, Date.now() - syncStart);
      const minutes = Math.max(1, Math.round(delta / 60000));
      lastSyncEl.textContent = `${minutes}m ago`;
    };
    updateSync();
    setInterval(updateSync, 30000);
  }
})();
