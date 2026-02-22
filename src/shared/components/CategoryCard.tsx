import React from 'react';
import {View, StyleSheet} from 'react-native';
import {spacing} from '@theme/spacing';
import {sizes} from '@theme/sizes';

interface CategoryCardProps {
  bgColor: string;
  accentColor: string;
  children: React.ReactNode;
}

export const CategoryCard = ({bgColor, accentColor, children}: CategoryCardProps) => (
  <View style={[styles.card, {backgroundColor: bgColor}]}>
    <View style={[styles.accentBar, {backgroundColor: accentColor}]} />
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    marginHorizontal: spacing.sm,
    borderRadius: sizes.radii.md,
    overflow: 'hidden',
    position: 'relative',
  },
  accentBar: {
    height: sizes.accentBarHeight,
    width: '100%',
  },
});
