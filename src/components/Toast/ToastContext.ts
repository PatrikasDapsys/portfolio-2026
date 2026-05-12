import { createContext } from 'react';

export type ToastVariant = 'error' | 'success';

export type ToastInput = {
  message: string;
  variant: ToastVariant;
};

export type ToastContextValue = {
  showToast: (toast: ToastInput) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);
