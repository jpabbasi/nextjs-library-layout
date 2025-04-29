import TemplateCard from "./TemplateModal/TemplateCard";

const Section = ({ title, subTitle = '', templates, onSelect }) => {
    return (
        <section>
            <h3 className="text-4xl font-medium mb-2 text-gray-800">{title}</h3>
            <h4 className="mb-12 text-gray-500">{subTitle}</h4>
            <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6`}>
                {templates.map((template) => (
                    <TemplateCard
                        key={template.id}
                        template={template}
                        onClick={() => onSelect(template)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section;