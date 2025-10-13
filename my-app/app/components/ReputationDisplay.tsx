'use client';

import { Award, TrendingUp } from 'lucide-react';

interface ReputationDisplayProps {
  reputation: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function ReputationDisplay({ 
  reputation, 
  showLabel = true,
  size = 'md',
  animated = false 
}: ReputationDisplayProps) {
  // Calculate level based on reputation
  const level = Math.floor(reputation / 100) + 1;
  const progressToNextLevel = (reputation % 100);
  
  // Determine color based on reputation
  const getColor = () => {
    if (reputation >= 5000) return 'text-purple-600';
    if (reputation >= 1000) return 'text-blue-600';
    if (reputation >= 500) return 'text-green-600';
    if (reputation >= 100) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center gap-2 ${animated ? 'animate-pulse' : ''}`}>
      <Award className={`${iconSizes[size]} ${getColor()}`} />
      <div className="flex flex-col">
        <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
          <span className={`font-bold ${getColor()}`}>{reputation}</span>
          {showLabel && <span className="text-gray-600">points</span>}
        </div>
        {size !== 'sm' && (
          <div className="text-xs text-gray-500">
            Niveau {level}
          </div>
        )}
      </div>
    </div>
  );
}

// Component to show reputation progress bar
export function ReputationProgress({ reputation }: { reputation: number }) {
  const level = Math.floor(reputation / 100) + 1;
  const progressToNextLevel = (reputation % 100);
  const nextLevelReputation = level * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Niveau {level}</span>
        <span>Niveau {level + 1}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressToNextLevel}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1 text-center">
        {progressToNextLevel} / 100 XP
      </div>
    </div>
  );
}
