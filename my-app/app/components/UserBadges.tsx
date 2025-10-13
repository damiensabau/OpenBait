'use client';

interface UserBadgesProps {
  badges: string[];
  reputation: number;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
}

const BADGE_INFO: Record<string, { emoji: string; minReputation: number; description: string }> = {
  'Nouveau membre': {
    emoji: '🆕',
    minReputation: 0,
    description: 'Bienvenue dans la communauté !',
  },
  'Contributeur': {
    emoji: '🌟',
    minReputation: 100,
    description: 'A contribué activement à la communauté',
  },
  'Chercheur': {
    emoji: '🔍',
    minReputation: 500,
    description: 'Expert dans la recherche de cas',
  },
  'Modérateur actif': {
    emoji: '🛡️',
    minReputation: 1000,
    description: 'Modère activement la communauté',
  },
  'Expert': {
    emoji: '👑',
    minReputation: 5000,
    description: 'Contributeur exceptionnel',
  },
};

export default function UserBadges({ 
  badges, 
  reputation, 
  size = 'md',
  showTooltip = true 
}: UserBadgesProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  // Calculate available badges based on reputation
  const availableBadges = Object.entries(BADGE_INFO)
    .filter(([_, info]) => reputation >= info.minReputation)
    .map(([name]) => name);

  // Show either user's actual badges or available badges
  const displayBadges = badges.length > 0 ? badges : availableBadges;

  if (displayBadges.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1">
      {displayBadges.map((badge) => {
        const info = BADGE_INFO[badge];
        if (!info) return null;

        return (
          <span
            key={badge}
            className={`${sizeClasses[size]} cursor-help`}
            title={showTooltip ? `${badge} - ${info.description}` : badge}
          >
            {info.emoji}
          </span>
        );
      })}
    </div>
  );
}

// Export helper function to calculate and update badges
export function calculateBadges(reputation: number): string[] {
  return Object.entries(BADGE_INFO)
    .filter(([_, info]) => reputation >= info.minReputation)
    .sort((a, b) => b[1].minReputation - a[1].minReputation)
    .map(([name]) => name);
}
