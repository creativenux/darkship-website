import { create } from 'zustand';

interface CalendlyModalState {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useCalendlyModalStore = create<CalendlyModalState>((set) => ({
  open: false,
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
})); 