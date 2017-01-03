import React from 'react';

import STYLES from './InfoLink.scss';

const LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/Glasser88',
    title: 'Glasser88',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Glasser1988',
    title: '@Glasser1988',
  },
  {
    name: 'Email',
    url: 'mailto:glasser1988@gmail.com?subject=Your hired!',
    title: 'glasser1988@gmail.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/pub/trevor-glass/51/484/102',
    title: 'Trevor Glass',
  }
];

const InfoLink = ({ spinClass }) => (
  <div className={STYLES.InfoLink}>
    { LINKS.map((link, i) => (
      <div key={i}>
      { spinClass === link.name ? (
        <a href={link.url} target='_blank'>{link.title}</a>
      ) : null}
      </div>
    ))}
  </div>
);

export default InfoLink;
