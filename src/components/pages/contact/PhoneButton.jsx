import React, { PropTypes } from 'react';

import Button from 'react-bootstrap/lib/Button';

import STYLES from './PhoneButton.scss';

const PhoneButton = ({ setSpinClass, digit }) => (
  <div className={STYLES.PhoneButton}>
    <Button
      className={STYLES[digit.number]}
      disabled={digit.disabled}
      onClick={setSpinClass.bind(null, digit.value)}>
      { typeof digit.content === 'string' ? <i className={digit.content}></i> : digit.content  }
    </Button>
  </div>
);

PhoneButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  content: PropTypes.object,
}

export default PhoneButton;
