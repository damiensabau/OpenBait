import { prisma } from './prisma';
import { notifyBadgeUnlocked } from './notifications';

interface BadgeThreshold {
  name: string;
  minReputation: number;
  emoji: string;
}

const BADGES: BadgeThreshold[] = [
  { name: 'Nouveau membre', minReputation: 0, emoji: '🆕' },
  { name: 'Contributeur', minReputation: 100, emoji: '🌟' },
  { name: 'Chercheur', minReputation: 500, emoji: '🔍' },
  { name: 'Modérateur actif', minReputation: 1000, emoji: '🛡️' },
  { name: 'Expert', minReputation: 5000, emoji: '👑' },
];

/**
 * Calculate which badges a user should have based on their reputation
 */
export function calculateBadges(reputation: number): string[] {
  return BADGES
    .filter(badge => reputation >= badge.minReputation)
    .map(badge => badge.name);
}

/**
 * Award reputation points to a user and update their badges
 */
export async function awardReputation(
  userId: string,
  points: number,
  reason?: string
): Promise<{ newReputation: number; newBadges: string[]; unlockedBadges: string[] }> {
  // Get current user data
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { reputation: true, badges: true },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const oldReputation = user.reputation;
  const newReputation = oldReputation + points;
  
  // Parse old badges
  const oldBadges = user.badges ? JSON.parse(user.badges) : [];
  
  // Calculate new badges
  const newBadges = calculateBadges(newReputation);
  
  // Find newly unlocked badges
  const unlockedBadges = newBadges.filter(badge => !oldBadges.includes(badge));

  // Update user
  await prisma.user.update({
    where: { id: userId },
    data: {
      reputation: newReputation,
      badges: JSON.stringify(newBadges),
    },
  });

  // Log the reputation change (optional - could add a ReputationLog model)
  console.log(`[REPUTATION] User ${userId} earned ${points} points (${oldReputation} → ${newReputation})${reason ? ` - ${reason}` : ''}`);
  
  if (unlockedBadges.length > 0) {
    console.log(`[BADGES] User ${userId} unlocked: ${unlockedBadges.join(', ')}`);
    
    // Send notification for each newly unlocked badge
    for (const badgeName of unlockedBadges) {
      const badge = BADGES.find(b => b.name === badgeName);
      if (badge) {
        try {
          await notifyBadgeUnlocked(userId, badge.name, badge.emoji, newReputation);
        } catch (error) {
          console.error(`Error sending badge notification:`, error);
        }
      }
    }
  }

  return {
    newReputation,
    newBadges,
    unlockedBadges,
  };
}

/**
 * Award reputation for specific actions
 */
export const REPUTATION_REWARDS = {
  CREATE_POST: 5,
  CREATE_COMMENT: 2,
  POST_UPVOTED: 10,
  COMMENT_UPVOTED: 5,
  REPORT_CASE: 10,
  CASE_APPROVED: 50,
  CASE_REJECTED: -5,
  POST_DOWNVOTED: -2,
};
