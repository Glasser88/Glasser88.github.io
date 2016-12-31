import React from 'react';

import { DIGITS } from '../../../constants/digits';

import PhoneButtons from './PhoneButtons';

import Button from 'react-bootstrap/lib/Button';

import STYLES from './DialPhone.scss';

const GITHUB = (
  <a href="https://github.com/Glasser88" target='_blank'>Glasser88</a>
);

const EMAIL = (
  <a href='mailto:glasser1988@gmail.com?subject=Your hired!'>glasser1988@gmail.com</a>
);

const TWITTER = (
  <a href="https://twitter.com/Glasser1988" target='_blank'>Glasser1988</a>
);

const LINKEDIN = (
  <a href='https://www.linkedin.com/pub/trevor-glass/51/484/102' target='_blank'>Trevor Glass</a>
);

const determineClass = (spinClass) => {
  switch(spinClass) {
    case 'Github':
    return 'Github';

    case 'Twitter':
    return 'Twitter';

    case 'Email':
    return 'Email';

    case 'LinkedIn':
    return 'LinkedIn';

    default:
    return 'dialPhone';
  }
}

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

const dialPhone = ({ setSpinClass, spinDial }) => {
  return (
    <div className={STYLES.phoneBox}>
      <div className={determineClass(spinDial)}>
        { DIGITS.map((digit, i) => (
          <Button
            key={i}
            className={STYLES[digit.number]}
            disabled={digit.disabled}
            onClick={setSpinClass.bind(null, digit.value)}>
            { typeof digit.content === 'string' ? <i className={digit.content}></i> : digit.content  }
          </Button>
        ))}
        <div className={STYLES.insideCircle}>
        </div>
      </div>
      <div className={STYLES.ring}></div>
      <div className={STYLES.infoCircle}>
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

export default dialPhone;
