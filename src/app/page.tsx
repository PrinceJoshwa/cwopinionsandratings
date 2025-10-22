import React from 'react';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import FeaturedPoll from '@/components/sections/featured-poll';
import LatestPolls from '@/components/sections/latest-polls';
import TrendingPredictions from '@/components/sections/trending-predictions';
import TopPredictors from '@/components/sections/top-predictors';
import InsightsBlog from '@/components/sections/insights-blog';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main>
        <HeroSection />
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <FeaturedPoll />
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <LatestPolls />
              </div>
              <div>
                <TrendingPredictions />
              </div>
            </div>
          </div>
        </section>

        <TopPredictors />
        
        <InsightsBlog />
      </main>
    </div>
  );
}