import Image from 'next/image';
import { CiImageOff } from "react-icons/ci";

export default function LayoutModal({ template }) {
    const stats = [
        { value: template.stats.downloads || 0, label: 'Used' },
        { value: template.category, label: 'Type' },
        { value: template.pageCount || 0, label: 'Pages No.' },
        {
            value: new Date(template.stats.lastUpdated || Date.now()).toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            }),
            label: 'Last Updated'
        }
    ];

    const tags = template.kpisUsed?.length > 0 ? template.kpisUsed : ['#comms', '#coverage', '#stakeholders'];

    return (
        <article className="space-y-6 w-full">

            <div className="flex flex-wrap justify-center items-center gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="bg-gray-50 outline-1 outline-gray-300 text-gray-400 px-3 py-1 rounded-md text-sm">
                        #{tag}
                    </span>
                ))}
            </div>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
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
        </article>
    );
}