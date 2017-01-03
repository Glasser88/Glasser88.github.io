import React from 'react';

import { DIGITS } from '../../../constants/digits';

import PhoneButton from './PhoneButton';

import Button from 'react-bootstrap/lib/Button';

import STYLES from './PhoneDial.scss';

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

const PhoneDial = ({ spinDial, setSpinClass }) => (
  <div className={STYLES.PhoneDial}>
    <div className={determineClass(spinDial)}>
      { DIGITS.map((digit, i) => (
        <PhoneButton
          key={i}
          digit={digit}
          setSpinClass={setSpinClass}
        />
      ))}
      <div className={STYLES.insideCircle}>
      </div>
    </div>
  </div>
);

export default PhoneDial;
