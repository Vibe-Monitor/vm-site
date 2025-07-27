import { FiBarChart2, FiBriefcase, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiActivity, FiAlertTriangle, FiGitPullRequest } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
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
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Auto-Improve Observability",
        description: "Our AI identifies missing traces, metrics, and alert rules then automatically raises PRs to add them to your codebase.",
        bullets: [
            {
                title: "Missing Signal Detection",
                description: "Finds gaps in your observability coverage automatically.",
                icon: <FiActivity size={26} />
            },
            {
                title: "Auto-Generated PRs",
                description: "Creates pull requests with the exact tracing and metrics code you need.",
                icon: <FiGitPullRequest size={26} />
            },
            {
                title: "OpenTelemetry Native",
                description: "Works with your existing OTel setup, no vendor lock-in.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Faster Incident Resolution",
        description: "AI analyzes logs, traces, code diffs, and deploy history to identify root causes and recommend specific fix strategies.",
        bullets: [
            {
                title: "Root Cause Analysis",
                description: "Correlates signals across your entire stack to find the real problem.",
                icon: <FiAlertTriangle size={26} />
            },
            {
                title: "Dynamic Service Maps",
                description: "Auto-generated and maintained service dependency graphs from traces.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Fix Recommendations",
                description: "Get specific rollback or patch-forward strategies, not just alerts.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]