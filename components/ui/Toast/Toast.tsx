'use client';

import { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';
import styles from './Toast.module.scss';

type ToastVariant = 'success' | 'error';

type ToastProps = {
  open: boolean;
  variant: ToastVariant;
  message: string;
  duration?: number;
  closeLabel?: string;
  onClose: () => void;
};

export default function Toast({
  open,
  variant,
  message,
  duration = 6000,
  closeLabel = 'Dismiss',
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  const Icon = variant === 'success' ? FiCheckCircle : FiAlertCircle;
  const isError = variant === 'error';

  return (
    <div
      className={styles.viewport}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      <div className={`${styles.toast} ${styles[variant]}`}>
        <Icon className={styles.icon} aria-hidden="true" />
        <p className={styles.message}>{message}</p>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={closeLabel}
        >
          <FiX aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
