import React, { PropTypes } from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './ScreenshotModal.scss';

const ScreenshotModal = ({ showModal, closeModal, imageClass }) => (
  <Modal
    className={STYLES.ScreenshotModal}
    show={showModal}>
    <Modal.Body>
      <Glyphicon
        glyph='remove'
        onClick={closeModal}
        className={STYLES.close}
      />
      <div className={STYLES.body}>
        <div className={STYLES[imageClass]}></div>
      </div>
    </Modal.Body>
  </Modal>
);

ScreenshotModal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  imageClass: PropTypes.string,
}

export default ScreenshotModal;
