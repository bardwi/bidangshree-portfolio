import {
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiGitBranch,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

type IconProps = {
  className?: string;
};

export function Socials({ className }: IconProps) {
  return (
    <div className={className} aria-label="Social links">
      <a
        href="https://www.linkedin.com/in/bidangshree-brahma/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin aria-hidden="true" />
      </a>

      <a
        href="https://github.com/bardwi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FiGithub aria-hidden="true" />
      </a>

      <a href="mailto:bardwi.brm@gmail.com" aria-label="Email">
        <FiMail aria-hidden="true" />
      </a>
    </div>
  );
}

export function IconExternal() {
  return <FiExternalLink aria-hidden="true" />;
}

export function IconDoc() {
  return <FiFileText aria-hidden="true" />;
}

export function IconNodes() {
  return <FiGitBranch aria-hidden="true" />;
}
