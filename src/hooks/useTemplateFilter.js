import { useMemo } from 'react';
import { templates } from '../../data.js';

export const useTemplateFilter = (searchTerm, activeTab) => {
    const filteredTemplates = useMemo(() => {
        return templates.filter(template => {
            const searchMatch = template.title.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = activeTab === 'featured' || template.type === activeTab;
            return searchMatch && typeMatch;
        });
    }, [searchTerm, activeTab]);

    const featuredContent = useMemo(() => ({
        weeklyPicks: filteredTemplates.filter(t => t.isWeeklyPick),
        communityPopular: filteredTemplates.filter(t => t.isCommunityPopular)
    }), [filteredTemplates]);

    return { filteredTemplates, featuredContent };
};