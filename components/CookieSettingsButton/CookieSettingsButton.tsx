'use client';

import { useLocale } from 'next-intl';
import * as CookieConsent from 'vanilla-cookieconsent';
import styles from './CookieSettingsButton.module.scss';

type CookieSettingsButtonProps = {
  label?: string;
};

export default function CookieSettingsButton({
  label,
}: CookieSettingsButtonProps) {
  const locale = useLocale();
  const text =
    label ?? (locale === 'de' ? 'Cookie-Einstellungen' : 'Cookie settings');

  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className={styles.button}
    >
      {text}
    </button>
  );
}
