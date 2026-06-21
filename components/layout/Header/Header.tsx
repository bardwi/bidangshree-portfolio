'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';
import { Link, usePathname } from '@/i18n/navigation';
import { useAppLocale, useT } from '@/lib/i18n/dictionary';

export default function Header() {
  const pathname = usePathname(); // locale-stripped path, e.g. "/case-studies/..."
  const locale = useAppLocale();
  const t = useT();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCaseStudyPage = pathname.startsWith('/case-studies');
  const otherLocale = locale === 'de' ? 'en' : 'de';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  if (isCaseStudyPage) {
    return null;
  }

  return (
    <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.navIn}`}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Bidangshree Brahma home"
        >
          <Image
            className={styles.logoImg}
            src="/logo.png"
            alt="BB monogram"
            width={38}
            height={54}
            priority
          />
        </Link>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/#contact"
                className={styles.pill}
                onClick={closeMenu}
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.navActions}>
          <Link
            href={pathname}
            locale={otherLocale}
            className={styles.langBtn}
            aria-label={t.nav.switchTo}
            title={t.nav.switchTo}
          >
            <FiGlobe aria-hidden="true" />
            <span>{otherLocale.toUpperCase()}</span>
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
