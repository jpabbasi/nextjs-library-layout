import { FiSearch } from "react-icons/fi";

const SearchBar = ({
    placeholder = "Type to search...",
    value,
    onChange,
}) => {
    return (
        <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-12 p-3 rounded-xl bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 border border-gray-200"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;