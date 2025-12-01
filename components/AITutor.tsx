import React, { useState } from 'react';
import { getMathHelp } from '../services/geminiService';
import { Send, Loader2 } from 'lucide-react';

interface AITutorProps {
  question: string;
  context: string;
}

export const AITutor: React.FC<AITutorProps> = ({ question, context }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleAsk = async (customPrompt?: string) => {
    setLoading(true);
    const query = customPrompt || inputValue || question;
    const helpText = await getMathHelp(query, context);
    setResponse(helpText);
    setLoading(false);
    setInputValue('');
  };

  return (
    <div className="w-full">
        {/* Inline Response Area for Side Panel */}
        {response && (
            <div className="mb-4 animate-fade-in-up">
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-xs text-white">AI</div>
                    <div className="bg-slate-800 border border-purple-500/30 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm shadow-sm leading-relaxed">
                        {response}
                    </div>
                </div>
                <button 
                    onClick={() => setResponse(null)}
                    className="text-xs text-slate-500 hover:text-white mt-2 ml-12 underline"
                >
                    ถามใหม่
                </button>
            </div>
        )}

        {/* Input Area */}
        <div className="relative">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="พิมพ์คำถามที่สงสัย..."
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
                onClick={() => handleAsk()}
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
        </div>
        
        {/* Quick Prompts */}
        {!response && !loading && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
                <button onClick={() => handleAsk("ขอคำใบ้หน่อย")} className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs text-slate-300 transition-colors">
                    💡 ขอคำใบ้
                </button>
                <button onClick={() => handleAsk("สูตรคืออะไร")} className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs text-slate-300 transition-colors">
                    📝 สูตรคืออะไร
                </button>
                <button onClick={() => handleAsk("อธิบายวิธีการทำ")} className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs text-slate-300 transition-colors">
                    🤔 อธิบายวิธีทำ
                </button>
            </div>
        )}
    </div>
  );
};
