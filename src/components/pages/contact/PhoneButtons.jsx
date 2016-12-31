import React, { PropTypes } from 'react';

import Button from 'react-bootstrap/lib/Button';

import STYLES from './PhoneButtons.scss';

const PhoneButtons = ({ setSpinClass, digit }) => (
  <div className={STYLES.PhoneButtons}>
    <Button
      className={STYLES[digit.number]}
      disabled={digit.disabled}
      onClick={setSpinClass.bind(null, digit.onClick)}>
      { typeof digit.content === 'string' ? <i className={digit.content}></i> : digit.content  }
    </Button>
  </div>
);

PhoneButtons.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  content: PropTypes.object,
}

export default PhoneButtons;
