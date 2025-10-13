'use client';

import { useState, KeyboardEvent } from 'react';
import { X, Tag } from 'lucide-react';

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
  placeholder?: string;
  suggestions?: string[];
}

const DEFAULT_SUGGESTIONS = [
  'license-change',
  'open-source',
  'proprietary',
  'bait-switch',
  'terraform',
  'hashicorp',
  'docker',
  'elasticsearch',
  'redis',
  'mongodb',
  'database',
  'infrastructure',
  'cloud',
  'saas',
  'enterprise',
];

export default function TagInput({ 
  tags, 
  onChange, 
  maxTags = 5,
  placeholder = 'Ajouter des tags...',
  suggestions = DEFAULT_SUGGESTIONS 
}: TagInputProps) {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      !tags.includes(suggestion) &&
      suggestion.toLowerCase().includes(input.toLowerCase())
  );

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim().toLowerCase();
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < maxTags) {
      onChange([...tags, trimmedTag]);
      setInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input) {
      e.preventDefault();
      addTag(input);
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 flex-wrap border border-gray-300 rounded-lg p-2 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
        <Tag className="w-4 h-4 text-gray-400" />
        
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
              type="button"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}

        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder={tags.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] outline-none text-sm"
          disabled={tags.length >= maxTags}
        />
      </div>

      {tags.length >= maxTags && (
        <div className="text-xs text-amber-600 mt-1">
          Maximum {maxTags} tags atteints
        </div>
      )}

      {/* Suggestions dropdown */}
      {showSuggestions && input && filteredSuggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredSuggestions.slice(0, 10).map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => addTag(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm transition-colors"
            >
              <Tag className="w-3 h-3 inline mr-2 text-gray-400" />
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
