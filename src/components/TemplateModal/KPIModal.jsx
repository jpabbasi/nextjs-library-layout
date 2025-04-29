import { TbChartArcs, TbChartLine, TbMapPin } from "react-icons/tb";
import { FiDivideCircle } from "react-icons/fi";

export default function KPIModal({ template }) {
    const VisualIcon = ({ type }) => {
        const icons = {
            'time-series': <TbChartLine className="w-5 h-5 text-blue-600" />,
            'comparison': <FiDivideCircle className="w-5 h-5 text-green-600" />,
            'geo-map': <TbMapPin className="w-5 h-5 text-red-600" />,
            'default': <TbChartArcs className="w-5 h-5 text-gray-600" />
        };
        return icons[type] || icons.default;
    };

    return (
        <article className="space-y-8 w-full">

            <div className="space-y-4">
                <h3 className="text-sm font-semibold">Supported Visualizations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {template.visualsAvailable?.map((visual, index) => (
                        <div key={index} className="border border-gray-200 p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <VisualIcon type={visual.type} />
                                <span className="text-sm font-medium">{visual.name}</span>
                            </div>
                            <p className="text-xs text-gray-600">{
                                visual.type === 'time-series' ? 'Historical performance trends' :
                                    visual.type === 'comparison' ? 'Cross-channel benchmarks' :
                                        'Geographical performance mapping'
                            }</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-semibold">Compatible Affiliates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {template.applicableAffiliates?.map(affiliate => (
                        <div key={affiliate.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div>
                                <p className="text-sm font-medium">{affiliate.name}</p>
                                <p className="text-xs text-gray-600 mt-1">
                                    Active since {new Date(affiliate.dataSince).toLocaleDateString('en-US', { year: 'numeric' })}
                                </p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${affiliate.compatibility === 'Full Integration'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {affiliate.compatibility}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-start font-semibold text-gray-800">Business Questions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {template.businessQuestions?.map((question, index) => (
                        <div
                            key={index}
                            className={'rounded-lg p-4 border border-transparent hover:bg-gray-50'}
                        >
                            <p className="text-sm font-semibold text-gray-900">Question {index + 1}</p>
                            <p className="text-sm text-gray-600 mt-1">
                                {question}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="font-medium text-gray-500">Metric ID</label>
                    <p className="font-mono text-sm">{template.metricId}</p>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Calculation Formula</label>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{template.calculation}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}