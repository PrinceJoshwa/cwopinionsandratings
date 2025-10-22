"use client";

import { ArrowRight, Globe, Target, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Types
type Party = {
  name: string;
  percentage: number;
  colorGradient: string;
};

type ChartGradient = {
  id: string;
  from: string;
  to: string;
};

type ChartLine = {
  data: string;
  color: string;
};

type ChartData = {
  partiesData: ChartLine[];
  gradients: ChartGradient[];
};

type Poll = {
  location: {
    emoji: string;
    name: string;
  };
  tags: {
    category: 'India Polls' | 'US Polls';
    accuracy: number;
  };
  title: string;
  pollster: string;
  date: string;
  sampleSize: string;
  parties: Party[];
  chartData: ChartData;
};

// Data
const pollsData: Poll[] = [
  {
    location: { emoji: '🇮🇳', name: 'Bihar, India' },
    tags: { category: 'India Polls', accuracy: 87 },
    title: 'Bihar 2025 Assembly',
    pollster: 'C-Voter',
    date: 'Oct 10, 2025',
    sampleSize: 'n=12,450',
    parties: [
      { name: 'NDA Alliance', percentage: 42, colorGradient: 'from-orange-500 to-orange-400' },
      { name: 'Mahagathbandhan', percentage: 38, colorGradient: 'from-green-500 to-green-400' },
    ],
    chartData: {
      partiesData: [
        { data: "M0 28 L40 25 L80 26 L120 22 L160 24 L200 20 L240 18 L280 15 L320 18 L360 16 L400 12", color: 'url(#poll1-grad1)' },
        { data: "M0 50 L40 52 L80 48 L120 51 L160 47 L200 45 L240 48 L280 44 L320 46 L360 42 L400 44", color: 'url(#poll1-grad2)' },
      ],
      gradients: [
        { id: 'poll1-grad1', from: '#f97316', to: '#fb923c' },
        { id: 'poll1-grad2', from: '#22c55e', to: '#4ade80' },
      ]
    }
  },
  {
    location: { emoji: '🇺🇸', name: 'Ohio, USA' },
    tags: { category: 'US Polls', accuracy: 91 },
    title: 'Ohio 2026 Governor',
    pollster: 'Emerson College',
    date: 'Oct 9, 2025',
    sampleSize: 'n=1,200',
    parties: [
      { name: 'Republican', percentage: 51, colorGradient: 'from-red-500 to-red-400' },
      { name: 'Democrat', percentage: 44, colorGradient: 'from-blue-500 to-blue-400' },
    ],
    chartData: {
      partiesData: [
        { data: "M0 25 L40 22 L80 20 L120 18 L160 15 L200 12 L240 10 L280 11 L320 9 L360 8 L400 5", color: 'url(#poll2-grad1)' },
        { data: "M0 55 L40 52 L80 50 L120 48 L160 49 L200 45 L240 46 L280 48 L320 45 L360 44 L400 42", color: 'url(#poll2-grad2)' },
      ],
      gradients: [
        { id: 'poll2-grad1', from: '#ef4444', to: '#f87171' },
        { id: 'poll2-grad2', from: '#3b82f6', to: '#60a5fa' },
      ]
    }
  },
  {
    location: { emoji: '🇮🇳', name: 'Puducherry, India' },
    tags: { category: 'India Polls', accuracy: 84 },
    title: 'Puducherry 2026 Assembly',
    pollster: 'IANS-CVoter',
    date: 'Oct 8, 2025',
    sampleSize: 'n=3,800',
    parties: [
      { name: 'AINRC Alliance', percentage: 39, colorGradient: 'from-purple-500 to-purple-400' },
      { name: 'INC Alliance', percentage: 35, colorGradient: 'from-blue-500 to-blue-400' },
    ],
    chartData: {
      partiesData: [
        { data: "M0 35 L40 33 L80 30 L120 32 L160 28 L200 26 L240 29 L280 25 L320 22 L360 24 L400 20", color: 'url(#poll3-grad1)' },
        { data: "M0 50 L40 51 L80 48 L120 49 L160 46 L200 47 L240 45 L280 42 L320 44 L360 43 L400 45", color: 'url(#poll3-grad2)' },
      ],
      gradients: [
        { id: 'poll3-grad1', from: '#a855f7', to: '#c084fc' },
        { id: 'poll3-grad2', from: '#3b82f6', to: '#60a5fa' },
      ]
    }
  },
];

const MiniChart = ({ chartData }: { chartData: ChartData }) => (
    <div className="h-16 relative">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 64">
        <defs>
          {chartData.gradients.map(grad => (
            <linearGradient id={grad.id} key={grad.id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={grad.from} />
              <stop offset="100%" stopColor={grad.to} />
            </linearGradient>
          ))}
        </defs>
        {chartData.partiesData.map((line, index) => (
          <path
            key={index}
            d={line.data}
            stroke={line.color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 text-xs text-slate-500">Last 11 polls</div>
    </div>
);

const PollCard = ({ poll }: { poll: Poll }) => {
  const accuracyColor = poll.tags.accuracy >= 90 ? 'green' : 'blue';
  const [animatedWidths, setAnimatedWidths] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidths(poll.parties.map(p => p.percentage));
    }, 100);
    return () => clearTimeout(timer);
  }, [poll.parties]);

  return (
    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{poll.location.emoji}</span>
            <span className="text-blue-400">{poll.location.name}</span>
          </div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs text-slate-500 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">{poll.tags.category}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">Professional Poll</span>
            <div className={`inline-flex items-center gap-1.5 rounded-full border text-[10px] px-2 py-0.5
              ${accuracyColor === 'green' ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-blue-400 border-blue-500/30 bg-blue-500/10'}
            `}>
              <Target className="h-3 w-3" />
              <span className="whitespace-nowrap">Past Accuracy: <span className="font-medium">{poll.tags.accuracy}%</span></span>
            </div>
          </div>
          <h3 className="text-white group-hover:text-blue-400 transition-colors mb-1">{poll.title}</h3>
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <span className="text-white">{poll.pollster}</span>
            <span>•</span>
            <span>{poll.date}</span>
            <span>•</span>
            <span>{poll.sampleSize}</span>
          </div>
        </div>
        <TrendingUp className="h-5 w-5 text-green-400" />
      </div>
      <div className="space-y-3 mb-4">
        {poll.parties.map((party, index) => (
          <div key={party.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">{party.name}</span>
              <span className="text-white">{party.percentage}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${party.colorGradient} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${animatedWidths[index] || 0}%`,
                  boxShadow: party.colorGradient.includes('orange') ? '0 2px 8px rgba(249, 115, 22, 0.4)' :
                            party.colorGradient.includes('red') ? '0 2px 8px rgba(239, 68, 68, 0.4)' :
                            party.colorGradient.includes('green') ? '0 2px 8px rgba(34, 197, 94, 0.4)' :
                            party.colorGradient.includes('blue') ? '0 2px 8px rgba(59, 130, 246, 0.4)' :
                            party.colorGradient.includes('purple') ? '0 2px 8px rgba(168, 85, 247, 0.4)' :
                            '0 2px 8px rgba(100, 116, 139, 0.4)'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <MiniChart chartData={poll.chartData} />
    </div>
  );
};

const LatestPolls = () => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                    <h2 className="text-2xl text-white">Latest Polls</h2>
                    <p className="text-xs text-slate-400">Professional polling aggregates</p>
                </div>
            </div>
            <div className="space-y-4 mb-6">
                {pollsData.map(poll => (
                    <PollCard key={poll.title} poll={poll} />
                ))}
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-white group">
                View All Polls
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default LatestPolls;