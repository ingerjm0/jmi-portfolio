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

function HomepageCerts() {
  return (
    <div>
      <div className={clsx(styles.sectionBanner)} >
        <h2>Certifications</h2>
      </div>
      <div className={clsx(styles.sectionContents)}>
        <p className={clsx(styles.expTitle)} >Certified Google Cloud Digital Leader</p>
        <p className={clsx(styles.expBody)} >Issued March 2025 - Expires March 2028</p>
        <p className={clsx(styles.expTitle)} >Continuing Leadership Education Program <br />Executive Leadership</p>
        <p className={clsx(styles.expBody)} > University of Nevada-Las Vegas </p>
        <p className={clsx(styles.expBody)} >Issued December 2024</p>
      </div>
    </div>
  );
}

function HomepageExp() {
  return (
    <div>
      <div className={clsx(styles.sectionBanner)} >
        <h2>I've Worked With</h2>
      </div>
      <div className={clsx(styles.sectionContents)}>
        <div className="row">
          <div className={clsx('col')}>
            <div className="text--center">
              <img src={require('../../static/img/aristocrat.png').default} />
            </div>
          </div>
          <div className={clsx('col')}>
            <div className="text--center">
              <img src={require('../../static/img/bigfish.png').default} />
            </div>
          </div>
          <div className={clsx('col')}>
            <div className="text--center">
              <img src={require('../../static/img/highfidelity.png').default} />
            </div>
          </div>
          <div className={clsx('col')}>
            <div className="text--center">
              <img src={require('../../static/img/shodor.jpeg').default} />
            </div>
          </div>
          <div className={clsx('col')}>
            <div className="text--center">
              <img src={require('../../static/img/seagull.png').default} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Jenna Ingersoll`}
      description="Description will go into a meta tag in <head />">
      <HomepageBanner />
      <main>
        <HomepageFeatures />
        <HomepageCerts />
        <HomepageExp />
      </main>
    </Layout>
  );
}
