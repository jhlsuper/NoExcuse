import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {spacing} from '@theme/spacing';
import {FeedItem} from '@types/global.types';

interface FeedCardProps {
  item: FeedItem;
}

const getCategoryColors = (colorKey: string) => {
  const key = colorKey as keyof typeof colors.category;
  return colors.category[key] ?? colors.category.default;
};

const formatTimeAgo = (timestamp: number): string => {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
};

export const FeedCard = ({item}: FeedCardProps) => {
  const [liked, setLiked] = useState(item.isLiked);
  const [likeCount, setLikeCount] = useState(item.likeCount);
  const catColors = getCategoryColors(item.topic.color);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  const renderCardContent = () => {
    const {record, topic} = item;

    if (record.type === 'list' && record.items.length > 0) {
      return (
        <View style={styles.contentArea}>
          {record.items.map((ri, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text style={styles.checkIcon}>
                {ri.done ? '✅' : '⬜'}
              </Text>
              <Text
                style={[
                  styles.listText,
                  ri.done && styles.listTextDone,
                ]}
                numberOfLines={1}>
                {ri.text}
              </Text>
            </View>
          ))}
          <Text style={styles.topicIcon}>{topic.icon}</Text>
        </View>
      );
    }

    return (
      <View style={styles.contentArea}>
        <Text style={styles.singleContent} numberOfLines={4}>
          {record.content}
        </Text>
        <Text style={styles.topicIcon}>{topic.icon}</Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={[styles.avatar, {backgroundColor: catColors.accent}]}>
            <Text style={styles.avatarText}>
              {item.userDisplayName.charAt(0)}
            </Text>
          </View>
          <Text style={styles.userName}>{item.userDisplayName}</Text>
        </View>
        <View style={[styles.badge, {backgroundColor: catColors.accent + '33'}]}>
          <Text style={[styles.badgeText, {color: catColors.accent}]}>
            {item.topic.icon} {item.topic.title}
          </Text>
        </View>
      </View>

      {/* Image-like card area */}
      <View style={[styles.imageCard, {backgroundColor: catColors.bg}]}>
        <View
          style={[
            styles.accentBar,
            {backgroundColor: catColors.accent},
          ]}
        />
        {renderCardContent()}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Pressable onPress={handleLike} style={styles.likeButton}>
            <Text style={styles.likeIcon}>{liked ? '❤️' : '🤍'}</Text>
            <Text style={styles.likeCount}>{likeCount}</Text>
          </Pressable>
          <Text style={styles.pomodoroText}>
            🍅 {item.record.pomodoroCount}
          </Text>
        </View>
        <Text style={styles.timeAgo}>{formatTimeAgo(item.createdAt)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '700',
  },
  userName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  badge: {
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  badgeText: {
    ...typography.caption,
    fontWeight: '600',
  },
  imageCard: {
    aspectRatio: 1,
    marginHorizontal: spacing.sm,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  accentBar: {
    height: 3,
    width: '100%',
  },
  contentArea: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm + 2,
    gap: spacing.sm,
  },
  checkIcon: {
    fontSize: 16,
  },
  listText: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  listTextDone: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  singleContent: {
    ...typography.h3,
    color: colors.text,
    lineHeight: 28,
  },
  topicIcon: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    fontSize: 48,
    opacity: 0.15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  likeIcon: {
    fontSize: 18,
  },
  likeCount: {
    ...typography.bodySmall,
    color: colors.text,
  },
  pomodoroText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  timeAgo: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
