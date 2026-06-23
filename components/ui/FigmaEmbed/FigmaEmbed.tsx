'use client';

import styles from './FigmaEmbed.module.scss';

type FigmaEmbedProps = {
  url: string;
  title: string;
  label?: string;
  description?: string;
};

function toEmbedSrc(url: string) {
  try {
    const u = new URL(url);
    u.hostname = 'embed.figma.com';
    u.searchParams.set('embed-host', 'share');
    u.searchParams.set('footer', 'false');
    u.searchParams.set('scaling', 'scale-down-width');
    u.searchParams.set('content-scaling', 'fixed');
    return u.toString();
  } catch {
    return url;
  }
}

export default function FigmaEmbed({
  url,
  title,
  label,
  description,
}: FigmaEmbedProps) {
  return (
    <div className={styles.embed}>
      {(label || description) && (
        <div className={styles.head}>
          {label ? <span className={styles.label}>{label}</span> : null}
          <h3 className={styles.title}>{title}</h3>
          {description ? <p className={styles.desc}>{description}</p> : null}
        </div>
      )}
      <div className={styles.frameWrap}>
        <iframe
          title={title}
          src={toEmbedSrc(url)}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
