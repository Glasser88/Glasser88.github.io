import React from 'react';

import { DIGITS } from '../../../constants/digits';

import PhoneDial from './PhoneDial';

import Button from 'react-bootstrap/lib/Button';

import STYLES from './Phone.scss';

const GITHUB = (
  <a href="https://github.com/Glasser88" target='_blank'>Glasser88</a>
);

const EMAIL = (
  <a href='mailto:glasser1988@gmail.com?subject=Your hired!'>glasser1988@gmail.com</a>
);

const TWITTER = (
  <a href="https://twitter.com/Glasser1988" target='_blank'>@Glasser1988</a>
);

const LINKEDIN = (
  <a href='https://www.linkedin.com/pub/trevor-glass/51/484/102' target='_blank'>Trevor Glass</a>
);

const determineInfoClass = (spinClass) => {
  switch(spinClass) {
    case 'Github':
    return 'GithubFade';

    case 'Twitter':
    return 'TwitterFade';

    case 'Email':
    return 'EmailFade'

    case 'LinkedIn':
    return 'LinkedInFade';

    default:
    return 'NormalInfo';
  }
};

const Phone = ({ setSpinClass, spinDial }) => {
  return (
    <div className={STYLES.Phone}>
      <div className={STYLES.dialBackground}></div>
      <div className={STYLES.phoneImage}></div>
      <PhoneDial
        spinDial={spinDial}
        setSpinClass={setSpinClass}
      />
      <div className={STYLES.ring}></div>
      <div className={STYLES.infoBar}>
        <div className={determineInfoClass(spinDial)}>
          {spinDial === 'Github' ? GITHUB : null}
          {spinDial === 'Twitter' ? TWITTER : null}
          {spinDial === 'Email' ? EMAIL : null}
          {spinDial === 'LinkedIn' ? LINKEDIN : null}
        </div>
      </div>
    </div>
  );
}

export default Phone;
