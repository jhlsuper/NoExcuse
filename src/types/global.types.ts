export interface Topic {
  id: string;
  title: string;
  icon: string;
  color: string;
  createdAt: number;
  order: number;
}

export interface RecordItem {
  text: string;
  done: boolean;
}

export interface Record {
  id: string;
  topicId: string;
  type: 'list' | 'single';
  items: RecordItem[];
  content: string;
  duration: number;
  pomodoroCount: number;
  date: string;
  cardImageUrl?: string;
  cardLayout: 'list' | 'single' | 'timer';
  isPublic: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Diary {
  id: string;
  date: string;
  text: string;
  mood: string;
  isPublic: boolean;
  generatedImageUrl?: string;
  createdAt: number;
}

export interface DailySummary {
  date: string;
  totalMinutes: number;
  topicBreakdown: { [topicId: string]: number };
  recordCount: number;
  hasDiary: boolean;
  score: 0 | 1 | 2 | 3 | 4;
}
