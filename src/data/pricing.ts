import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Startup',
        price: 49,
        features: [
            'Up to 10 services',
            'Basic AI incident analysis',
            '30-day data retention',
            'Community support',
            'OpenTelemetry native',
        ],
    },
    {
        name: 'Growth',
        price: 199,
        features: [
            'Up to 100 services',
            'Advanced AI root cause analysis',
            '90-day data retention',
            'Priority support',
            'Auto-generated PRs',
            'Dynamic service maps',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Unlimited services',
            'Custom AI models',
            'Custom data retention',
            '24/7 dedicated support',
            'On-premise deployment',
            'Custom integrations',
        ],
    },
]