import Image from 'next/image';
import { TfiPieChart } from "react-icons/tfi";

export default function TemplateCard({ template, onClick }) {
    const hasImage = Boolean(template.cover);

    return (
        <div
            className="flex items-center bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition cursor-pointer space-x-4"
            onClick={onClick}
        >
            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                {hasImage ? (
                    <Image
                        src={template.cover}
                        alt={template.title}
                        className="object-cover"
                        sizes="64px"
                    />
                ) : (
                    <TfiPieChart
                        color='gray'
                        fontSize={30}
                    />
                )}
            </div>

            <div className="flex flex-col justify-center">
                <h3 className="font-semibold leading-tight">{template?.title}</h3>
                <p className="text-gray-500">{template?.description}</p>
            </div>
        </div>
    );
}
