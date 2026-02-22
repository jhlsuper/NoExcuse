import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '@theme/typography';
import {spacing} from '@theme/spacing';
import {sizes} from '@theme/sizes';

interface BadgeProps {
  icon: string;
  label: string;
  colorScheme: string;
}

export const Badge = ({icon, label, colorScheme}: BadgeProps) => (
  <View style={[styles.container, {backgroundColor: colorScheme + '33'}]}>
    <Text style={[styles.text, {color: colorScheme}]}>
      {icon} {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
    borderRadius: sizes.radii.md,
  },
  text: {
    ...typography.caption,
    fontWeight: '600',
  },
});
