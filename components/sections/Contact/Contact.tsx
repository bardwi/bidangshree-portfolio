'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Socials } from '@/components/ui/Icons';
import styles from './Contact.module.scss';
import { useT } from '@/lib/i18n/dictionary';

type ContactFormState = {
  fn: string;
  ln: string;
  cy: string;
  su: string;
  em: string;
  ms: string;
};

const initialFormState: ContactFormState = {
  fn: '',
  ln: '',
  cy: '',
  su: '',
  em: '',
  ms: '',
};

export default function Contact() {
  const t = useT();
  const [form, setForm] = useState(initialFormState);

  const handleChange =
    (key: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value,
      }));
    };

  const sendMail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.su || t.contact.mailSubjectFallback(form.fn),
    );

    const body = encodeURIComponent(
      `Name: ${form.fn} ${form.ln}
      Company: ${form.cy}
      Email: ${form.em}

${form.ms}`,
    );

    window.location.href = `mailto:bardwi.brm@gmail.com?subject=${subject}&body=${body}`;
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

            <button type="submit" className={styles.submit}>
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
