import Section from './Section';

const TemplateGrid = ({ templates, onSelect }) => {
    return (
        <Section
            templates={templates}
            onSelect={onSelect}
        />
    );
};

export default TemplateGrid;