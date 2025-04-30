import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
    email: string;
    setUser: (email: string) => void;
    clearUser: () => void;
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
