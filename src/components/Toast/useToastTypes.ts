export type ToastType = 'info' | 'success' | 'error';
export type ToastItem = {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
};

export type ToastContextType = {
  show: (message: string, opts?: Partial<Omit<ToastItem, 'id' | 'message'>>) => void;
  remove: (id: string) => void;
};
