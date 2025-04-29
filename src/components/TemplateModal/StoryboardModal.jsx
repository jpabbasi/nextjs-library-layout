import Image from 'next/image';
import { CiImageOff } from "react-icons/ci";

export default function StoryboardModal({ template }) {
    const stats = [
        { value: template.stats.downloads || 0, label: 'Used' },
        { value: template.category, label: 'Type' },
        { value: template.coupledKpis?.length || 0, label: 'Coupled KPIs' },
        { value: template.applicableAffiliates?.length || 0, label: 'Affiliates' }
    ];

    return (
        <article className="space-y-6 w-full">

            <div className="flex justify-center flex-wrap gap-2">
                {template.coupledKpis?.map((kpiGroup, index) => (
                    <span
                        key={index}
                        className="bg-blue-50 text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
                    >
                        {kpiGroup.kpi}: {kpiGroup.filters.join(', ')}
                    </span>
                ))}
            </div>

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

            {template.applicableAffiliates?.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Applicable Affiliates</h3>
                    <div className="flex flex-wrap gap-2 flex justify-center">
                        {template.applicableAffiliates.map(affiliate => (
                            <span
                                key={affiliate.id}
                                className="bg-gray-50 outline-1 outline-gray-300 text-gray-400 px-3 py-1 rounded-md text-sm"
                            >
                                {affiliate.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}


        </article>
    );
}