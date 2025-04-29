import Section from './Section';

const TemplateGrid = ({ title, subTitle, templates, onSelect }) => {
    return (
        <Section
            templates={templates}
            onSelect={onSelect}
        />
    );
};

export default TemplateGrid;