'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FileText, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

const insights = [
  {
    badge: 'India Polls',
    badgeColor: 'bg-orange-500',
    title: 'Bihar 2025: How Caste Arithmetic Will Decide The Assembly Election',
    author: 'PollMaster Pro',
    verified: true,
    readTime: '8 min read',
    date: 'October 10, 2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_6.png',
  },
  {
    badge: 'US Polls',
    badgeColor: 'bg-blue-500',
    title: 'Predicting Ohio 2026: Why Suburban Voters Hold The Key',
    author: 'DataQueen Analytics',
    verified: true,
    readTime: '6 min read',
    date: 'October 10, 2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_6.png',
  },
  {
    badge: 'Analysis',
    badgeColor: 'bg-red-500',
    title: 'Poll Accuracy Index: Measuring Community vs Professional Forecasts',
    author: 'Platform Editorial',
    verified: false,
    readTime: '12 min read',
    date: 'October 9, 2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_6.png',
  },
];

const InsightsBlog = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.9;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <FileText className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl text-white">Deep Dives &amp; Insights</h2>
              <p className="text-xs text-slate-400">Expert analysis and forecasting guides</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="size-8 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-700/80 hover:text-white transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-8 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-700/80 hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="grid grid-flow-col auto-cols-[calc((100%-2rem)/1.1)] md:auto-cols-[calc((100%-2rem)/2.1)] lg:auto-cols-[calc((100%-2rem)/3.1)] gap-4 pb-1">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex h-[280px] flex-col overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm transition-colors duration-300 hover:border-red-500/50"
                  >
                  <div
                    className={`absolute right-4 top-4 z-10 rounded-md px-2.5 py-1 text-[10px] font-semibold text-white ${item.badgeColor}`}
                  >
                    {item.badge}
                  </div>
                  <div className="relative h-[140px] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <h3 className="text-base font-normal leading-tight text-white transition-colors group-hover:text-red-400">
                      {item.title}
                    </h3>
                    <div>
                      <div className="flex items-center gap-1 text-sm text-slate-300">
                        {item.author}
                        {item.verified && (
                          <BadgeCheck className="ml-1 h-4 w-4 text-blue-400" />
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <span>{item.readTime}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsBlog;