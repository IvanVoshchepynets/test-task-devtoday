import { useContext } from 'react';
import type { ToastContextType } from './useToastTypes';
import { ToastContext } from './ToastProvider';

export const useToast = (): ToastContextType => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
