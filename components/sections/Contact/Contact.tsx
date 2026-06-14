'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Socials } from '@/components/ui/Icons';
import styles from './Contact.module.scss';

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
      form.su || `Portfolio enquiry from ${form.fn}`,
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
          <span className="eyebrow">Contact</span>
          <h2>Hiring for a UX-minded PM/PO? Let&apos;s talk.</h2>
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

            <p>
              Product Owner / Product Manager in Berlin who pairs UX judgment
              with a builder&apos;s background. If you&apos;re making something
              users actually need, I&apos;d love to hear about it.
            </p>

            <Socials className={styles.socials} />
          </div>

          <form className={`${styles.form} ${styles.rise}`} onSubmit={sendMail}>
            <div className={styles.field}>
              <label htmlFor="fn">
                First name <span className={styles.req}>*</span>
              </label>
              <input
                id="fn"
                value={form.fn}
                onChange={handleChange('fn')}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="ln">Last name</label>
              <input id="ln" value={form.ln} onChange={handleChange('ln')} />
            </div>

            <div className={styles.field}>
              <label htmlFor="cy">Company</label>
              <input id="cy" value={form.cy} onChange={handleChange('cy')} />
            </div>

            <div className={styles.field}>
              <label htmlFor="su">Subject</label>
              <input id="su" value={form.su} onChange={handleChange('su')} />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="em">
                Email <span className={styles.req}>*</span>
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
                Message <span className={styles.req}>*</span>
              </label>
              <textarea
                id="ms"
                value={form.ms}
                onChange={handleChange('ms')}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
