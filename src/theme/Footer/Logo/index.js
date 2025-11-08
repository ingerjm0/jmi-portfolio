import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';
function LogoImage({logo}) {
  const {withBaseUrl} = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  };
  return (
    <ThemedImage
      className={clsx('footer__logo', logo.className)}
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
      style={logo.style}
    />
  );
}
export default function FooterLogo({logo}) {
  return logo.href ? (
    <div>
      <Link
        href={logo.href}
        className={styles.footerLogoLink}
        target={logo.target}>
        <LogoImage logo={logo} />
      </Link>
      <a href="https://www.linkedin.com/in/jenna-ingersoll" className={styles.footerLogoLink}><img src={require('@site/static/img/linkedin.png').default} className={styles.social} /></a>
    </div>
  ) : (
    <LogoImage logo={logo} />
  );
}
