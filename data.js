

export const templates = [
    {
        id: 1,
        type: 'kpi',
        title: 'Return on Ad Spend (ROAS)',
        category: 'Digital Marketing',
        metricId: 'MKT-ROAS-24',
        description: 'Measures the efficiency of digital advertising spend by comparing generated revenue versus campaign costs.',
        businessQuestions: [
            'Quais canais de aquisição têm melhor ROI?',
            'Qual é o impacto sazonal no desempenho das campanhas?',
            'Como otimizar budget entre diferentes plataformas?'
        ],
        calculation: '(Total Attributed Revenue ÷ Total Campaign Cost) × 100',
        visualsAvailable: [
            { type: 'time-series', name: 'Trend Analysis' },
            { type: 'comparison', name: 'Channel Breakdown' },
            { type: 'geo-map', name: 'Regional Performance' }
        ],
        applicableAffiliates: [
            {
                id: 'AFF-EMEA',
                name: 'EMEA Marketing Partners',
                compatibility: 'Full Integration',
                dataSince: '2023-01-01'
            },
            {
                id: 'AFF-LATAM',
                name: 'Latam Digital Collective',
                compatibility: 'Partial Support',
                dataSince: '2024-01-01'
            }
        ],
        stats: {
            adoptionRate: '82%',
            dataQuality: 'A+',
            lastUpdated: '2024-03-20',
            certifiedBy: 'Marketing Analytics Team'
        },
        isWeeklyPick: true,
    },
    {
        id: 2,
        title: 'Marketing Layout Pack',
        type: 'layout',
        category: 'Marketing',
        subTitle: 'Descriptive name of the Layout',
        description: 'Professional marketing report layouts with responsive design.',
        pageCount: 15,
        kpisUsed: ['CTR', 'ROAS', 'CPC'],
        isPrivate: false,
        stats: { downloads: 1780, rating: 4.7, lastUpdated: '2024-02-28' },
        isCommunityPopular: true,
    },

    {
        id: 3,
        title: 'Marketing Layout Pack',
        type: 'layout',
        category: 'Marketing',
        subTitle: 'Descriptive name of the Layout',
        description: 'Professional marketing report layouts with responsive design.',
        pageCount: 15,
        kpisUsed: ['CTR', 'ROAS', 'CPC'],
        isPrivate: false,
        stats: { downloads: 1780, rating: 4.7, lastUpdated: '2024-02-28' },
        isCommunityPopular: true,
    }, {
        id: 3,
        title: 'Campaign Performance Storyboard',
        type: 'storyboard',
        category: 'Sales',
        subTitle: 'Multi-channel campaign analysis',
        description: 'Pre-built narrative flow for Q4 sales campaigns',
        pageCount: 8,
        coupledKpis: [
            {
                kpi: 'Conversion Rate',
                filters: ['Country', 'Device Type']
            },
            {
                kpi: 'ROAS',
                filters: ['Campaign', 'Audience Segment']
            }
        ],
        applicableAffiliates: [
            { id: 'aff-01', name: 'TechPartners EU' },
            { id: 'aff-02', name: 'MobileAdvantage' },
            { id: 'aff-03', name: 'GlobalMedia Group' }
        ],
        isPrivate: true,
        stats: {
            downloads: 420,
            rating: 4.5,
            lastUpdated: '2024-03-15'
        },
        previewConfig: {
            featuredFilters: ['Last 30 Days', 'EMEA Region'],
            defaultMetrics: ['CTR', 'CPA']
        }
    },
    {
        id: 5,
        type: 'dataViz',
        title: 'Marketing Campaign Trends',
        category: 'Marketing',
        dataSource: 'Meta Ads',
        description: 'Interactive visualization of campaign performance metrics',
        applicableKpis: [
            { id: 'kpi-1', name: 'CTR', value: '2.4%' },
            { id: 'kpi-2', name: 'ROAS', value: '4.8x' },
            { id: 'kpi-3', name: 'CPA', value: '$18.50' }
        ],
        chartData: [
            { name: 'Jan', value: 4000 },
            { name: 'Feb', value: 3200 },
            { name: 'Mar', value: 6000 }
        ],
        stats: {
            lastUpdated: '2025-04-28',
            dataQuality: 'A',
            refreshInterval: '15 mins'
        }
    }
];