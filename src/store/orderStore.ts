import { create } from 'zustand';
import { OrderState } from '../utils/types';

const useOrderStore = create<OrderState>((set) => ({
  currentOrder: {},
  setCurrentOrder: (order) => set({ currentOrder: order }),
  resetOrder: () => set({ currentOrder: {} }),
}));

export default useOrderStore;