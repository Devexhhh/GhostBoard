export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 md:px-12 bg-bg-dark/70 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="url(#neon-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
        >
          <defs>
            <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#8a2be2" />
              <stop offset="100%" stopColor="#ff003c" />
            </linearGradient>
          </defs>
          <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
          <circle cx="9" cy="10" r="1" fill="#fff" stroke="none"/>
          <circle cx="15" cy="10" r="1" fill="#fff" stroke="none"/>
        </svg>
        <h1 className="text-2xl font-bold m-0 text-white font-display">
          <span className="text-gradient">Phantom</span>Dex
        </h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/30 py-1.5 px-4 rounded-full font-display text-sm text-accent-cyan">
          <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse-glow"></span>
          Live Network
        </div>
      </div>
    </header>
  );
}
