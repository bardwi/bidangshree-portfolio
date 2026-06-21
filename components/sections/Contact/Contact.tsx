'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Socials } from '@/components/ui/Icons';
import Toast from '@/components/ui/Toast/Toast';
import styles from './Contact.module.scss';
import { useAppLocale, useT } from '@/lib/i18n/dictionary';

type ContactFormState = {
  fn: string;
  ln: string;
  cy: string;
  su: string;
  em: string;
  ms: string;
  website: string; // Honeypot field to catch bots
};

type Status = 'idle' | 'sending' | 'success' | 'error';
const initialFormState: ContactFormState = {
  fn: '',
  ln: '',
  cy: '',
  su: '',
  em: '',
  ms: '',
  website: '',
};

export default function Contact() {
  const t = useT();
  const locale = useAppLocale();
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<Status>('idle');
  const closeToast = useCallback(() => setStatus('idle'), []);

  const handleChange =
    (key: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value,
      }));
    };

  const sendMail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.fn,
          lastName: form.ln,
          company: form.cy,
          subject: form.su,
          email: form.em,
          message: form.ms,
          website: form.website,
          locale,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setForm(initialFormState);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="block paper2">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
        </div>

        <div className={styles.contactGrid}>
          <div className={`${styles.contactIntro} ${styles.rise}`}>
            <div className={styles.logo}>
              <Image
                className={styles.logoImg}
                src="/logo.png"
                alt="BB monogram"
                width={64}
                height={90}
              />
            </div>

            <p>{t.contact.intro}</p>

            <Socials className={styles.socials} />
          </div>

          <form className={`${styles.form} ${styles.rise}`} onSubmit={sendMail}>
            <div className={styles.field}>
              <label htmlFor="fn">
                {t.contact.firstName} <span className={styles.req}>*</span>
              </label>
              <input
                id="fn"
                value={form.fn}
                onChange={handleChange('fn')}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="ln">{t.contact.lastName}</label>
              <input id="ln" value={form.ln} onChange={handleChange('ln')} />
            </div>

            <div className={styles.field}>
              <label htmlFor="cy">{t.contact.company}</label>
              <input id="cy" value={form.cy} onChange={handleChange('cy')} />
            </div>

            <div className={styles.field}>
              <label htmlFor="su">{t.contact.subject}</label>
              <input id="su" value={form.su} onChange={handleChange('su')} />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="em">
                {t.contact.email} <span className={styles.req}>*</span>
              </label>
              <input
                id="em"
                type="email"
                value={form.em}
                onChange={handleChange('em')}
                required
              />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="ms">
                {t.contact.message} <span className={styles.req}>*</span>
              </label>
              <textarea
                id="ms"
                value={form.ms}
                onChange={handleChange('ms')}
                required
              />
            </div>

            {/* Honeypot: hidden from real users, catches bots. */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange('website')}
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        </div>
      </div>
      <Toast
        open={status === 'success' || status === 'error'}
        variant={status === 'error' ? 'error' : 'success'}
        message={status === 'error' ? t.contact.error : t.contact.success}
        duration={status === 'error' ? 10000 : 6000}
        closeLabel={locale === 'de' ? 'Schließen' : 'Dismiss'}
        onClose={closeToast}
      />
    </section>
  );
}
