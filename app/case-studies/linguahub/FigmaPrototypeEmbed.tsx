import styles from './LinguaHubCaseStudy.module.scss';

type FigmaPrototypeEmbedProps = {
  label: string;
  title: string;
  description: string;
  url: string;
};

// figma.com/proto/clean Embed Kit 2.0 src
function toEmbedSrc(url: string) {
  const u = new URL(url);
  u.hostname = 'embed.figma.com'; // Embed Kit 2.0 host
  u.searchParams.set('embed-host', 'share');
  u.searchParams.set('footer', 'false'); // removes "FileName · Edited …" bar
  //u.searchParams.set('hide-ui', '1'); // hides toolbar + nav/restart controls
  u.searchParams.set('scaling', 'scale-down-width');
  u.searchParams.set('content-scaling', 'fixed');
  return u.toString();
}

export default function FigmaPrototypeEmbed({
  label,
  title,
  description,
  url,
}: FigmaPrototypeEmbedProps) {
  return (
    <div className={`${styles.prototypeEmbed} ${styles.reveal}`}>
      <div className={styles.prototypeHeader}>
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.figmaFrameWrap}>
        <iframe title={title} src={toEmbedSrc(url)} allowFullScreen />
      </div>
    </div>
  );
}
