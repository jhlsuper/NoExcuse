import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { FeedScreen } from '@features/feed/screens/FeedScreen';

// 임시 placeholder 화면들
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
  </View>
);
const TimerScreen = () => <PlaceholderScreen name="Timer" />;
const DiaryScreen = () => <PlaceholderScreen name="Diary" />;
const ProgressScreen = () => <PlaceholderScreen name="Progress" />;
const SettingsScreen = () => <PlaceholderScreen name="Settings" />;

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.surfaceLight,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: 24,
  },
});
