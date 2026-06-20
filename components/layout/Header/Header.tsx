'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Case Study', href: '/#linguahub' },
  { label: 'Bootcamp', href: '/#bootcamp' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCaseStudyPage = pathname.startsWith('/case-studies');

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
            {navItems.map((item) => (
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
                Let&apos;s talk
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
