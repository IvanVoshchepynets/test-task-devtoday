import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "./Toast";

type ToastType = "info" | "success" | "error";
type ToastItem = { id: string; message: string; type?: ToastType; duration?: number };

type ToastContextType = {
  show: (message: string, opts?: Partial<ToastItem>) => void;
  remove: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, opts?: Partial<ToastItem>) => {
    const id = String(Date.now() + Math.random());
    const toast: ToastItem = {
      id,
      message,
      type: opts?.type ?? "info",
      duration: opts?.duration ?? 4000,
    };
    setToasts((s) => [...s, toast]);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show, remove }}>
      {children}
      <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 9999 }}>
        {toasts.map((t) => (
          <Toast key={t.id} id={t.id} duration={t.duration} type={t.type} onClose={() => remove(t.id)}>
            {t.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
