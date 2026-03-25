import { useState } from 'react';

export default function ConfessionForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    onSubmit(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <div className="w-full">
      <form className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative z-10 w-full" onSubmit={handleSubmit}>
        <h3 className="text-2xl m-0 uppercase tracking-widest text-accent-cyan font-display">Initiate Protocol</h3>
        <div className="flex flex-col">
          <input 
            type="text" 
            placeholder="Subject Matter" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-black/30 border border-white/10 rounded-xl p-4 text-text-primary text-base transition-all focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] focus:bg-black/50"
          />
        </div>
        <div className="flex flex-col">
          <textarea 
            placeholder="Transmit your message to the network..." 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="bg-black/30 border border-white/10 rounded-xl p-4 text-text-primary text-base transition-all focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] focus:bg-black/50 min-h-[120px] resize-y"
            rows={4}
          />
        </div>
        <button type="submit" className="group bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-[length:300%_300%] animate-rgb-bg-rotation border-none rounded-xl p-[2px] text-white font-display text-lg font-bold uppercase tracking-wider cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.4)] relative">
          <span className="block bg-[#111] py-3 px-6 rounded-[10px] transition-colors group-hover:bg-[#111]/80">Broadcast</span>
        </button>
      </form>
    </div>
  );
}
