import React from 'react';

import PhoneDial from './PhoneDial';

import InfoLink from './InfoLink';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './Phone.scss';

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

const Phone = ({ setSpinClass, spinClass }) => {
  return (
    <div className={STYLES.Phone}>
      <div className={STYLES.dialBackground}></div>
      <div className={STYLES.phoneBase}></div>
      <div className={STYLES.phoneIcon}>
        <i className="fa fa-phone"></i>
      </div>
      <Glyphicon className={STYLES.phoneGlyph} glyph="phone-alt" />
      <PhoneDial
        spinClass={spinClass}
        setSpinClass={setSpinClass}
      />
      <div className={STYLES.ring}></div>
      <div className={STYLES.infoBar}>
        <div className={determineInfoClass(spinClass)}>
          <InfoLink
            spinClass={spinClass}
          />
        </div>
      </div>
    </div>
  );
}

export default Phone;
