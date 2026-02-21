import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';
import { colors } from '@theme/colors';

const LoginScreen = () => {
  const setUser = useAuthStore((s) => s.setUser);

  // 임시: Firebase 연동 전 테스트용
  const handleTempLogin = () => {
    setUser({
      uid: 'temp-uid',
      email: 'test@test.com',
      displayName: 'Test User',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NO EXCUSE</Text>
      <Text style={styles.subtitle}>자기개발 기록</Text>

      <TouchableOpacity style={styles.button} onPress={handleTempLogin}>
        <Text style={styles.buttonText}>임시 로그인 (개발용)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 48,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
