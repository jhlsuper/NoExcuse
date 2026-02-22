import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {spacing} from '@theme/spacing';
import {sizes} from '@theme/sizes';

interface LikeButtonProps {
  initialLiked: boolean;
  initialCount: number;
  onToggle?: (liked: boolean) => void;
}

export const LikeButton = ({initialLiked, initialCount, onToggle}: LikeButtonProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const handlePress = () => {
    const next = !liked;
    setLiked(next);
    setCount(prev => (next ? prev + 1 : prev - 1));
    onToggle?.(next);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.icon}>{liked ? '❤️' : '🤍'}</Text>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  icon: {
    fontSize: sizes.icon.md,
  },
  count: {
    ...typography.bodySmall,
    color: colors.text,
  },
});
