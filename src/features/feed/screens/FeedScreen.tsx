import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {spacing} from '@theme/spacing';
import {FeedCard} from '@features/feed/components/FeedCard';
import {mockFeedItems} from '@features/feed/data/mockFeed';
import {FeedItem} from '@typeDefs/global.types';

export const FeedScreen = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({item}: {item: FeedItem}) => <FeedCard item={item} />;

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Text style={styles.logo}>NO EXCUSE</Text>
      </View>
      <FlatList
        data={mockFeedItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceLight,
  },
  logo: {
    ...typography.h2,
    color: colors.primary,
    fontWeight: '800',
    letterSpacing: 2,
  },
  list: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
});
