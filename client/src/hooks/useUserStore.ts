import { create } from "zustand";

interface UserStore {
    user: User;
    setUser: (user: User) => void;
}

const userUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}));

export default userUserStore;
