import React from 'react';

import { LINKS } from '../../../constants/links';

import STYLES from './InfoLink.scss';

const InfoLink = ({ spinClass }) => (
  <div className={STYLES.InfoLink}>
    { LINKS.map((link, i) => (
      <div key={i}>
      { spinClass === link.name ? (
        <a href={link.url} target='_blank'>
          <i className={link.icon}></i>&nbsp;&nbsp;{link.title}
        </a>
      ) : null}
      </div>
    ))}
  </div>
);

export default InfoLink;
