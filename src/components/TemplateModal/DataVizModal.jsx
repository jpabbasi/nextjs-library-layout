"use client"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function DataVizModal({ template }) {
    const stats = [
        {
            value: template.category,
            label: 'Category'
        },
        {
            value: template.dataSource,
            label: 'Data Source'
        },
        {
            value: new Date(template.stats.lastUpdated).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            }),
            label: 'Last Updated'
        },
        {
            value: template.stats.dataQuality,
            label: 'Data Quality'
        }
    ];

    return (
        <article className="space-y-6 w-full">
            <section className="grid grid-cols-4 gap-4 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`space-y-1 ${index !== stats.length - 1 ? 'border-r border-gray-200' : ''}`}
                    >
                        <p className="text-lg font-bold">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </section>

            <div className="flex flex-wrap gap-2">
                {template.applicableKpis.map(kpi => (
                    <div
                        key={kpi.id}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
                    >
                        {kpi.name}: <span className="font-bold">{kpi.value}</span>
                    </div>
                ))}
            </div>

            <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={template.chartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="value"
                            label={({ name }) => name}
                        >
                            {template.chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => [`${value}`, 'Visits']}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
}