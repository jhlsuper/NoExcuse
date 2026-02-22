import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {sizes} from '@theme/sizes';

interface AvatarProps {
  initial: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = ({initial, color, size = 'md'}: AvatarProps) => {
  const dim = sizes.avatar[size];
  return (
    <View
      style={[
        styles.container,
        {width: dim, height: dim, borderRadius: dim / 2, backgroundColor: color},
      ]}>
      <Text style={styles.text}>{initial}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '700',
  },
});
