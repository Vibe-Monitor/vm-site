import { FiBarChart2, FiShare2, FiPieChart, FiTool, FiTarget, FiTrendingUp, FiActivity, FiSearch, FiGitPullRequest } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Faster Error Resolution",
        description: "Analyzes logs, metrics, traces, latest service graph, code diffs, and deploy history using LLMs to identify root cause and recommend specific fix strategies.",
        bullets: [
            {
                title: "Root Cause Analysis",
                description: "Correlates signals across your entire stack to find the real problem.",
                icon: <FiSearch size={26} />
            },
            {
                title: "Dynamic Service Graphs",
                description: "Auto-generated and maintained service dependency graphs from traces.",
                icon: <FiShare2 size={26} />
            },
            {
                title: "Fix Recommendations",
                description: "Get specific rollback or patch-forward strategies, not just alerts.",
                icon: <FiTool size={26} />
            }
        ]
    },
    {
        title: "Auto-Improve Observability",
        description: "Regularly scans all your repositories using LLMs to identify missing instrumentation for logs, metrics and traces and then raises PRs to add missing instrumentation.",
        bullets: [
            {
                title: "Missing Signal Detection",
                description: "Finds gaps in your observability coverage automatically.",
                icon: <FiActivity size={26} />
            },
            {
                title: "Auto-Generated PRs",
                description: "Creates pull requests with the exact logging, metrics and tracing code needed.",
                icon: <FiGitPullRequest size={26} />
            },
            {
                title: "OpenTelemetry Native",
                description: "Works with your existing OTel setup, no vendor lock-in.",
                icon: <FiPieChart size={26} />
            }
        ]
    },
    {
        title: "Reduce Alert Fatigue",
        description: "Stop drowning in noisy alerts. Our AI clusters and summarizes alerts, giving you only what matters when incidents actually happen.",
        bullets: [
            {
                title: "AI-Based Alert Clustering",
                description: "Groups related alerts to reduce noise and focus on root issues.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Smart Summarization",
                description: "Get incident summaries that highlight what's actually broken.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Context-Aware Alerting",
                description: "Alerts that understand your deployment patterns and code changes.",
                icon: <FiTrendingUp size={26} />
            }
        ]
    },
]