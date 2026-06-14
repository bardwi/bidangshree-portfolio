'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import styles from './CookieSettingsButton.module.scss';

type CookieSettingsButtonProps = {
  label?: string;
};

export default function CookieSettingsButton({
  label = 'Cookie settings',
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className={styles.button}
    >
      {label}
    </button>
  );
}
