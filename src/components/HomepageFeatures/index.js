import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Professional Portfolio',
    Svg: require('@site/static/img/homepage_portfolio_tile.svg').default,
    description: (
      <>
        Explore highlights from my work in content strategy, documentation 
        systems, and knowledge management. Each project reflects a commitment to 
        clarity, collaboration, and creating tools that make information 
        effortless to find and use.
      </>
    ),
    link: '/docs/portfolio',
  },
  {
    title: 'Resume',
    Svg: require('@site/static/img/homepage_resume_tile.svg').default,
    description: (
      <>
        Curious about my background? My resume outlines a career built on connecting 
        people, process, and information, from technical writing to organizational 
        strategy and transformation.
      </>
    ),
    link: 'docs/resume',
  },
  {
    title: 'Recommendations',
    Svg: require('@site/static/img/homepage_recommendations_tile.svg').default,
    description: (
      <>
        The best part of my work is the people I get to partner with. Read what 
        teammates, engineers, and leaders have shared about our collaborations 
        and results.
      </>
    ),
    link: 'docs/recommendations',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
