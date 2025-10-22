"use client";

import { TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const BjpIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-orange-500 fill-current">
     <path d="M22 13.02V12h-2v1.02c0 .54-.22 1.04-.59 1.41l-1.41 1.41-1.41-1.41c-.37-.37-.59-.87-.59-1.41V12h-2v1.02c0 .54-.22 1.04-.59 1.41l-1.41 1.41L12 15.84l-1.41-1.41c-.37-.37-.59-.87-.59-1.41V12H8v1.02c0 .54-.22 1.04-.59 1.41l-1.41 1.41-1.41-1.41c-.37-.37-.59-.87-.59-1.41V12H2v1.02c0 1.08.43 2.08 1.19 2.81l3.59 3.59c.78.78 2.05.78 2.83 0L12 18.23l2.39 2.19c.78.78 2.05.78 2.83 0l3.59-3.59A3.926 3.926 0 0 0 22 13.02zM12 2L9.5 4.5 12 7l2.5-2.5L12 2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const RjdIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-green-500 fill-current">
    <path d="M12 3c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2zm6 3H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h1v2h2v-2h6v2h2v-2h1c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-2 11h-8v-7h8v7z"/>
    <rect x="10" y="11" width="4" height="4" fill="white" opacity="0.5"/>
  </svg>
);

const TrendChart = () => (
    <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
        <defs>
            <linearGradient id="featuredPollOrangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <linearGradient id="featuredPollGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
        </defs>
        <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="0.5" />
        <line x1="0" y1="40" x2="300" y2="40" stroke="#334155" strokeWidth="0.5" />
        <line x1="0" y1="60" x2="300" y2="60" stroke="#334155" strokeWidth="0.5" />
        <path d="M 0 50 C 50 40, 100 60, 150 55 S 250 40, 300 45" stroke="#fb923c" fill="none" strokeWidth="1.5" strokeDasharray="4 2" strokeOpacity="0.8" />
        <path d="M 0 35 C 50 45, 100 25, 150 30 S 250 45, 300 40" stroke="#4ade80" fill="none" strokeWidth="1.5" strokeDasharray="4 2" strokeOpacity="0.8" />
        <path d="M 0 45 C 50 35, 100 55, 150 50 S 250 35, 300 40" stroke="url(#featuredPollOrangeGradient)" fill="none" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 40 C 50 50, 100 30, 150 35 S 250 50, 300 45" stroke="url(#featuredPollGreenGradient)" fill="none" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const FeaturedPoll = () => {
    const [ndaWidth, setNdaWidth] = useState(0);
    const [mgbWidth, setMgbWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNdaWidth(40);
            setMgbWidth(48);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl p-3 md:p-4">
                <div className="text-center mb-3 md:mb-4">
                    <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-2">
                        <span className="text-[9px] md:text-[10px] text-blue-400">Featured Poll</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-lg md:text-xl">🇮🇳</span>
                        <h2 className="text-base md:text-lg text-white">Bihar, India</h2>
                    </div>
                    <h3 className="text-sm md:text-base text-slate-300 mb-1">Assembly Election 2025</h3>
                    <p className="text-[10px] md:text-xs text-slate-400">Closing: Oct 20, 2025</p>
                </div>
                <div className="flex justify-center items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <div className="text-center">
                        <div className="relative mb-1.5">
                            <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-lg"></div>
                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-500/50 shadow-lg shadow-orange-500/50 flex items-center justify-center">
                                <BjpIcon />
                            </div>
                        </div>
                        <h3 className="text-white mb-0.5 text-[10px] md:text-[11px]">NDA Alliance</h3>
                        <p className="text-[8px] md:text-[9px] text-slate-500 mb-0.5">BJP + Allies</p>
                        <div className="text-base md:text-lg text-orange-400">40%</div>
                    </div>
                    <div className="text-slate-500 text-sm md:text-base">VS</div>
                    <div className="text-center">
                        <div className="relative mb-1.5">
                            <div className="absolute inset-0 bg-green-500/30 rounded-full blur-lg"></div>
                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-500/50 shadow-lg shadow-green-500/50 flex items-center justify-center">
                                <RjdIcon />
                            </div>
                        </div>
                        <h3 className="text-white mb-0.5 text-[10px] md:text-[11px]">Mahagathbandhan</h3>
                        <p className="text-[8px] md:text-[9px] text-slate-500 mb-0.5">RJD + Congress</p>
                        <div className="text-base md:text-lg text-green-400">48%</div>
                    </div>
                </div>
                <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2 md:mb-3">
                    <div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/50 transition-all duration-1000 ease-out" 
                        style={{ width: `${ndaWidth}%` }}
                    ></div>
                    <div 
                        className="absolute right-0 top-0 h-full bg-gradient-to-l from-green-500 to-green-400 shadow-lg shadow-green-500/50 transition-all duration-1000 ease-out" 
                        style={{ width: `${mgbWidth}%` }}
                    ></div>
                </div>
                <div className="relative mb-3 md:mb-4">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-2 md:mb-3 text-[9px] md:text-[10px]">
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                            <span className="text-orange-400">NDA (Poll Avg)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                            <span className="text-green-400">MGB (Poll Avg)</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-2 md:mb-3 text-[9px] md:text-[10px]">
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-0.5 border border-orange-400 border-dashed rounded-full"></div>
                            <span className="text-orange-400 opacity-80">NDA (Community)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-0.5 border border-green-400 border-dashed rounded-full"></div>
                            <span className="text-green-400 opacity-80">MGB (Community)</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="inline-flex items-center gap-1.5 rounded-full border text-blue-400 border-blue-500/30 bg-blue-500/10 text-[10px] px-2 py-0.5">
                            <span className="whitespace-nowrap">Community Avg: <span className="font-medium">81%</span></span>
                        </div>
                        <span className="text-[9px] text-slate-500">•</span>
                        <div className="inline-flex items-center gap-1.5 rounded-full border text-blue-400 border-blue-500/30 bg-blue-500/10 text-[10px] px-2 py-0.5">
                            <span className="whitespace-nowrap">C-Voter: <span className="font-medium">87%</span></span>
                        </div>
                    </div>
                    <div className="h-16 md:h-20">
                        <TrendChart />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 text-sm">
                        <TrendingUp className="mr-2 h-4 w-4" />Submit Your Prediction
                    </button>
                    <button className="text-xs md:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                        View Poll Details →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPoll;