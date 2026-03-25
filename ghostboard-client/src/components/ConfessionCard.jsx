import { useState } from 'react';

export default function ConfessionCard({ confession, onVote }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
          className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-[length:300%_300%] animate-rgb-bg-rotation rounded-[20px] p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,240,255,0.2)] h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-[#030305]/95 backdrop-blur-2xl rounded-[19px] p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-display text-xs text-text-secondary bg-white/5 py-1 px-3 rounded-lg">ID: {confession._id.slice(-6)}</div>
                  <div className="w-1.5 h-1.5 bg-accent-pink rounded-full shadow-[0_0_8px_var(--accent-pink)] animate-blink"></div>
                </div>
                
                <h3 className="text-xl m-0 mb-3 text-white font-display">{confession.title}</h3>
                <p className="text-text-secondary text-base leading-relaxed m-0 mb-6 flex-grow">{confession.body}</p>
                
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                        <span className="text-[0.7rem] uppercase tracking-widest text-text-secondary">SIGNAL</span>
                        <span className="font-display text-xl font-bold text-accent-cyan">{confession.score}</span>
                    </div>

                    <div className={`flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`}>
                        <button className="bg-white/5 border border-white/10 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-text-secondary transition-all hover:text-[#00ff88] hover:border-[#00ff88] hover:bg-[#00ff88]/10 p-0" onClick={() => onVote(confession._id, 1)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                        </button>
                        <button className="bg-white/5 border border-white/10 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-text-secondary transition-all hover:text-accent-pink hover:border-accent-pink hover:bg-accent-pink/10 p-0" onClick={() => onVote(confession._id, -1)}>
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <button className="bg-white/5 border border-white/10 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-text-secondary transition-all hover:text-text-primary hover:border-white/30 p-0" onClick={() => onVote(confession._id, 0)}>
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}