'use client';

import { Link } from '@/i18n/navigation';
import styles from './Footer.module.scss';
import { useT } from '@/lib/i18n/dictionary';

export default function Footer() {
  const t = useT();

  return (
    <footer className={styles.site}>
      <div className={`wrap ${styles.footIn}`}>
        <span>{t.footer.rights}</span>

        <span>
          <Link href="/imprint">{t.footer.imprint}</Link>
          {' · '}
          <Link href="/datenschutz">{t.footer.privacy}</Link>
        </span>
      </div>
    </footer>
  );
}
