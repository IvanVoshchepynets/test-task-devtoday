import React, { createContext, useState, useCallback, type ReactNode } from 'react';
import Toast from './Toast';
import type { ToastItem, ToastContextType } from './useToastTypes';

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, opts?: Partial<Omit<ToastItem, 'id' | 'message'>>) => {
    const id = `${Date.now()}-${Math.random()}`;
    const toast: ToastItem = {
      id,
      message,
      type: opts?.type ?? 'info',
      duration: opts?.duration ?? 4000,
    };
    setToasts((prev) => [...prev, toast]);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show, remove }}>
      {children}
      <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            id={t.id}
            duration={t.duration}
            type={t.type}
            onClose={() => remove(t.id)}
          >
            {t.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
export { ToastContext };
