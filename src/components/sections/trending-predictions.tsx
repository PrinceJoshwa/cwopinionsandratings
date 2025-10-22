"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Users, CircleCheckBig, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

type Party = {
  name: string;
  percentage: number;
  gradient: string;
};

type Prediction = {
  user: {
    name: string;
    avatar: string;
    accuracy: string;
    verified: boolean;
  };
  timestamp: string;
  title: string;
  description: string;
  parties: Party[];
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
};

const predictionsData: Prediction[] = [
  {
    user: {
      name: 'PollMaster Pro',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_1.png',
      accuracy: '94.5%',
      verified: true,
    },
    timestamp: '2 hours ago',
    title: 'Bihar 2025 Assembly',
    description: "Strong rural support for NDA in north Bihar, while RJD consolidates Yadav vote. Nitish Kumar's appeal remains crucial.",
    parties: [
      { name: 'NDA Alliance', percentage: 45, gradient: 'from-orange-500 to-orange-400' },
      { name: 'Alliance', percentage: 40, gradient: 'from-green-500 to-green-400' },
      { name: 'Others', percentage: 15, gradient: 'from-blue-500 to-blue-400' },
    ],
    engagement: {
      likes: 248,
      comments: 62,
      shares: 18,
    },
  },
  {
    user: {
      name: 'DataQueen Analytics',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_2.png',
      accuracy: '92.8%',
      verified: true,
    },
    timestamp: '6 hours ago',
    title: 'Ohio 2026 Governor',
    description: 'Suburban swing favoring GOP, but Dem ground game in Cleveland/Columbus could narrow the gap.',
    parties: [
      { name: 'Republican', percentage: 52, gradient: 'from-red-500 to-red-400' },
      { name: 'Democrat', percentage: 46, gradient: 'from-blue-500 to-blue-400' },
      { name: 'Independent', percentage: 2, gradient: 'from-slate-500 to-slate-400' },
    ],
    engagement: {
      likes: 189,
      comments: 31,
      shares: 12,
    },
  },
  {
    user: {
      name: 'ElectionGuru',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/826c46e6-f3ce-4f75-8cc1-4b7e8c3e0495-online-honey-15753092-figma-site/assets/images/images_3.png',
      accuracy: '91.2%',
      verified: true,
    },
    timestamp: '1 day ago',
    title: 'Puducherry 2026 Assembly',
    description: "Anti-incumbency against Congress, AINRC's alliance with BJP could swing coastal constituencies.",
    parties: [
      { name: 'AINRC', percentage: 42, gradient: 'from-purple-500 to-purple-400' },
      { name: 'INC', percentage: 38, gradient: 'from-blue-500 to-blue-400' },
      { name: 'Alliance', percentage: 6, gradient: 'from-green-500 to-green-400' },
      { name: 'Others', percentage: 14, gradient: 'from-slate-500 to-slate-400' },
    ],
    engagement: {
      likes: 156,
      comments: 24,
      shares: 9,
    },
  },
];

const PredictionCard = ({ prediction }: { prediction: Prediction }) => {
  const [animatedWidths, setAnimatedWidths] = useState<number[]>([]);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setAnimatedWidths(prediction.parties.map(p => p.percentage));
    }, 100);
    return () => clearTimeout(timer);
  }, [prediction.parties]);

  return (
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/30">
          <Image src={prediction.user.avatar} alt={prediction.user.name} width={32} height={32} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-sm text-slate-300">{prediction.user.name}</span>
            {prediction.user.verified && <CircleCheckBig className="h-3.5 w-3.5 text-blue-400 fill-blue-400" />}
            <span className="text-xs text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full font-medium">{prediction.user.accuracy}</span>
          </div>
          <span className="text-xs text-slate-400">{prediction.timestamp}</span>
        </div>
      </div>
      <h3 className="text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">{prediction.title}</h3>
      <p className="text-sm text-slate-300 mb-4">{prediction.description}</p>
      <div className="space-y-3 mb-4">
        {prediction.parties.map((party, index) => (
          <div key={party.name}>
            <div className="flex items-center text-sm mb-1.5">
              <span className="text-slate-300 flex-shrink-0">{party.name}</span>
            </div>
            <div className="h-10 bg-slate-800 rounded-lg overflow-hidden relative">
              <div
                className={`h-full rounded-lg bg-gradient-to-r ${party.gradient} transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                style={{ 
                  width: `${animatedWidths[index] || 0}%`,
                  boxShadow: party.gradient.includes('orange') ? '0 2px 12px rgba(249, 115, 22, 0.5)' :
                            party.gradient.includes('red') ? '0 2px 12px rgba(239, 68, 68, 0.5)' :
                            party.gradient.includes('green') ? '0 2px 12px rgba(34, 197, 94, 0.5)' :
                            party.gradient.includes('blue') ? '0 2px 12px rgba(59, 130, 246, 0.5)' :
                            party.gradient.includes('purple') ? '0 2px 12px rgba(168, 85, 247, 0.5)' :
                            '0 2px 12px rgba(100, 116, 139, 0.5)'
                }}
              >
                <span className="text-white font-semibold text-base">{party.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <ThumbsUp className="h-4 w-4" />
            <span>{prediction.engagement.likes}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span>{prediction.engagement.comments}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Share2 className="h-4 w-4" />
            <span>{prediction.engagement.shares}</span>
          </div>
        </div>
        <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
          View Full Discussion →
        </button>
      </div>
    </div>
  );
};

const TrendingPredictions = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <Users className="h-5 w-5 text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl text-white">Trending Predictions</h2>
          <p className="text-xs text-slate-400">Community forecasts • Accuracy tracked</p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        {predictionsData.map((prediction, index) => (
          <PredictionCard key={index} prediction={prediction} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full sm:w-1/2 border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-white">
          View All
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full sm:w-1/2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 duration-300">
          Submit Yours
        </button>
      </div>
    </div>
  );
};

export default TrendingPredictions;