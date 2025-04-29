import Image from 'next/image';
import { CiImageOff } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import DataVizModal from './DataVizModal';
const { default: KPIModal } = require("./KPIModal");
const { default: LayoutModal } = require("./LayoutModal");
const { default: StoryboardModal } = require("./StoryboardModal");

export const TemplateModal = ({ template, onClose }) => {
    const renderModalContent = () => {
        switch (template.type) {
            case 'kpi':
                return <KPIModal template={template} />;
            case 'layout':
                return <LayoutModal template={template} />;
            case 'storyboard':
                return <StoryboardModal template={template} />;
            case 'dataViz':
                return <DataVizModal template={template} />
            default:
                return (
                    <div className="p-8 text-red-500">
                        Asset not found: {template.type}
                    </div>
                );
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-6
                max-h-[90vh] overflow-y-auto">

                <div className="sticky top-0 right-0 flex justify-end mb-4 z-20">
                    <button
                        onClick={console.log('copied!')}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <FaLink />
                    </button>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                        title="Close"
                    >
                        <IoMdClose />
                    </button>
                </div>

                <div className="space-y-6">
                    <header className="space-y-2">
                        <h1 className="text-2xl font-bold">{template?.title}</h1>
                        <p className="text-gray-600">{template?.subTitle}</p>
                    </header>

                    <p className="text-gray-600 text-sm">
                        {template.description}
                    </p>

                    {renderModalContent()}

                    <figure className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden">
                        {template?.cover ? (
                            <Image
                                src={template?.cover}
                                alt={template?.title || 'Preview'}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-500">
                                <CiImageOff className="text-4xl" />
                                <span className="text-sm font-medium">No preview available</span>
                            </div>
                        )}
                    </figure>


                    <footer className="text-center pt-4">
                        <button className="py-2 bg-black cursor-pointer flex items-center justify-center gap-2 text-white w-full rounded hover:bg-gray-800 transition-colors">
                            <MdBookmarkBorder className="text-lg" />
                            <span>Favorite item</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
};