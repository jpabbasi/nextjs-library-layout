'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '@/components/Searchbar.jsx';
import { Tabs } from '@/components/Tabs.jsx';
import FeaturedSections from '@/components/FeaturedSections.jsx';
import TemplateGrid from '@/components/TemplateGrid.jsx';
import { useTemplateFilter } from '@/hooks/useTemplateFilter.js';
import { TemplateModal } from '@/components/TemplateModal';

export default function TemplateLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('featured');
  const [selectedTemplate, setSelectedTemplate] = useState(null);


  const { filteredTemplates, featuredContent } = useTemplateFilter(searchTerm, activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb]">
      <Header />

      <main className="flex-grow max-w-5xl container mx-auto py-1">
        <div className="mb-7 mx-auto">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'featured' ? (
          <FeaturedSections
            weeklyPicks={featuredContent.weeklyPicks}
            communityPopular={featuredContent.communityPopular}
            onSelect={setSelectedTemplate}
          />
        ) : (
          <TemplateGrid
            templates={filteredTemplates}
            onSelect={setSelectedTemplate}
          />
        )}
      </main>

      {selectedTemplate && (

        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}

      <Footer />
    </div>
  );
}