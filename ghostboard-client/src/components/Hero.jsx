export default function Hero() {
  return (
    <section className="text-center my-16 md:my-24 relative w-full flex flex-col items-center">
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white text-balance drop-shadow-2xl">
          Whisper into the <br/>
          <span className="text-gradient bg-clip-text text-transparent bg-[length:300%_300%] animate-rgb-bg-rotation">Void</span>
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary max-w-6xl mx-auto leading-relaxed text-balance">
          An anonymous, decentralized-styled bulletin board for your deepest secrets.
          Powered by aesthetics and encrypted souls.
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-hero-glow -z-10 pointer-events-none rounded-full blur-3xl"></div>
    </section>
  );
}
