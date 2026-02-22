import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {spacing} from '@theme/spacing';
import {sizes} from '@theme/sizes';
import {FeedItem} from '@types/global.types';
import {getCategoryColors} from '@shared/utils';
import {formatTimeAgo} from '@shared/utils';
import {Avatar, Badge, CategoryCard, LikeButton} from '@shared/components';

interface FeedCardProps {
  item: FeedItem;
}

export const FeedCard = ({item}: FeedCardProps) => {
  const catColors = getCategoryColors(item.topic.color);

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
          <Avatar
            initial={item.userDisplayName.charAt(0)}
            color={catColors.accent}
          />
          <Text style={styles.userName}>{item.userDisplayName}</Text>
        </View>
        <Badge
          icon={item.topic.icon}
          label={item.topic.title}
          colorScheme={catColors.accent}
        />
      </View>

      {/* Image-like card area */}
      <CategoryCard bgColor={catColors.bg} accentColor={catColors.accent}>
        {renderCardContent()}
      </CategoryCard>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <LikeButton
            initialLiked={item.isLiked}
            initialCount={item.likeCount}
          />
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
    borderRadius: sizes.radii.lg,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: sizes.rowPaddingV,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  userName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  contentArea: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.rowPaddingV,
    gap: spacing.sm,
  },
  checkIcon: {
    fontSize: sizes.icon.sm,
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
    fontSize: sizes.icon.xl,
    opacity: 0.15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: sizes.rowPaddingV,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
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
