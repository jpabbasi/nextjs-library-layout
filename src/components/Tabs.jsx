const tabConfig = {
    featured: { label: 'Featured' },
    kpi: { label: 'KPI' },
    layout: { label: 'Layouts' },
    storyboard: { label: 'Storyboards' },
    dataViz: { label: 'Data Viz' }
};

export const Tabs = ({ activeTab, onTabChange }) => (
    <nav className="mb-8" role="tablist">
        <div className="flex justify-center">
            <div className="inline-flex bg-[#f1f5f8] p-1 rounded-md w-full overflow-x-auto scrollbar-hide md:overflow-visible md:max-w-5xl">
                {Object.entries(tabConfig).map(([key, { label }]) => {
                    const isActive = activeTab === key;
                    return (
                        <button
                            key={key}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${key}`}
                            onClick={() => onTabChange(key)}
                            className={`
                                px-4 md:px-10 py-2 rounded-md font-medium flex gap-2 
                                transition w-100 justify-center cursor-pointer text-sm
                                md:text-base whitespace-nowrap
                                ${isActive
                                    ? 'bg-white'
                                    : 'bg-transparent text-gray-400'}
                            `}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    </nav>
);
