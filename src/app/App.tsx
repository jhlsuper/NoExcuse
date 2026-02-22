import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { queryClient } from '@services/queryClient';
import { RootNavigator } from './navigation/RootNavigator';
import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={colors.background} />
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
