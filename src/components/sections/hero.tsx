import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight">
            See What Everyone Thinks Will Happen Next.
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-4">
            Join thousands of citizens predicting elections worldwide. Build your credibility.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs text-blue-400">Featured: Bihar 2025 Assembly Election</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;