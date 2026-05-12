import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ToastContext } from './ToastContext';
import type { ToastInput, ToastVariant } from './ToastContext';
import './Toast.scss';

type Toast = {
  id: string;
  message: string;
  variant: ToastVariant;
  isLeaving?: boolean;
};

const MAX_TOASTS = 3;
const DURATION_MS: Record<ToastVariant, number> = {
  success: 4500,
  error: 6000,
};
const EXIT_MS = 250;

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef(new Map<string, number>());

  const clearTimer = useCallback((id: string) => {
    const handle = timersRef.current.get(id);
    if (handle !== undefined) {
      window.clearTimeout(handle);
      timersRef.current.delete(id);
    }
  }, []);

  const dismiss = useCallback(
    (id: string) => {
      clearTimer(id);
      setToasts((current) =>
        current.map((toast) => (toast.id === id ? { ...toast, isLeaving: true } : toast)),
      );
      const handle = window.setTimeout(() => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
        timersRef.current.delete(id);
      }, EXIT_MS);
      timersRef.current.set(id, handle);
    },
    [clearTimer],
  );

  const showToast = useCallback(
    ({ message, variant }: ToastInput) => {
      const id = crypto.randomUUID();
      setToasts((current) => {
        const next = [...current, { id, message, variant }];
        if (next.length <= MAX_TOASTS) return next;
        const dropped = next.slice(0, next.length - MAX_TOASTS);
        dropped.forEach((toast) => clearTimer(toast.id));
        return next.slice(-MAX_TOASTS);
      });
      const handle = window.setTimeout(() => dismiss(id), DURATION_MS[variant]);
      timersRef.current.set(id, handle);
    },
    [clearTimer, dismiss],
  );

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((handle) => window.clearTimeout(handle));
      timers.clear();
    };
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-stack" aria-live="polite">
        {toasts.map((toast) => {
          const classes = ['toast', `toast--${toast.variant}`];
          if (toast.isLeaving) classes.push('toast--leaving');
          return (
            <div
              key={toast.id}
              className={classes.join(' ')}
              role={toast.variant === 'error' ? 'alert' : 'status'}
            >
              <span className="toast__message">{toast.message}</span>
              <button
                type="button"
                className="toast__close"
                aria-label="Dismiss notification"
                onClick={() => dismiss(toast.id)}
                disabled={toast.isLeaving}
              >
                &times;
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
