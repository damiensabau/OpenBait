'use client';

import { useState } from 'react';
import { Eye, Edit3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export default function MarkdownEditor({ 
  value, 
  onChange, 
  placeholder = 'Écrivez votre message en Markdown...',
  minHeight = '200px' 
}: MarkdownEditorProps) {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => setMode('edit')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'edit'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          Éditer
        </button>
        <button
          type="button"
          onClick={() => setMode('preview')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'preview'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <Eye className="w-4 h-4" />
          Aperçu
        </button>
      </div>

      {/* Content */}
      <div className="p-4" style={{ minHeight }}>
        {mode === 'edit' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full min-h-[150px] outline-none resize-none font-mono text-sm"
            style={{ minHeight: `calc(${minHeight} - 2rem)` }}
          />
        ) : (
          <div className="prose prose-sm max-w-none">
            {value ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {value}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-400 italic">Rien à prévisualiser</p>
            )}
          </div>
        )}
      </div>

      {/* Markdown help */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
        <details className="text-xs text-gray-600">
          <summary className="cursor-pointer hover:text-gray-900">
            Aide Markdown
          </summary>
          <div className="mt-2 space-y-1">
            <div><code className="bg-gray-200 px-1 rounded">**gras**</code> → <strong>gras</strong></div>
            <div><code className="bg-gray-200 px-1 rounded">*italique*</code> → <em>italique</em></div>
            <div><code className="bg-gray-200 px-1 rounded">[lien](url)</code> → lien hypertexte</div>
            <div><code className="bg-gray-200 px-1 rounded">`code`</code> → <code>code</code></div>
            <div><code className="bg-gray-200 px-1 rounded">```code block```</code> → bloc de code</div>
            <div><code className="bg-gray-200 px-1 rounded"># Titre</code> → titre</div>
            <div><code className="bg-gray-200 px-1 rounded">- liste</code> → liste à puces</div>
          </div>
        </details>
      </div>
    </div>
  );
}

// Simple Markdown renderer component for displaying content
export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
