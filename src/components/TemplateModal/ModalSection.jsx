'use client'

export const ModalSection = ({ title, children }) => (
    <div className="space-y-4 border-b border-gray-100 pb-4 last:border-0">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <div className="space-y-2">
            {children}
        </div>
    </div>
);