import Section from "./Section";

const FeaturedSections = ({ weeklyPicks, communityPopular, onSelect }) => {
    return (
        <div className="space-y-12">
            <Section
                title="Featured"
                subTitle="Curated top picks from this week"
                templates={weeklyPicks}
                onSelect={onSelect}
            />
            <Section
                title="Trending"
                subTitle="Most popular by community"
                templates={communityPopular}
                onSelect={onSelect}
            />
        </div>
    );
};

export default FeaturedSections;