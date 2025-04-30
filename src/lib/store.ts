import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
    email: string;
    setUser: (email: string) => void;
    clearUser: () => void;
}

interface MoodState {
    mood: {
        moodToday: string;
        moodHistory: { date: string; mood: string }[];
    };
    setMood: (mood: string) => void;
    setMoodHistory: (moodHistory: { date: string; mood: string }[]) => void;
    _hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            email: "",
            setUser: (email: string) => set({ email }),
            clearUser: () => set({ email: "" }),
        }),
        {
            name: "user-store",
        }
    )
);

export const useMoodStore = create<MoodState>()(
    persist(
        (set) => ({
            mood: {
                moodToday: "",
                moodHistory: [],
            },
            setMood: (mood: string) =>
                set((state) => ({
                    mood: { ...state.mood, moodToday: mood },
                })),
            setMoodHistory: (moodHistory) =>
                set((state) => ({
                    mood: { ...state.mood, moodHistory },
                })),
            _hasHydrated: false,
            setHasHydrated: (value) => set({ _hasHydrated: value }),
        }),
        {
            name: "mood-store",
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);