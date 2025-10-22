"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Crown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Type definitions
type RankTheme = {
  badgeBg: string;
  badgeText: string;
  progressGradient: { id: string; from: string; to: string };
};

type Predictor = {
  rank: number;
  name: string;
  specialization: string;
  followers: string;
  accuracy: number;
  predictions: number;
  imageUrl?: string;
  theme: RankTheme;
};

// Data for predictors
const predictorsData: Predictor[] = [
  {
    rank: 1,
    name: "PollMaster Pro",
    specialization: "India & US Politics",
    followers: "12.5k followers",
    accuracy: 94.5,
    predictions: 187,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_1.png",
    theme: {
      badgeBg: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      badgeText: 'text-black',
      progressGradient: { id: 'gold-gradient', from: '#FBBF24', to: '#F59E0B' },
    }
  },
  {
    rank: 2,
    name: "DataQueen Analytics",
    specialization: "US State Elections",
    followers: "9.8k followers",
    accuracy: 92.8,
    predictions: 164,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_4.png",
    theme: {
      badgeBg: 'bg-gradient-to-br from-slate-300 to-slate-500',
      badgeText: 'text-black',
      progressGradient: { id: 'silver-gradient', from: '#D1D5DB', to: '#9CA3AF' },
    }
  },
  {
    rank: 3,
    name: "ElectionGuru",
    accuracy: 42.8,
    specialization: "India Regional",
    followers: "10.2k followers",
    predictions: 203,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_2.png",
    theme: {
      badgeBg: 'bg-gradient-to-br from-amber-600 to-amber-800',
      badgeText: 'text-white',
      progressGradient: { id: 'bronze-gradient', from: '#D97706', to: '#B45309' },
    }
  },
  {
    rank: 4,
    name: "PredictorMax",
    specialization: "Canada & UK",
    followers: "8.3k followers",
    accuracy: 89.7,
    predictions: 142,
    imageUrl: undefined, // No image, will use placeholder
    theme: {
      badgeBg: '', // No badge for 4th place
      badgeText: '',
      progressGradient: { id: 'gray-gradient', from: '#4B5563', to: '#374151' },
    }
  }
];

// Reusable Circular Progress Avatar Component
const CircularProgressAvatar = ({ predictor }: { predictor: Predictor }) => {
  const SIZE = 80;
  const STROKE_WIDTH = 5;
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const offset = CIRCUMFERENCE - (predictor.accuracy / 100) * CIRCUMFERENCE;

  return (
    <div className="relative h-20 w-20">
      <svg className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id={predictor.theme.progressGradient.id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={predictor.theme.progressGradient.from} />
            <stop offset="100%" stopColor={predictor.theme.progressGradient.to} />
          </linearGradient>
        </defs>
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} strokeWidth={STROKE_WIDTH} className="stroke-slate-700/50" fill="transparent" />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke={`url(#${predictor.theme.progressGradient.id})`}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-[7px] rounded-full overflow-hidden">
        {predictor.imageUrl
          ? <Image src={predictor.imageUrl} alt={predictor.name} width={66} height={66} className="h-full w-full object-cover" />
          : <div className="flex h-full w-full items-center justify-center bg-slate-800"><User className="h-8 w-8 text-slate-500" /></div>
        }
      </div>
      {predictor.rank <= 3 && (
        <div className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-900 text-xs font-bold ${predictor.theme.badgeBg} ${predictor.theme.badgeText}`}>
          {predictor.rank}<span className="-translate-y-0.5 text-[10px]">{predictor.rank === 1 ? 'st' : predictor.rank === 2 ? 'nd' : 'rd'}</span>
        </div>
      )}
    </div>
  );
};


// Reusable Predictor Card Component
const PredictorCard = ({ predictor }: { predictor: Predictor }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(predictor.accuracy);
    }, 100);
    return () => clearTimeout(timer);
  }, [predictor.accuracy]);

  return (
    <div className="flex h-full flex-col items-center rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-500/10">
      <CircularProgressAvatar predictor={predictor} />
      <h3 className="mt-4 text-lg font-medium text-white">{predictor.name}</h3>
      <p className="text-xs text-slate-400">{predictor.specialization}</p>
      <p className="mb-5 text-[11px] text-slate-500">{predictor.followers}</p>
      
      <div className="mb-4 w-full text-left">
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-xs text-slate-500">Accuracy Rate</span>
          <span className={`text-sm font-medium ${
            predictor.accuracy >= 94 ? 'text-green-400' :
            predictor.accuracy >= 92 ? 'text-green-400' :
            predictor.accuracy >= 91 ? 'text-green-400' :
            'text-green-400'
          }`}>{predictor.accuracy}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
          <div 
            className="h-full rounded-full bg-green-500 transition-all duration-1000 ease-out" 
            style={{ 
              width: `${animatedWidth}%`,
              boxShadow: '0 2px 8px rgba(34, 197, 94, 0.4)'
            }}
          ></div>
        </div>
      </div>
      
      <div className="mt-auto flex w-full items-center justify-between">
        <div className="text-left">
          <span className="block text-xs text-slate-500">Predictions</span>
          <span className="text-base font-medium text-white">{predictor.predictions}</span>
        </div>
        <Button size="sm" className="h-8 rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30">Follow</Button>
      </div>
    </div>
  );
};

// Main Section Component
const TopPredictors = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 p-3 shadow-lg shadow-yellow-500/30">
                            <Crown className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl text-white">Top Predictors</h2>
                            <p className="text-sm text-slate-400">Follow the best analysts in the game</p>
                        </div>
                    </div>
                    <Button variant="outline" className="h-9 rounded-lg border-yellow-500/50 bg-yellow-400/90 px-4 text-sm font-medium text-black hover:bg-yellow-400">
                        View Leaderboard
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {predictorsData.map((predictor) => (
                        <PredictorCard key={predictor.rank} predictor={predictor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopPredictors;