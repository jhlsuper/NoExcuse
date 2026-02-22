# NoExcuse Design System

## Token Reference

### Colors (`src/theme/colors.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#6C5CE7` | 주요 액션, 브랜드 |
| `secondary` | `#00CEC9` | 보조 강조 |
| `background` | `#0F0F0F` | 앱 배경 |
| `surface` | `#1A1A1A` | 카드, 시트 배경 |
| `surfaceLight` | `#2A2A2A` | 상위 표면 |
| `text` | `#FFFFFF` | 본문 텍스트 |
| `textSecondary` | `#A0A0A0` | 보조 텍스트 |
| `error` | `#FF6B6B` | 에러 상태 |
| `success` | `#00B894` | 성공 상태 |
| `warning` | `#FDCB6E` | 경고 상태 |

### Category Colors (`colors.category`)

| Key | Background | Accent | 용도 |
|-----|-----------|--------|------|
| `study` | `#1a1a2e` | `#6C5CE7` | 학습 |
| `exercise` | `#2d1b00` | `#FF6B35` | 운동 |
| `coding` | `#0d1117` | `#00CEC9` | 코딩 |
| `reading` | `#1a1510` | `#D4A574` | 독서 |
| `creative` | `#1a1028` | `#A855F7` | 창작 |
| `default` | `#1A1A1A` | `#A0A0A0` | 폴백 |

### Spacing (`src/theme/spacing.ts`)

| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `xxl` | 48px |

### Sizes (`src/theme/sizes.ts`)

| Token | Values | Usage |
|-------|--------|-------|
| `avatar.sm / md / lg` | 24 / 32 / 48 | Avatar 컴포넌트 크기 |
| `icon.sm / md / lg / xl` | 16 / 18 / 24 / 48 | 아이콘 크기 |
| `radii.sm / md / lg / full` | 8 / 12 / 16 / 9999 | 라운드 코너 |
| `accentBarHeight` | 3 | CategoryCard 상단 바 |
| `rowPaddingV` | 10 | 헤더/푸터 세로 패딩 |

### Typography (`src/theme/typography.ts`)

| Token | Size | Weight |
|-------|------|--------|
| `h1` | 28 | 700 |
| `h2` | 22 | 600 |
| `h3` | 18 | 600 |
| `body` | 16 | 400 |
| `bodySmall` | 14 | 400 |
| `caption` | 12 | 400 |

---

## Shared Components

### Avatar

원형 이니셜 아바타.

```tsx
<Avatar initial="J" color="#6C5CE7" size="md" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initial` | `string` | — | 표시할 글자 (1글자) |
| `color` | `string` | — | 배경색 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 24 / 32 / 48px |

### Badge

토픽 아이콘 + 라벨을 표시하는 필 뱃지.

```tsx
<Badge icon="📚" label="학습" colorScheme="#6C5CE7" />
```

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `string` | 이모지 아이콘 |
| `label` | `string` | 뱃지 텍스트 |
| `colorScheme` | `string` | 텍스트 색상, 배경은 33% 투명도 적용 |

### CategoryCard

정사각형 테마 카드. 상단에 accent bar 포함.

```tsx
<CategoryCard bgColor="#1a1a2e" accentColor="#6C5CE7">
  {children}
</CategoryCard>
```

| Prop | Type | Description |
|------|------|-------------|
| `bgColor` | `string` | 카드 배경색 |
| `accentColor` | `string` | 상단 바 색상 |
| `children` | `ReactNode` | 카드 내부 콘텐츠 |

### LikeButton

하트 토글 + 좋아요 카운트.

```tsx
<LikeButton initialLiked={false} initialCount={12} onToggle={liked => {}} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialLiked` | `boolean` | — | 초기 좋아요 상태 |
| `initialCount` | `number` | — | 초기 카운트 |
| `onToggle` | `(liked: boolean) => void` | — | 토글 콜백 (선택) |

---

## colorScheme 패턴

카테고리 컬러는 `colors.category[key]`로 조회하며, `getCategoryColors(key)` 유틸로 fallback 처리됩니다.

```ts
import {getCategoryColors} from '@shared/utils';

const catColors = getCategoryColors('study');
// → { bg: '#1a1a2e', accent: '#6C5CE7' }
```

accent 색상은 Badge의 `colorScheme`, Avatar의 `color`, CategoryCard의 `accentColor`에 전달합니다.

---

## 새 카테고리 추가 방법

1. `src/theme/colors.ts`의 `category` 객체에 새 키 추가:
   ```ts
   category: {
     // ...existing
     music: { bg: '#1a1520', accent: '#E91E63' },
   }
   ```
2. 별도 코드 변경 불필요 — `getCategoryColors()`가 자동으로 인식합니다.
3. 존재하지 않는 키는 `default` 색상으로 폴백됩니다.
