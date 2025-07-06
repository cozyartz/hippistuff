import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search sacred wisdom...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (query.trim()) {
        onSearch(query);
      }
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 stroke-1" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setTimeout(() => setIsVisible(false), 200)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-700 bg-white/90 backdrop-blur-sm font-light"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400 stroke-1" />
          </button>
        )}
      </div>
      
      {/* Search suggestions - placeholder for future implementation */}
      {isVisible && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-green-100 backdrop-blur-sm z-50">
          <div className="p-4">
            <div className="text-sm text-gray-500 font-light">
              Searching for "{query}"...
            </div>
            <div className="mt-2 space-y-2">
              <div className="text-sm text-gray-600 hover:text-green-600 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-colors">
                🌿 Natural living tips
              </div>
              <div className="text-sm text-gray-600 hover:text-green-600 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-colors">
                🧘 Meditation guides
              </div>
              <div className="text-sm text-gray-600 hover:text-green-600 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-colors">
                🌱 Sustainable products
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};