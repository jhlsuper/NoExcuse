import { create } from 'zustand';

interface TimerState {
  isRunning: boolean;
  seconds: number;
  pomodoroMinutes: number;
  breakMinutes: number;
  completedPomodoros: number;
  isBreak: boolean;
  selectedTopicId: string | null;

  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  completePomodoro: () => void;
  setTopic: (topicId: string) => void;
}

export const useTimerStore = create<TimerState>((set, get) => ({
  isRunning: false,
  seconds: 25 * 60,
  pomodoroMinutes: 25,
  breakMinutes: 5,
  completedPomodoros: 0,
  isBreak: false,
  selectedTopicId: null,

  start: () => set({ isRunning: true }),
  pause: () => set({ isRunning: false }),
  reset: () => {
    const { isBreak, pomodoroMinutes, breakMinutes } = get();
    set({
      isRunning: false,
      seconds: (isBreak ? breakMinutes : pomodoroMinutes) * 60,
    });
  },
  tick: () => {
    const { seconds } = get();
    if (seconds > 0) {
      set({ seconds: seconds - 1 });
    }
  },
  completePomodoro: () => {
    const { isBreak, completedPomodoros, pomodoroMinutes, breakMinutes } = get();
    if (isBreak) {
      set({
        isBreak: false,
        isRunning: false,
        seconds: pomodoroMinutes * 60,
      });
    } else {
      set({
        isBreak: true,
        isRunning: false,
        seconds: breakMinutes * 60,
        completedPomodoros: completedPomodoros + 1,
      });
    }
  },
  setTopic: (topicId) => set({ selectedTopicId: topicId }),
}));
