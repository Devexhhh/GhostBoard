import { useEffect, useState, useMemo } from "react";
import { getFeed, postConfession, vote } from "./api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ConfessionForm from "./components/ConfessionForm";
import ConfessionGrid from "./components/ConfessionGrid";
import ConfessionCard from "./components/ConfessionCard";

function App() {
  const [feed, setFeed] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  
  let ghostId = localStorage.getItem("ghostId");

  if (!ghostId) {
    ghostId = crypto.randomUUID();
    localStorage.setItem("ghostId", ghostId);
  }

  async function loadFeed() {
    const data = await getFeed();
    setFeed(data.data);
  }

  async function handleSubmit(title, body) {
    await postConfession({
      title,
      body,
      mood: "confused",
      ghostId
    });
    setCurrentPage(1); // Reset to first page so they see their new post
    loadFeed();
  }

  async function handleVote(id, value) {
    await vote(id, ghostId, value);
    loadFeed();
  }

  useEffect(() => {
    loadFeed();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(feed.length / itemsPerPage);
  
  const currentFeed = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return feed.slice(startIdx, startIdx + itemsPerPage);
  }, [feed, currentPage, itemsPerPage]);

  const goToNextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const goToPrevPage = () => setCurrentPage(p => Math.max(p - 1, 1));

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden border-box selection:bg-accent-cyan selection:text-black">
      
      {/* Global Animated Cyber Grid Background With Lightning */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,43,226,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-60 flex justify-center perspective-[1000px]">
          <div className="absolute w-[300%] h-[150%] top-[-20%] cyber-grid animate-cyber-grid" style={{ transformOrigin: 'top center' }}>
              <div className="lightning-line"></div>
              <div className="lightning-line"></div>
              <div className="lightning-line"></div>
          </div>
        </div>
        
        {/* Dark gradient fade-out at the very bottom to blend out the grid cleanly */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#030305] to-transparent"></div>
      </div>

      <Header />
      
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center">
        <Hero />
        
        <div className="w-full flex flex-col gap-16 mt-8">
          <section className="w-full">
            <ConfessionForm onSubmit={handleSubmit} />
          </section>
          
          <section className="flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h2 className="text-3xl font-bold m-0 text-white font-display">Recent Signals</h2>
              <div className="font-display text-accent-pink bg-accent-pink/10 py-1.5 px-4 rounded-full text-sm border border-accent-pink/30">
                Live Data Feed
              </div>
            </div>
            
            <ConfessionGrid>
              {currentFeed.map(c => (
                <ConfessionCard
                  key={c._id}
                  confession={c}
                  onVote={handleVote}
                />
              ))}
            </ConfessionGrid>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                <button 
                  onClick={goToPrevPage} 
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-display uppercase tracking-wider text-sm transition-all hover:bg-white/10 hover:border-accent-cyan disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10"
                >
                  Previous
                </button>
                <div className="text-text-secondary font-display text-sm tracking-widest">
                  <span className="text-accent-cyan font-bold">{currentPage}</span> / {totalPages}
                </div>
                <button 
                  onClick={goToNextPage} 
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-display uppercase tracking-wider text-sm transition-all hover:bg-white/10 hover:border-accent-pink disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10"
                >
                  Next
                </button>
              </div>
            )}
            
          </section>
        </div>
      </main>

      {/* Cyber Footer */}
      <footer className="w-full mt-12 py-8 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-purple/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative">
          <p className="text-text-secondary font-display text-sm md:text-base tracking-widest uppercase text-center m-0">
            Forged in the void by <br className="md:hidden" />
            <span className="font-bold text-lg md:text-xl text-gradient ml-2">DEVEX</span>
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-accent-cyan/50"></div>
            <span className="text-xs text-text-secondary/50 tracking-[0.2em]">NO LOGS • NO TRACE</span>
            <div className="h-[1px] w-12 bg-accent-pink/50"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
