import { create } from 'zustand';

interface UserState {
  isLogin: boolean;
  email: string | null;
  username: string | null;
  icon: string | null;
  updateUser: (isLogin: boolean, email: string, username: string, icon: string) => void;
}

const useStore = create<UserState>((set) => ({
  isLogin: false,
  email: null,
  username: null,
  icon: null,

  // ユーザー情報を更新する関数
  updateUser: (isLogin, email, username, icon) => set({ isLogin, email, username, icon }),
}));

export default useStore;
