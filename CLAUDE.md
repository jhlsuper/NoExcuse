# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NoExcuse is a React Native (0.84.0) mobile app for personal development tracking — recording activities and managing time with a Pomodoro technique. Written in TypeScript, targeting iOS and Android.

## Common Commands

- `npm start` — Start Metro bundler
- `npm run android` — Build and run on Android
- `npm run ios` — Build and run on iOS
- `npm run lint` — Run ESLint
- `npm test` — Run Jest tests
- `cd ios && bundle exec pod install` — Install iOS native dependencies

## Architecture

### Feature-based structure under `src/`

- `src/app/` — App entry point and navigation (RootNavigator, MainTabs with 5 bottom tabs)
- `src/features/` — Domain features (auth, timer), each with `screens/` and `store/` subdirectories
- `src/services/` — Firebase config, React Query client
- `src/theme/` — Colors (dark theme, category-specific palettes), spacing, typography
- `src/types/` — Global TypeScript interfaces (Topic, Record, Diary, DailySummary)

### Path Aliases

Configured in both `tsconfig.json` and `babel.config.js` (via `babel-plugin-module-resolver`):

- `@app/*` → `src/app/*`
- `@features/*` → `src/features/*`
- `@shared/*` → `src/shared/*`
- `@services/*` → `src/services/*`
- `@theme/*` → `src/theme/*`
- `@typeDefs/*` → `src/types/*`

### State Management

- **Zustand** stores live in `src/features/*/store/` (e.g., `useAuthStore`, `useTimerStore`)
- **React Query** for server state — configured with 5min stale time, 30min GC, max 2 retries

### Navigation

RootNavigator gates on auth state (Zustand `useAuthStore`). Authenticated users see MainTabs (Home, Timer, Diary, Progress, Settings).

### Firebase

Native-level config (`GoogleService-Info.plist` for iOS, `google-services.json` for Android). Environment variables via `react-native-config` with `.env` file (see `.env.example`).

## Code Style

- Single quotes, trailing commas, arrow parens avoided when possible (Prettier)
- ESLint extends `@react-native` config
- Platform-specific fonts defined in `src/theme/typography.ts`
