import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx(styles.heroBanner)} >
      <div className={clsx(styles.heroInner)}>
        <Heading as="h1" className={clsx(styles.heroTagline)}>
          <img src={require('../../static/img/ingersoll-headshot-2024.jpg').default} className={clsx(styles.heroPhoto)} alt="Headshot of Jenna Ingersoll" />
          <span class={clsx(styles.heroTitle)}>{siteConfig.title}</span>
        </Heading>
        <p><b>Content and knowledge systems should do more than inform—they should empower.</b></p>
        <p>Hello! I'm Jenna Ingersoll — a Seattle-based documentation specialist, knowledge manager, and educator with a passion for technology and writing. From documentation and content strategy to program management and team leadership, I help organizations build intuitive, scalable solutions that make information effortless to find and use.</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about-me">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
