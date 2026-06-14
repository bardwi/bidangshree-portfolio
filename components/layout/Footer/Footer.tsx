import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.site}>
      <div className={`wrap ${styles.footIn}`}>
        <span>© 2026 Bidangshree Brahma</span>

        <span>
          <Link href="/imprint">Imprint</Link>
          {' · '}
          <Link href="/datenschutz">Privacy</Link>
        </span>
      </div>
    </footer>
  );
}
