import { prisma } from './prisma';

export type NotificationType = 
  | 'REPLY'
  | 'MENTION'
  | 'UPVOTE'
  | 'REACTION'
  | 'BADGE_UNLOCKED'
  | 'CASE_APPROVED'
  | 'CASE_REJECTED'
  | 'CASE_UPDATED'
  | 'POST_PINNED';

interface CreateNotificationParams {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  metadata?: Record<string, any>;
}

/**
 * Create a notification for a user
 */
export async function createNotification({
  userId,
  type,
  title,
  message,
  link,
  metadata,
}: CreateNotificationParams) {
  try {
    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        link,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    console.log(`[NOTIFICATION] Created for user ${userId}: ${type} - ${title}`);
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
}

/**
 * Notify user when someone replies to their post or comment
 */
export async function notifyReply(
  recipientId: string,
  authorName: string,
  contentType: 'post' | 'comment',
  contentId: string,
  link: string
) {
  return createNotification({
    userId: recipientId,
    type: 'REPLY',
    title: `${authorName} a répondu à votre ${contentType}`,
    message: `${authorName} a laissé une réponse sur votre ${contentType === 'post' ? 'post' : 'commentaire'}.`,
    link,
    metadata: {
      authorName,
      contentType,
      contentId,
    },
  });
}

/**
 * Notify user when their post/comment receives an upvote
 */
export async function notifyUpvote(
  recipientId: string,
  contentType: 'post' | 'comment',
  contentId: string,
  link: string
) {
  return createNotification({
    userId: recipientId,
    type: 'UPVOTE',
    title: `Votre ${contentType} a reçu un vote positif`,
    message: `Votre ${contentType === 'post' ? 'post' : 'commentaire'} a été apprécié par un membre de la communauté !`,
    link,
    metadata: {
      contentType,
      contentId,
    },
  });
}

/**
 * Notify user when someone reacts to their post
 */
export async function notifyReaction(
  recipientId: string,
  authorName: string,
  emoji: string,
  postId: string,
  link: string
) {
  return createNotification({
    userId: recipientId,
    type: 'REACTION',
    title: `${authorName} a réagi ${emoji}`,
    message: `${authorName} a réagi ${emoji} à votre post.`,
    link,
    metadata: {
      authorName,
      emoji,
      postId,
    },
  });
}

/**
 * Notify user when they unlock a new badge
 */
export async function notifyBadgeUnlocked(
  userId: string,
  badgeName: string,
  badgeEmoji: string,
  reputation: number
) {
  return createNotification({
    userId,
    type: 'BADGE_UNLOCKED',
    title: `🎉 Nouveau badge débloqué !`,
    message: `Félicitations ! Vous avez débloqué le badge "${badgeEmoji} ${badgeName}" avec ${reputation} points de réputation.`,
    link: '/leaderboard',
    metadata: {
      badgeName,
      badgeEmoji,
      reputation,
    },
  });
}

/**
 * Notify user when their reported case is approved
 */
export async function notifyCaseApproved(
  userId: string,
  caseName: string,
  caseId: string
) {
  return createNotification({
    userId,
    type: 'CASE_APPROVED',
    title: `✅ Votre cas a été approuvé !`,
    message: `Le cas "${caseName}" que vous avez signalé a été approuvé par un administrateur. Vous avez gagné 50 points de réputation !`,
    link: `/database/${caseId}`,
    metadata: {
      caseName,
      caseId,
    },
  });
}

/**
 * Notify user when their reported case is rejected
 */
export async function notifyCaseRejected(
  userId: string,
  caseName: string,
  reason?: string
) {
  return createNotification({
    userId,
    type: 'CASE_REJECTED',
    title: `❌ Votre cas a été rejeté`,
    message: reason 
      ? `Le cas "${caseName}" a été rejeté. Raison : ${reason}`
      : `Le cas "${caseName}" que vous avez signalé a été rejeté.`,
    link: '/report',
    metadata: {
      caseName,
      reason,
    },
  });
}

/**
 * Notify user when their post is pinned
 */
export async function notifyPostPinned(
  userId: string,
  postTitle: string,
  postId: string
) {
  return createNotification({
    userId,
    type: 'POST_PINNED',
    title: `📌 Votre post a été épinglé !`,
    message: `Félicitations ! Votre post "${postTitle}" a été épinglé par un modérateur.`,
    link: `/forum/${postId}`,
    metadata: {
      postTitle,
      postId,
    },
  });
}

/**
 * Mark a notification as read
 */
export async function markNotificationAsRead(notificationId: string) {
  return prisma.notification.update({
    where: { id: notificationId },
    data: { isRead: true },
  });
}

/**
 * Mark all notifications as read for a user
 */
export async function markAllNotificationsAsRead(userId: string) {
  return prisma.notification.updateMany({
    where: {
      userId,
      isRead: false,
    },
    data: { isRead: true },
  });
}

/**
 * Delete old read notifications (cleanup)
 */
export async function deleteOldNotifications(daysOld: number = 30) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysOld);

  return prisma.notification.deleteMany({
    where: {
      isRead: true,
      createdAt: {
        lt: cutoffDate,
      },
    },
  });
}
