'use client';

import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styles from './BackToTop.module.scss';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.button} ${show ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}
